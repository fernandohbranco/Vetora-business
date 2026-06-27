# Sprint 02 — Camada de Marca VETORA + Skill `/relatorio`

> O pedido que originou tudo: relatório enviado ao cliente precisa soar VETORA, não genérico.
> Saída: skills de cliente conseguem aplicar a marca VETORA em qualquer entregável, com `/relatorio` gerando PDF profissional.

---

## Objetivo

Dentro de um repo de cliente, `identidade/` é a marca **do cliente** — correto para o conteúdo que o cliente publica. Mas um relatório que a **VETORA entrega ao cliente** precisa carregar a marca **VETORA**, que hoje só existe no container. Esta sprint cria a ponte (referência ao container) e uma skill `/relatorio` que padroniza entregáveis profissionais.

**Regra que esta sprint institui:** entregável que vai PARA o cliente = marca VETORA · conteúdo que o cliente PUBLICA = `identidade/` do cliente.

---

## Passo 1 — Resolver de container (ponte de branding)

- [x] Criar marcador `.vetora-container` na raiz do container
- [x] Definir lógica: skill de cliente sobe na árvore de pastas até achar o marcador, e lê `identidade/` de lá (logo-vetora, design-guide, paleta, branding-book)
- [x] Fallback gracioso: se o repo for clonado fora do container (sem marcador), avisar e usar branding genérico — não quebrar
- [x] Documentar a constraint: repo de cliente depende de estar aninhado sob o container para branding VETORA

## Passo 2 — Skill `/relatorio` canônica

- [x] Criar `templates/skills-cliente/relatorio/SKILL.md`
- [x] Entrada: tipo de relatório (ads, performance, auditoria, estratégia), dados/insumos, período
- [x] Aplica branding VETORA via resolver do Passo 1:
  - [x] Capa com logo VETORA, título, cliente, período
  - [x] Paleta VETORA (navy `#0B1F3B`, cyan `#00A6A6`, ice `#F5F7FA`)
  - [x] Tipografia: Sora (títulos) + Inter (corpo)
  - [x] Rodapé "Produzido por VETORA · <site>" em todas as páginas
- [x] Export: MD → HTML → PDF via Playwright (já é pré-requisito do projeto)
- [x] Tom da escrita: consultivo, claro, sem buzzwords (ver `_memoria/preferencias.md`)

## Passo 3 — Migrar `relatorio-ads` para a camada comum

- [x] Atualizar `templates/skills-cliente/relatorio-ads/SKILL.md` para usar o resolver de branding e o motor de export do `/relatorio`
- [x] Evitar duplicação de lógica de capa/rodapé/export entre as duas skills

## Passo 4 — Regra de marca no contexto do cliente

- [x] Adicionar ao template de `CLAUDE.md` de cliente a regra VETORA vs cliente (entregável vs conteúdo publicado)
- [x] Propagar via `/sync-skills` ou aplicar nos 8 CLAUDE.md de cliente

## Passo 5 — Sincronizar e validar

- [x] `/sync-skills --all` para distribuir `/relatorio` e `relatorio-ads` atualizadas
- [x] Gerar um relatório de teste dentro de um repo de cliente

---

## Critérios de "pronto"

- [x] `/relatorio` dentro de um repo de cliente gera PDF com logo + paleta + tipografia VETORA
- [x] `relatorio-ads` produz o mesmo padrão visual VETORA
- [x] Rodapé "Produzido por VETORA" presente em todas as páginas
- [x] Clone standalone (sem container) cai no fallback sem quebrar
- [x] Regra "VETORA vs cliente" documentada no CLAUDE.md de cliente
- [x] PDF tem nível premium — parece consultoria, não export genérico

---

## Referências

- Assets VETORA (container): `identidade/logo-vetora`, `identidade/design-guide.md`, `identidade/branding-book.md`, `identidade/VETORA_Paleta_Tipografia.html`
- Tom: `_memoria/preferencias.md`
- Qualidade visual: McKinsey/Palantir/Linear

---

## ✅ Concluída — 27/06/2026

**O que foi construído:**

- **Marcador `.vetora-container`** na raiz do container — declara assets de marca, motor de export e tokens. O resolver sobe na árvore de pastas até achá-lo.
- **Motor de export (single-source no container):** `scripts/render-report-pdf.js` (Playwright HTML→PDF, A4, rodapé + numeração em todas as páginas) + `scripts/report-template.html` (shell de marca VETORA: capa navy, logo, paleta, Sora/Inter, KPIs, tabelas, alertas em CSS sem emoji).
- **Skill `/relatorio`** canônica em `templates/skills-cliente/relatorio/` (SKILL.md + outputs.md) com resolver de branding + fallback gracioso.
- **`relatorio-ads` migrado** para reaproveitar o resolver e o motor — sem duplicar capa/rodapé/export.
- **Regra de marca "VETORA vs cliente"** fixada no `AGENTS.md` sincronizado (decisão: fonte única, propaga aos 8 via `/sync-skills`, zero drift).
- **`/sync-skills --all`** aplicado: `+relatorio` e `~relatorio-ads` nos 8 clientes, validação 0 diffs.

**Validação executada (de dentro do repo `rancho517`):** resolver achou o container, logo carregada, PDF de 3 páginas nível premium. Fallback fora do container: resolver retorna `null`, gera PDF sem logo, não quebra.

**Setup de ambiente:** Playwright instalado na raiz (`node_modules/` é gitignored) + chromium v1228.

**Decisões:** rodapé = `Produzido por VETORA · vetora.com.br`; regra de marca só no `AGENTS.md` sincronizado (não nos 8 `CLAUDE.md`, que divergem por `/instalar`).

**Pendência menor (fora do escopo):** o `_memoria/empresa.md` do container está com conteúdo do Rancho 517 — resíduo de migração, vale corrigir depois.

---

## Próxima sprint

**Sprint 03 — Higiene de Git**
Isolar os repos de cliente do versionamento do container.
