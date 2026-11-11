// Layout "acolhedor": feminino, próximo e acessível. Ondas, cantos arredondados, cards, FAQ.
import { esc, rich, head } from '../../lib/html.mjs'

const flor = (id = 'f') => `<svg class="flor" viewBox="0 0 80 70" aria-hidden="true" focusable="false">
  <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5B2E52"/><stop offset="1" stop-color="#A8748F"/></linearGradient></defs>
  <g fill="none" stroke="url(#${id})" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M40 6C30 20 30 40 40 58 50 40 50 20 40 6z"/>
    <path d="M44 58C57 56 70 44 72 25 58 27 46 39 44 58z"/>
    <path d="M36 58C23 56 10 44 8 25 22 27 34 39 36 58z"/>
    <path d="M40 58V66M30 64C36 62 44 62 50 64"/>
  </g>
</svg>`

const onda = (cor) => `<svg class="onda" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path fill="${cor}" d="M0 50C180 100 360 100 540 60S900 0 1080 30s260 40 360 10V90H0z"/></svg>`

const separador = (id) => `<div class="sep" aria-hidden="true"><span></span>${flor(id)}<span></span></div>`

function wa(data, msg, fallback) {
  const n = (data.contato.whatsapp || '').replace(/\D/g, '')
  if (!n) return fallback
  return `https://wa.me/${n}?text=${encodeURIComponent(msg || data.contato.mensagemWhatsapp || '')}`
}

const imgTag = (data, url, f, alt = '', extra = '') => {
  const foco = data.foco && data.foco[f]
  return `<img src="${url('img/' + f)}" alt="${esc(alt)}"${foco ? ` style="object-position:${foco}"` : ''} ${extra || 'loading="lazy" decoding="async"'}>`
}

function header(data, url, ctaHref, ativo) {
  const link = (href, txt, key) => `<a href="${href}"${ativo === key ? ' aria-current="page"' : ''}>${txt}</a>`
  return `${data.demo ? '<div class="demo-bar" role="note">Site de demonstração · marca, profissional e imagens fictícias ou ilustrativas</div>' : ''}
<header class="topo" id="topo">
  <div class="topo__in container">
    <a class="logo" href="${url('')}" aria-label="${esc(data.nome)}, página inicial">
      ${flor('lg1')}
      <span class="logo__txt"><span class="logo__nome">${esc(data.nome).toUpperCase()}</span><span class="logo__desc">${esc(data.descritor)}</span></span>
    </a>
    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu" aria-label="Abrir menu"><span></span><span></span><span></span></button>
    <nav class="menu" id="menu" aria-label="Principal">
      ${link(url(''), 'Início', 'home')}
      ${link(url('tratamentos'), 'Tratamentos', 'tratamentos')}
      <a class="btn btn--sm menu__cta" href="${ctaHref}">Fale pelo WhatsApp</a>
    </nav>
  </div>
</header>`
}

function footer(data, url, ctaHref) {
  const r = data.responsavel
  return `<footer class="rodape">
  <div class="container rodape__in">
    <div class="rodape__marca">
      <a class="logo logo--claro" href="${url('')}" aria-label="${esc(data.nome)}">${flor('lg2')}<span class="logo__txt"><span class="logo__nome">${esc(data.nome).toUpperCase()}</span><span class="logo__desc">${esc(data.descritor)}</span></span></a>
      <p class="rodape__ass">${esc(data.assinatura)}</p>
    </div>
    <div class="rodape__col"><h2>Navegação</h2><a href="${url('')}">Início</a><a href="${url('tratamentos')}">Tratamentos</a></div>
    <div class="rodape__col"><h2>Contato</h2><a href="${ctaHref}">WhatsApp ${esc(data.contato.whatsappExibicao)}${data.demo && !data.contato.whatsapp ? ' (ilustrativo)' : ''}</a><p>${data.contato.endereco.map(esc).join('<br>')}</p></div>
  </div>
  <div class="container rodape__fim">
    ${data.demo ? `<p>${esc(r.registroNota)}</p>` : ''}
    <p>© ${new Date().getFullYear()} ${esc(data.nome)} ${esc(data.descritor)}. ${data.demo ? 'Site de demonstração, sem clínica real.' : ''}</p>
  </div>
</footer>
<a class="fab" href="${ctaHref}" aria-label="Falar pelo WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"/></svg><span>WhatsApp</span></a>
<script src="JS_SRC" defer></script>`
}

function pageHome(data, url) {
  const h = data.home
  const cta = '#contato'
  const ctaWa = wa(data, '', '#contato')
  const im = (f, alt, extra) => imgTag(data, url, f, alt, extra)

  const cats = h.categorias.itens
    .map(
      (c) => `<article class="cat" data-reveal>
      <figure class="cat__img">${im(c.imagem, c.alt)}</figure>
      <div class="cat__corpo"><h3>${esc(c.titulo)}</h3><p>${esc(c.texto)}</p>
      <a class="btn btn--ghost btn--sm" href="${url('tratamentos')}#${c.id}">${esc(h.categorias.botao)}</a></div>
    </article>`
    )
    .join('')

  const difs = h.diferenciais.itens
    .map((d, i) => `<li data-reveal><span class="dif__n">${i + 1}</span><h3>${esc(d.titulo)}</h3><p>${esc(d.texto)}</p></li>`)
    .join('')

  const gal = h.ambiente.fotos
    .map((f) => `<figure class="gal__${f.area}" data-reveal>${im(f.src, f.alt)}<figcaption>${esc(f.legenda)}</figcaption></figure>`)
    .join('')

  const fotosApres = h.apresentacao.fotos.map((f, i) => `<figure class="ap__f${i + 1}" data-reveal>${im(f.src, f.alt)}</figure>`).join('')

  const body = `<body>
${header(data, url, ctaWa, 'home')}
<main id="conteudo">

<section class="hero">
  <div class="container hero__in">
    <div class="hero__txt">
      <p class="selo"><span></span>${esc(h.hero.selo)}</p>
      <h1>${rich(h.hero.titulo)}</h1>
      <p class="lead">${esc(h.hero.subtitulo)}</p>
      <div class="acoes">
        <a class="btn" href="${url('tratamentos')}">${esc(h.hero.cta)}</a>
        <a class="btn btn--ghost" href="${ctaWa}">${esc(h.hero.ctaSecundario)}</a>
      </div>
      <ul class="chips">${h.hero.chips.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>
    </div>
    <div class="hero__vis">
      <span class="hero__blob" aria-hidden="true"></span>
      <figure class="hero__foto">${im(h.hero.imagem, h.hero.imagemAlt, 'fetchpriority="high"')}</figure>
      <figure class="hero__apoio" data-parallax="-0.06">${im(h.hero.apoio, h.hero.apoioAlt, 'loading="eager" decoding="async"')}</figure>
      <span class="hero__flor" aria-hidden="true">${flor('hf')}</span>
    </div>
  </div>
  ${onda('#FFFFFF')}
</section>

<section class="sec ap">
  <div class="container ap__in">
    <div class="ap__txt" data-reveal>
      <p class="eyebrow">${esc(h.apresentacao.eyebrow)}</p>
      <h2>${rich(h.apresentacao.titulo)}</h2>
      ${h.apresentacao.texto.map((p) => `<p>${esc(p)}</p>`).join('')}
      <p class="assina">${esc(data.assinatura)}</p>
    </div>
    <div class="ap__fotos">${fotosApres}</div>
  </div>
</section>

<section class="sec cats" id="categorias">
  <div class="container">
    <header class="cab" data-reveal><p class="eyebrow">${esc(h.categorias.eyebrow)}</p><h2>${rich(h.categorias.titulo)}</h2></header>
    <div class="cats__grade">${cats}</div>
  </div>
</section>

<section class="sec fund" id="fundadora">
  <div class="container fund__in">
    <figure class="fund__foto" data-reveal>
      ${im(h.fundadora.imagem, h.fundadora.imagemAlt)}
      <figcaption><strong>${esc(data.responsavel.nome)}</strong><span>${esc(data.responsavel.cargo)}</span></figcaption>
    </figure>
    <div class="fund__txt" data-reveal>
      <p class="eyebrow">${esc(h.fundadora.eyebrow)}</p>
      <h2>${rich(h.fundadora.titulo)}</h2>
      ${h.fundadora.texto.map((p) => `<p>${esc(p)}</p>`).join('')}
      <a class="link" href="${url('tratamentos')}">Ver tratamentos <span aria-hidden="true">→</span></a>
    </div>
  </div>
</section>

<section class="sec difs">
  <span class="difs__flor" aria-hidden="true">${flor('df')}</span>
  <div class="container">
    <h2 class="cab-c" data-reveal>${rich(h.diferenciais.titulo)}</h2>
    <ul class="difs__lista">${difs}</ul>
  </div>
</section>

<section class="sec amb" id="ambiente">
  <div class="container">
    <header class="cab" data-reveal><p class="eyebrow">${esc(h.ambiente.eyebrow)}</p><h2>${rich(h.ambiente.titulo)}</h2><p class="sub">${esc(h.ambiente.texto)}</p></header>
    <div class="gal">${gal}</div>
    ${data.demo ? `<p class="nota">${esc(h.ambiente.nota)}</p>` : ''}
  </div>
</section>

<section class="cta-faixa">
  ${onda('#FFFFFF').replace('class="onda"', 'class="onda onda--topo"')}
  <div class="container cta-faixa__in" data-reveal>
    <span class="cta-faixa__flor" aria-hidden="true">${flor('cf')}</span>
    <h2>${rich(h.cta.titulo)}</h2>
    <p>${esc(h.cta.texto)}</p>
    <a class="btn btn--claro" href="${ctaWa}">${esc(h.cta.botao)}</a>
  </div>
</section>

<section class="sec local" id="contato">
  <div class="container local__in">
    <div data-reveal>
      <p class="eyebrow">${esc(h.local.eyebrow)}</p>
      <h2>${rich(h.local.titulo)}</h2>
      <p>${esc(h.local.texto)}</p>
      <dl class="dados">
        <div><dt>Localização</dt><dd>${data.contato.endereco.map(esc).join('<br>')}</dd></div>
        <div><dt>WhatsApp</dt><dd>${esc(data.contato.whatsappExibicao)}${data.demo && !data.contato.whatsapp ? ' <small>(ilustrativo)</small>' : ''}</dd></div>
        <div><dt>Horários</dt><dd>${esc(data.contato.horarios)}</dd></div>
      </dl>
    </div>
    <figure class="local__foto" data-reveal>${im('fachada.webp', 'Fachada da Essência, ilustração conceitual')}</figure>
  </div>
</section>
</main>
${footer(data, url, ctaWa)}
</body>
</html>`

  return head({ data, url, title: data.seo.titulo, description: data.seo.descricao }) + body.replace('JS_SRC', url('main.js'))
}

function pageTratamentos(data, url) {
  const t = data.tratamentos
  const ctaWa = wa(data, '', url('') + '#contato')
  const im = (f, alt, extra) => imgTag(data, url, f, alt, extra)

  const nav = [...t.categorias.map((c) => [c.id, c.titulo]), [t.protocolos.id, 'Protocolos Especiais'], ['duvidas', 'Dúvidas']]
    .map(([id, nome]) => `<a href="#${id}">${esc(nome)}</a>`)
    .join('')

  const cats = t.categorias
    .map((c, i) => {
      const cards = c.servicos
        .map(
          (s) => `<li class="proc" data-reveal>
        <h3>${esc(s.nome)}</h3>
        <p>${esc(s.texto)}</p>
        <p class="proc__obj"><strong>Objetivo:</strong> ${esc(s.objetivo)}</p>
        <a class="link" href="${wa(data, `Olá! Gostaria de saber mais sobre ${s.nome.toLowerCase()}.`, ctaWa)}">Quero saber mais <span aria-hidden="true">→</span></a>
      </li>`
        )
        .join('')
      return `<section class="sec trat ${i % 2 ? 'trat--alt' : ''}" id="${c.id}">
    <div class="container trat__in">
      <div class="trat__lado" data-reveal>
        <p class="eyebrow">0${i + 1}</p>
        <h2>${esc(c.titulo)}</h2>
        <p>${esc(c.texto)}</p>
        <figure>${im(c.imagem, c.alt)}</figure>
      </div>
      <ul class="trat__lista">${cards}</ul>
    </div>
  </section>`
    })
    .join('')

  const protocolos = t.protocolos.itens
    .map((p, i) => `<li data-reveal><span class="dif__n">${i + 1}</span><h3>${esc(p.titulo)}</h3><p>${esc(p.texto)}</p></li>`)
    .join('')

  const faq = t.faq.itens
    .map((f) => `<details class="faq__item" data-reveal><summary>${esc(f.p)}</summary><p>${esc(f.r)}</p></details>`)
    .join('')

  const body = `<body>
${header(data, url, ctaWa, 'tratamentos')}
<main id="conteudo">
  <section class="hero hero--pag">
    <div class="container pag__in">
      <p class="selo"><span></span>${esc(t.hero.eyebrow)}</p>
      <h1>${rich(t.hero.titulo)}</h1>
      <p class="lead">${esc(t.hero.texto)}</p>
      <div class="acoes acoes--c"><a class="btn" href="${ctaWa}">${esc(t.hero.botao)}</a></div>
    </div>
    ${onda('#FFFFFF')}
  </section>

  <nav class="abas" aria-label="Seções desta página"><div class="container abas__in">${nav}</div></nav>
  <p class="container aviso">${esc(t.aviso)}</p>

  ${cats}

  <section class="sec prot" id="${t.protocolos.id}">
    <span class="difs__flor" aria-hidden="true">${flor('pf')}</span>
    <div class="container">
      <header class="cab cab--c" data-reveal><p class="eyebrow">03</p><h2>${rich(t.protocolos.titulo)}</h2><p class="sub">${esc(t.protocolos.texto)}</p></header>
      <ul class="difs__lista">${protocolos}</ul>
      <p class="nota">${esc(t.protocolos.nota)}</p>
    </div>
  </section>

  <section class="sec faq" id="duvidas">
    <div class="container faq__in">
      <h2 class="cab-c" data-reveal>${rich(t.faq.titulo)}</h2>
      <div class="faq__lista">${faq}</div>
    </div>
  </section>

  <section class="cta-faixa">
    ${onda('#FFFFFF').replace('class="onda"', 'class="onda onda--topo"')}
    <div class="container cta-faixa__in">
      <span class="cta-faixa__flor" aria-hidden="true">${flor('cf2')}</span>
      <h2>${rich(t.cta.titulo)}</h2>
      <p>${esc(t.cta.texto)}</p>
      <a class="btn btn--claro" href="${ctaWa}">${esc(t.cta.botao)}</a>
    </div>
  </section>
</main>
${footer(data, url, ctaWa)}
</body>
</html>`

  return head({ data, url, title: data.seo.tituloTratamentos, description: data.seo.descricaoTratamentos }) + body.replace('JS_SRC', url('main.js'))
}

export const assets = ['styles.css', 'main.js']
export function render(data, url) {
  return { '': pageHome(data, url), tratamentos: pageTratamentos(data, url) }
}
