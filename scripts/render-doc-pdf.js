#!/usr/bin/env node
/**
 * render-doc-pdf.js — Motor de export de documentos estratégicos VETORA (HTML → PDF A4).
 *
 * Diferenças em relação a render-report-pdf.js (analytics):
 *   - margin.top: 20mm para acomodar o header VETORA por página
 *   - headerTemplate: "VETORA" à esquerda + "Cliente — Título · Data" à direita
 *   - O doc-template.html usa margin-top: -20mm na .capa para bleed full-bleed
 *
 * Uso:
 *   node scripts/render-doc-pdf.js <input.html> <output.pdf> ["Título"] ["Data"] ["Cliente"]
 *
 * Requisito: Playwright instalado na raiz do container.
 *   npm install playwright && npx playwright install chromium
 */

'use strict';

const path = require('path');
const fs   = require('fs');

const RODAPE = 'Produzido por VETORA · vetora.com.br';

function escapeHtml(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

function buildHeaderDireita(cliente, titulo, data) {
  const t = escapeHtml(titulo);
  const c = escapeHtml(cliente);
  const d = escapeHtml(data);
  if (c && d) return `${c} — ${t} · ${d}`;
  if (c)      return `${c} — ${t}`;
  if (d)      return `${t} · ${d}`;
  return t;
}

async function main() {
  const [, , inputArg, outputArg, tituloArg, dataArg, clienteArg] = process.argv;

  if (!inputArg || !outputArg) {
    console.error('Uso: node scripts/render-doc-pdf.js <input.html> <output.pdf> ["Título"] ["Data"] ["Cliente"]');
    process.exit(1);
  }

  const inputPath  = path.resolve(inputArg);
  const outputPath = path.resolve(outputArg);
  const titulo     = tituloArg  || 'Documento VETORA';
  const data       = dataArg    || '';
  const cliente    = clienteArg || '';

  if (!fs.existsSync(inputPath)) {
    console.error(`ERRO: HTML de entrada não encontrado: ${inputPath}`);
    process.exit(1);
  }

  let chromium;
  try {
    ({ chromium } = require('playwright'));
  } catch {
    console.error('ERRO: Playwright não instalado. Rode na raiz do container:');
    console.error('  npm install playwright && npx playwright install chromium');
    process.exit(1);
  }

  const outDir = path.dirname(outputPath);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const page    = await browser.newPage();

  await page.goto(`file://${inputPath}`, { waitUntil: 'networkidle' });
  try { await page.evaluate(() => document.fonts.ready); } catch (_) {}

  const headerDireita = buildHeaderDireita(cliente, titulo, data);

  /* Header: "VETORA" + linha teal + info do documento
     Renderiza na margem superior (20mm). A capa usa margin-top: -20mm
     para cobrir essa área com o fundo navy, ficando invisível na primeira página. */
  const headerTemplate = `
    <div style="
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 22mm;
      height: 14mm;
      border-bottom: 1.5px solid #00A6A6;
      box-sizing: border-box;
      font-size: 0;
    ">
      <span style="
        font-family: 'Sora', sans-serif;
        font-weight: 700;
        font-size: 8.5pt;
        letter-spacing: 0.14em;
        color: #0B1F3B;
      ">VETORA</span>
      <span style="
        font-family: 'Inter', sans-serif;
        font-size: 7.5pt;
        color: #5a6a78;
        letter-spacing: 0.01em;
      ">${headerDireita}</span>
    </div>`;

  const footerTemplate = `
    <div style="
      width: 100%;
      font-family: 'Inter', sans-serif;
      font-size: 7pt;
      color: #5a6a78;
      padding: 0 22mm;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
    ">
      <span style="letter-spacing: .02em;">${escapeHtml(RODAPE)}</span>
      <span>pág. <span class="pageNumber"></span>/<span class="totalPages"></span></span>
    </div>`;

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate,
    footerTemplate,
    margin: { top: '20mm', bottom: '16mm', left: '0mm', right: '0mm' },
  });

  await browser.close();
  console.log(`✓ PDF gerado: ${path.relative(process.cwd(), outputPath)}`);
}

main().catch(err => {
  console.error('ERRO ao gerar PDF:', err.message);
  process.exit(1);
});
