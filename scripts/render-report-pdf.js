#!/usr/bin/env node
/**
 * render-report-pdf.js — Motor de export de entregáveis VETORA (HTML → PDF).
 *
 * Fonte única no container (scripts/). As skills de cliente o alcançam via resolver
 * (sobem na árvore até achar .vetora-container e usam <container>/scripts/render-report-pdf.js).
 *
 * Renderiza um HTML já montado (a partir de scripts/report-template.html) em PDF A4 com
 * rodapé "Produzido por VETORA · <site>" + numeração em TODAS as páginas.
 *
 * Uso:
 *   node scripts/render-report-pdf.js <input.html> <output.pdf> ["Rodapé custom"]
 *
 * Requisito: Playwright (pré-requisito do projeto — `npm install playwright`).
 */

const path = require('path');
const fs = require('fs');

const RODAPE_PADRAO = 'Produzido por VETORA · vetora.com.br';

async function main() {
  const [, , inputArg, outputArg, rodapeArg] = process.argv;

  if (!inputArg || !outputArg) {
    console.error('Uso: node scripts/render-report-pdf.js <input.html> <output.pdf> ["Rodapé"]');
    process.exit(1);
  }

  const inputPath = path.resolve(inputArg);
  const outputPath = path.resolve(outputArg);
  const rodape = rodapeArg || RODAPE_PADRAO;

  if (!fs.existsSync(inputPath)) {
    console.error(`ERRO: HTML de entrada não encontrado: ${inputPath}`);
    process.exit(1);
  }

  let chromium;
  try {
    ({ chromium } = require('playwright'));
  } catch (e) {
    console.error('ERRO: Playwright não instalado. Rode na raiz do container:');
    console.error('  npm install playwright && npx playwright install chromium');
    process.exit(1);
  }

  const outDir = path.dirname(outputPath);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(`file://${inputPath}`, { waitUntil: 'networkidle' });
  // Garante que Sora/Inter carregaram antes de gerar o PDF.
  try { await page.evaluate(() => document.fonts.ready); } catch (_) {}

  const footerTemplate = `
    <div style="width:100%;font-family:'Inter',sans-serif;font-size:7pt;color:#5a6a78;
                padding:0 16mm;display:flex;justify-content:space-between;align-items:center;">
      <span style="letter-spacing:.02em;">${escapeHtml(rodape)}</span>
      <span>pág. <span class="pageNumber"></span>/<span class="totalPages"></span></span>
    </div>`;

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate,
    margin: { top: '12mm', bottom: '16mm', left: '0mm', right: '0mm' },
  });

  await browser.close();
  console.log(`✓ PDF gerado: ${path.relative(process.cwd(), outputPath)}`);
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"]/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]
  ));
}

main().catch((err) => {
  console.error('ERRO ao gerar PDF:', err.message);
  process.exit(1);
});
