# Sprints — Infraestrutura Container + Clientes

> Aplicação do diagnóstico de arquitetura: tornar o container VETORA e os 8 repos de cliente eficientes, alinhados e sem drift.
> Plano completo: decisões fechadas com o Fernando em jun/2026.

---

## Contexto

O repo `vetora/` é container + VetoraOS da própria VETORA. Dentro de `clientes/` há 8 repos git independentes, cada um um VetoraOS completo para operar o marketing de um cliente. O diagnóstico revelou: drift de skills (15–24 por cliente, sem fonte única), duplicação massiva, vazamento de template ("MazyOS" em 34 arquivos) e ausência de branding VETORA para entregáveis que vão da VETORA → cliente.

## Decisões fechadas

1. **Sync de skills:** versão canônica em `templates/skills-cliente/` + skill `/sync-skills`. Repos seguem autossuficientes.
2. **Marca VETORA:** skills de cliente leem assets VETORA do container por caminho relativo (não duplicar).
3. **Git:** `clientes/*` no `.gitignore` do container.
4. **Ordem:** fonte única de skills primeiro.

## Sequência de sprints

| # | Sprint | Foco |
|---|---|---|
| 01 | Fonte única de skills + limpeza | Acabar com drift, duplicação e vazamento "MazyOS" |
| 02 | Marca VETORA + `/relatorio` | Branding VETORA em todo entregável que vai pro cliente |
| 03 | Higiene de git | `.gitignore` do container + repos de cliente isolados |
| 04 | Template-mestre + `/novo-cliente` | Scaffold padronizado de cliente novo |
| 05 | Dashboard de clientes | Índice `/clientes` com status de cada conta |

## Decisões ainda em aberto (resolver no início da Sprint 01)

- **Conjunto canônico de skills:** baseline = superset de 24 skills? Alguma é VETORA-interna e não deve ir pro cliente?
- **Nome do OS de cliente:** matar "MazyOS" (confirmado). Manter "VetoraOS" genérico (143 refs) ou migrar para `<Cliente>OS`?
- **Achatar nesting:** `clientes/<Nome Visível>/<slug>/` → `clientes/<slug>/`?
