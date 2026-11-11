// Gerador estático sem dependências.
// Uso: node build.mjs            -> gera dist/<slug>/ para cada site em src/sites + índice do portfólio em dist/
//      ROOT=aurelia node build.mjs -> gera só esse site na raiz de dist/ (para publicar o site de um cliente)
import { readdir, readFile, writeFile, mkdir, cp, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { makeUrl, esc } from './src/lib/html.mjs'

const root = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(root, 'dist')
const sitesDir = path.join(root, 'src/sites')
const only = process.env.ROOT || ''

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 76"><rect width="84" height="76" fill="#FAF9F6"/><path d="M37 5 L13 70" fill="none" stroke="#8A6A4B" stroke-width="2" stroke-linecap="round"/><path d="M39 5 C47 26 56 50 66 70" fill="none" stroke="#8A6A4B" stroke-width="4" stroke-linecap="round"/><path d="M3 52 C22 28 52 26 80 47" fill="none" stroke="#B18C6A" stroke-width="2.5" stroke-linecap="round"/></svg>`

await rm(dist, { recursive: true, force: true })
await mkdir(dist, { recursive: true })

const slugs = (await readdir(sitesDir, { withFileTypes: true })).filter((d) => d.isDirectory()).map((d) => d.name)
const built = []

for (const slug of slugs) {
  if (only && slug !== only) continue
  const siteDir = path.join(sitesDir, slug)
  const data = (await import(pathToFileURL(path.join(siteDir, 'data.mjs')).href)).default
  const layout = await import(pathToFileURL(path.join(root, 'src/layouts', data.layout, 'index.mjs')).href)
  const base = only ? '/' : `/${slug}/`
  const out = only ? dist : path.join(dist, slug)
  const url = makeUrl(base)

  const pages = layout.render(data, url)
  for (const [route, html] of Object.entries(pages)) {
    const dir = route ? path.join(out, route) : out
    await mkdir(dir, { recursive: true })
    await writeFile(path.join(dir, 'index.html'), html)
  }
  for (const a of layout.assets) {
    await cp(path.join(root, 'src/layouts', data.layout, a), path.join(out, a))
  }
  if (existsSync(path.join(siteDir, 'img'))) await cp(path.join(siteDir, 'img'), path.join(out, 'img'), { recursive: true })
  await writeFile(path.join(out, 'favicon.svg'), favicon)
  built.push({ slug, data })
  console.log('ok', slug, Object.keys(pages).map((r) => '/' + r).join(' '))
}

// robots: demonstrações não devem ser indexadas
await writeFile(path.join(dist, 'robots.txt'), 'User-agent: *\nDisallow: /\n')

// índice do portfólio (só quando gera todos)
if (!only) {
  const cards = built
    .map(
      ({ slug, data }) => `<a class="card" href="/${slug}/">
        <img src="/${slug}/img/${data.home.hero.imagem}" alt="" width="300" height="360" loading="lazy">
        <span class="card__t">${esc(data.nome)}</span>
        <span class="card__d">${esc(data.descritor)} · ${esc(data.cidade)}</span>
      </a>`
    )
    .join('')
  const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Portfólio de sites para clínicas</title><meta name="robots" content="noindex, nofollow"><style>
  body{margin:0;font-family:system-ui,sans-serif;background:#faf9f6;color:#4b3427}main{width:min(1100px,100% - 40px);margin:0 auto;padding:56px 0}
  h1{font-weight:500;font-size:clamp(1.8rem,5vw,2.6rem);margin:0 0 8px}p{margin:0 0 36px;color:#7a6252}
  .grid{display:grid;gap:24px;grid-template-columns:repeat(auto-fill,minmax(240px,1fr))}.card{display:block;text-decoration:none;color:inherit}
  .card img{width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:4px}.card__t{display:block;font-size:1.3rem;margin-top:12px}.card__d{font-size:.85rem;color:#7a6252}
  </style></head><body><main><h1>Portfólio de sites para clínicas</h1><p>Sites de demonstração. Marcas e imagens fictícias.</p><div class="grid">${cards}</div></main></body></html>`
  await writeFile(path.join(dist, 'index.html'), html)
}
