// Layout "editorial": luxo discreto, serifa de destaque, muito espaço em branco.
import { esc, head, whatsappHref, mapsEmbed, mapsLink } from '../../lib/html.mjs'

const monograma = (id = 'g') => `<svg class="mono" viewBox="0 0 84 76" aria-hidden="true" focusable="false">
  <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#C9A887"/><stop offset="1" stop-color="#8A6A4B"/></linearGradient></defs>
  <path d="M37 5 L13 70" fill="none" stroke="url(#${id})" stroke-width="1.6" stroke-linecap="round"/>
  <path d="M39 5 C47 26 56 50 66 70" fill="none" stroke="url(#${id})" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M3 52 C22 28 52 26 80 47" fill="none" stroke="url(#${id})" stroke-width="2" stroke-linecap="round"/>
</svg>`

const logo = (data, href, id) => `<a class="logo" href="${href}" aria-label="${esc(data.nome)}, página inicial">
  ${monograma(id)}
  <span class="logo__txt"><span class="logo__nome">${esc(data.nome)}</span><span class="logo__desc">${esc(data.descritor)}</span></span>
</a>`

function faixaDemo(data) {
  if (!data.demo) return ''
  return `<div class="demo-bar" role="note">Site de demonstração · marca, profissional e imagens fictícias ou ilustrativas</div>`
}

function header(data, url, ctaHref, ativo) {
  const home = url('')
  const trat = url('tratamentos')
  const link = (href, txt, key) => `<a href="${href}"${ativo === key ? ' aria-current="page"' : ''}>${txt}</a>`
  return `${faixaDemo(data)}
<header class="topo" id="topo">
  <div class="topo__in container">
    ${logo(data, home, 'g1')}
    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu" aria-label="Abrir menu"><span></span><span></span></button>
    <nav class="menu" id="menu" aria-label="Principal">
      ${link(home, 'Início', 'home')}
      ${link(home + '#especialidades', 'Especialidades', '')}
      ${link(trat, 'Tratamentos', 'tratamentos')}
      ${link(home + '#fundadora', 'Dra. Marina', '')}
      ${link(home + '#estrutura', 'Estrutura', '')}
      ${link(home + '#contato', 'Contato', '')}
      <a class="btn btn--sm menu__cta" href="${ctaHref}">Agendar avaliação</a>
    </nav>
  </div>
</header>`
}

function footer(data, url) {
  const r = data.responsavel
  return `<footer class="rodape">
  <div class="container rodape__in">
    <div class="rodape__marca">
      ${logo(data, url(''), 'g2')}
      <p class="rodape__ass">${esc(data.assinatura)}</p>
    </div>
    <div class="rodape__col">
      <h2>Navegação</h2>
      <a href="${url('')}">Início</a>
      <a href="${url('tratamentos')}">Tratamentos</a>
      <a href="${url('')}#fundadora">${esc(r.nome)}</a>
      <a href="${url('')}#contato">Contato</a>
    </div>
    <div class="rodape__col">
      <h2>Responsável técnica</h2>
      <p>${esc(r.nome)}<br>${esc(r.cargo)}<br>${esc(r.registro)}</p>
      ${data.demo ? `<p class="rodape__nota">${esc(r.registroNota)}</p>` : ''}
    </div>
  </div>
  <div class="container rodape__fim">
    <p>© ${new Date().getFullYear()} ${esc(data.nome)} ${esc(data.descritor)}. ${data.demo ? 'Site de demonstração, sem clínica real.' : ''}</p>
  </div>
</footer>
<a class="fab" href="WHATS_HREF" aria-label="Agendar avaliação">Agendar avaliação</a>
<script src="JS_SRC" defer></script>`
}

const sec = (cls, inner, id) => `<section class="sec ${cls}"${id ? ` id="${id}"` : ''}>${inner}</section>`

function pageHome(data, url) {
  const h = data.home
  const cta = whatsappHref(data)
  const img = (f) => url('img/' + f)

  const especialidades = data.tratamentos.areas
    .map(
      (a) => `<li class="esp" data-reveal>
        <span class="esp__n">${a.numero}</span>
        <div class="esp__main"><h3>${esc(a.titulo)}</h3><p>${esc(a.descricao)}</p></div>
        <ul class="esp__serv">${a.servicos.map((s) => `<li>${esc(s.nome)}</li>`).join('')}</ul>
      </li>`
    )
    .join('')

  const diferenciais = h.diferenciais.itens
    .map((d, i) => `<li data-reveal><span class="dif__n">${String(i + 1).padStart(2, '0')}</span><h3>${esc(d.titulo)}</h3><p>${esc(d.texto)}</p></li>`)
    .join('')

  const fotos = h.estrutura.fotos
    .map(
      (f) => `<figure class="gal__item gal__${f.area}" data-reveal><img src="${img(f.src)}" alt="${esc(f.alt)}" loading="lazy" decoding="async"></figure>`
    )
    .join('')

  const body = `<body>
${header(data, url, cta, 'home')}
<main id="conteudo">

${sec(
  'hero',
  `<div class="container hero__in">
    <div class="hero__txt">
      <p class="eyebrow">${esc(h.hero.eyebrow)}</p>
      <h1>${esc(h.hero.titulo)}</h1>
      <p class="lead">${esc(h.hero.subtitulo)}</p>
      <div class="acoes">
        <a class="btn" href="${cta}">${esc(h.hero.cta)}</a>
        <a class="btn btn--ghost" href="${url('tratamentos')}">${esc(h.hero.ctaSecundario)}</a>
      </div>
    </div>
    <figure class="hero__img">
      <img src="${img(h.hero.imagem)}" alt="${esc(h.hero.imagemAlt)}" width="600" height="1402" fetchpriority="high">
      <figcaption>${esc(h.hero.cartao)}</figcaption>
    </figure>
  </div>`
)}

${sec(
  'apres',
  `<div class="container apres__in">
    <div class="apres__txt" data-reveal>
      <p class="eyebrow">${esc(h.apresentacao.eyebrow)}</p>
      <h2>${esc(h.apresentacao.titulo)}</h2>
      ${h.apresentacao.texto.map((p) => `<p>${esc(p)}</p>`).join('')}
      <p class="assinatura">${esc(data.assinatura)}</p>
    </div>
    <figure class="apres__img" data-reveal><img src="${img(h.apresentacao.imagem)}" alt="${esc(h.apresentacao.imagemAlt)}" loading="lazy" decoding="async"></figure>
  </div>`
)}

${sec(
  'esps',
  `<div class="container">
    <header class="sec__cab" data-reveal><p class="eyebrow">${esc(h.especialidades.eyebrow)}</p><h2>${esc(h.especialidades.titulo)}</h2></header>
    <ol class="esps__lista">${especialidades}</ol>
    <p class="esps__mais" data-reveal><a class="link" href="${url('tratamentos')}">${esc(h.especialidades.linkTexto)} <span aria-hidden="true">→</span></a></p>
  </div>`,
  'especialidades'
)}

${sec(
  'fund',
  `<div class="container fund__in">
    <figure class="fund__img" data-reveal><img src="${img(h.fundadora.imagem)}" alt="${esc(h.fundadora.imagemAlt)}" loading="lazy" decoding="async"></figure>
    <div class="fund__txt" data-reveal>
      <p class="eyebrow">${esc(h.fundadora.eyebrow)}</p>
      <h2>${esc(h.fundadora.titulo)}</h2>
      <p class="fund__nome">${esc(data.responsavel.nome)}</p>
      <p class="fund__cargo">${esc(data.responsavel.cargo)} · ${esc(data.responsavel.registro)}</p>
      ${h.fundadora.texto.map((p) => `<p>${esc(p)}</p>`).join('')}
      <ul class="pilares">${h.fundadora.pilares.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
    </div>
  </div>`,
  'fundadora'
)}

${sec(
  'difs',
  `<div class="container">
    <h2 class="difs__titulo" data-reveal>${esc(h.diferenciais.titulo)}</h2>
    <ul class="difs__lista">${diferenciais}</ul>
  </div>`
)}

${sec(
  'estr',
  `<div class="container">
    <header class="sec__cab" data-reveal><p class="eyebrow">${esc(h.estrutura.eyebrow)}</p><h2>${esc(h.estrutura.titulo)}</h2><p class="sec__sub">${esc(h.estrutura.texto)}</p></header>
    <div class="gal">${fotos}</div>
    ${data.demo ? `<p class="gal__nota">${esc(h.estrutura.nota)}</p>` : ''}
  </div>`,
  'estrutura'
)}

${sec(
  'cont',
  `<div class="container cont__in">
    <div class="cont__txt" data-reveal>
      <p class="eyebrow eyebrow--claro">${esc(h.contato.eyebrow)}</p>
      <h2>${esc(h.contato.titulo)}</h2>
      <p class="lead">${esc(h.contato.texto)}</p>
      <div class="acoes"><a class="btn btn--claro" href="${cta}">${esc(h.contato.cta)}</a></div>
      <dl class="cont__dados">
        <div><dt>Endereço</dt><dd>${data.contato.endereco.map(esc).join('<br>')}</dd></div>
        <div><dt>WhatsApp</dt><dd>${esc(data.contato.whatsappExibicao)}${data.demo && !data.contato.whatsapp ? ' <small>(ilustrativo)</small>' : ''}</dd></div>
        <div><dt>Horários</dt><dd>${esc(data.contato.horarios)}</dd></div>
      </dl>
      <a class="link link--claro" href="${mapsLink(data)}" target="_blank" rel="noopener">Abrir no Google Maps <span aria-hidden="true">→</span></a>
    </div>
    <div class="cont__mapa" data-reveal>
      <iframe title="Mapa com a localização da clínica" src="${mapsEmbed(data)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>`,
  'contato'
)}
</main>
${footer(data, url)}
</body>
</html>`

  return (
    head({ data, url, title: data.seo.titulo, description: data.seo.descricao }) +
    body.replace('WHATS_HREF', cta).replace('JS_SRC', url('main.js'))
  )
}

function pageTratamentos(data, url) {
  const t = data.tratamentos
  const cta = whatsappHref(data, url('') + '#contato')
  const img = (f) => url('img/' + f)

  const chips = t.areas.map((a) => `<a href="#${a.id}">${esc(a.titulo)}</a>`).join('')
  const areas = t.areas
    .map(
      (a, i) => `<section class="area ${i % 2 ? 'area--inv' : ''}" id="${a.id}">
    <div class="container area__in">
      <div class="area__lado" data-reveal>
        <span class="area__n">${a.numero}</span>
        <h2>${esc(a.titulo)}</h2>
        <p>${esc(a.descricao)}</p>
        <figure class="arco"><img src="${img(a.imagem)}" alt="${esc(a.imagemAlt)}" loading="lazy" decoding="async"></figure>
      </div>
      <ul class="area__lista">
        ${a.servicos.map((s) => `<li data-reveal><h3>${esc(s.nome)}</h3><p>${esc(s.texto)}</p><span class="aval">Indicação após avaliação médica</span></li>`).join('')}
      </ul>
    </div>
  </section>`
    )
    .join('')

  const body = `<body>
${header(data, url, cta, 'tratamentos')}
<main id="conteudo">
  <section class="sec pag-hero">
    <div class="container">
      <p class="eyebrow">${esc(t.hero.eyebrow)}</p>
      <h1>${esc(t.hero.titulo)}</h1>
      <p class="lead">${esc(t.hero.texto)}</p>
      <nav class="chips" aria-label="Áreas de atuação">${chips}</nav>
    </div>
  </section>
  ${areas}
  <section class="sec cont cont--simples">
    <div class="container cont__in cont__in--um">
      <div class="cont__txt">
        <h2>${esc(t.cta.titulo)}</h2>
        <p class="lead">${esc(t.cta.texto)}</p>
        <div class="acoes"><a class="btn btn--claro" href="${cta}">${esc(t.cta.botao)}</a></div>
      </div>
    </div>
  </section>
</main>
${footer(data, url)}
</body>
</html>`

  return (
    head({ data, url, title: data.seo.tituloTratamentos, description: data.seo.descricaoTratamentos }) +
    body.replace('WHATS_HREF', cta).replace('JS_SRC', url('main.js'))
  )
}

export function render(data, url) {
  return {
    '': pageHome(data, url),
    tratamentos: pageTratamentos(data, url),
  }
}

export const assets = ['styles.css', 'main.js']
