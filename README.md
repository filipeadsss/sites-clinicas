# Sites de demonstração para clínicas

Gerador estático sem dependências (Node 18+). Cada site fica em `src/sites/<nome>/` com `data.mjs` (conteúdo, cores, fontes) e `img/`.
Cada layout fica em `src/layouts/<nome>/` (HTML, CSS e JS próprios). O `data.mjs` escolhe o layout em `layout`.

- `node build.mjs` gera `dist/<nome>/` para todos os sites e o índice do portfólio em `dist/`.
- `ROOT=aurelia node build.mjs` gera só esse site na raiz de `dist/` (para publicar o site de um cliente real).
- `node serve.mjs` serve `dist/` em http://localhost:8771.

Demonstrações usam `demo: true` e `noindex: true`. Para um cliente real: `demo: false`, `noindex: false`, preencher WhatsApp, registro (CRM/CRO) e fotos autorizadas.
Regras de conteúdo de saúde: sem antes e depois, preço, promoção, promessa de resultado nem depoimento sobre resultado (CFM/CFO).
