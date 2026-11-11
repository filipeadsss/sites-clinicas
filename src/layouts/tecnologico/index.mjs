// Layout "tecnologico": azul profundo, hero dividido, grade assimétrica (bento), índice lateral fixo e jornada vertical.
import { esc, rich, head } from '../../lib/html.mjs'

const simbolo = (id) => `<svg class="vsym" viewBox="0 0 64 56" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id="${id}a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F4F6F8"/><stop offset="1" stop-color="#607F96"/></linearGradient>
    <linearGradient id="${id}b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#DCC9A4"/><stop offset="1" stop-color="#B99A68"/></linearGradient>
  </defs>
  <polygon points="2,4 20,4 36,42 32,52" fill="url(#${id}a)"/>
  <polygon points="62,4 46,4 30,44 32,52" fill="url(#${id}b)"/>
</svg>`

function wa(data, msg, fallback) {
  const n = (data.contato.whatsapp || '').replace(/\D/g, '')
  if (!n) return fallback
  return `https://wa.me/${n}?text=${encodeURIComponent(msg || data.contato.mensagemWhatsapp || '')}`
}

const imgTag = (data, url, f, alt = '', extra = '') => {
  const foco = data.foco && data.foco[f]
  return `<img src="${url('img/' + f)}" alt="${esc(alt)}"${foco ? ` style="object-position:${foco}"` : ''} ${extra || 'loading="lazy" decoding="async"'}>`
}

const logo = (data, href, id) => `<a class="logo" href="${href}" aria-label="${esc(data.nome)} ${esc(data.marcaSub)}, página inicial">
  ${simbolo(id)}
  <span class="logo__txt"><span class="logo__nome">${esc(data.nome).toUpperCase()}</span><span class="logo__desc">${esc(data.marcaSub)}</span></span>
</a>`

function header(data, url, ctaHref, ativo) {
  const link = (href, txt, key) => `<a href="${href}"${ativo === key ? ' aria-current="page"' : ''}>${txt}</a>`
  return `${data.demo ? '<div class="demo-bar" role="note">Site de demonstração · marca, profissional e imagens fictícias ou ilustrativas</div>' : ''}
<header class="topo" id="topo">
  <div class="topo__in container">
    ${logo(data, url(''), 'lg1')}
    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu" aria-label="Abrir menu"><span></span><span></span></button>
    <nav class="menu" id="menu" aria-label="Principal">
      ${link(url(''), 'Início', 'home')}
      ${link(url('tratamentos'), 'Especialidades e Tratamentos', 'tratamentos')}
      <a class="btn btn--sm menu__cta" href="${ctaHref}">Agendar avaliação</a>
    </nav>
  </div>
</header>`
}

function footer(data, url, ctaHref) {
  return `<footer class="rodape">
  <div class="container rodape__in">
    <div>
      ${logo(data, url(''), 'lg2')}
      <p class="rodape__ass">${esc(data.assinatura)}</p>
    </div>
    <div class="rodape__col"><h2>Navegação</h2><a href="${url('')}">Início</a><a href="${url('tratamentos')}">Especialidades e Tratamentos</a><a href="${url('')}#avaliacao">Solicitar avaliação</a></div>
    <div class="rodape__col"><h2>Contato</h2><a href="${ctaHref}">WhatsApp ${esc(data.contato.whatsappExibicao)}${data.demo && !data.contato.whatsapp ? ' (ilustrativo)' : ''}</a><p>${data.contato.endereco.map(esc).join('<br>')}</p><p>${esc(data.contato.horarios)}</p></div>
  </div>
  <div class="container rodape__fim">
    <p>Conteúdo informativo, sem promessa de resultado e sem substituir consulta odontológica. Responsável técnico e registro profissional (CRO) a informar antes do uso real.</p>
    ${data.demo ? `<p>${esc(data.responsavel.registroNota)}</p>` : ''}
    <p>© ${new Date().getFullYear()} ${esc(data.nome)} ${esc(data.descritor)}. ${data.demo ? 'Site de demonstração, sem clínica real. Política de privacidade a publicar antes do uso real.' : ''}</p>
  </div>
</footer>
<a class="fab" href="${ctaHref}" aria-label="Falar pelo WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"/></svg><span>WhatsApp</span></a>
<script src="JS_SRC" defer></script>`
}

function pageHome(data, url) {
  const h = data.home
  const ctaWa = wa(data, '', '#avaliacao')
  const im = (f, alt, extra) => imgTag(data, url, f, alt, extra)
  const ids = ['cirurgia', 'implantodontia', 'ortodontia', 'diagnostico']

  const indice = h.hero.indice
    .map((t, i) => `<li><a href="${url('tratamentos')}#${ids[i]}"><span>${String(i + 1).padStart(2, '0')}</span>${esc(t)}</a></li>`)
    .join('')

  const lista = h.principal.itens.map((t, i) => `<li><span>${String(i + 1).padStart(2, '0')}</span>${esc(t)}</li>`).join('')

  const cards = h.especialidades.itens
    .map((e, i) => {
      const cls = ['bento__c bento__c--a', 'bento__c bento__c--b', 'bento__c bento__c--c', 'bento__c bento__c--d'][i]
      return `<a class="${cls}" href="${url('tratamentos')}#${e.id}" data-reveal>
      ${e.imagem ? `<span class="bento__img">${im(e.imagem, e.imagemAlt)}</span>` : ''}
      <span class="bento__n">${String(i + 1).padStart(2, '0')}</span>
      <h3>${esc(e.titulo)}</h3>
      <p>${esc(e.texto)}</p>
      <span class="bento__l">${esc(h.especialidades.link)} <span aria-hidden="true">→</span></span>
    </a>`
    })
    .join('')

  const difs = h.diferenciais.itens.map((d, i) => `<li data-reveal><span class="dif__n">${String(i + 1).padStart(2, '0')}</span><h3>${esc(d.t)}</h3><p>${esc(d.d)}</p></li>`).join('')
  const recursos = h.tecnologia.recursos.map((r) => `<li><strong>${esc(r.t)}</strong><span>${esc(r.d)}</span></li>`).join('')
  const jornada = h.jornada.etapas.map((e, i) => `<li data-reveal><span class="jor__n">${String(i + 1).padStart(2, '0')}</span><div><h3>${esc(e.t)}</h3><p>${esc(e.d)}</p></div></li>`).join('')
  const gal = h.estrutura.fotos.map((f) => `<figure class="gal__${f.area}" data-reveal>${im(f.src, f.alt)}<figcaption>${esc(f.legenda)}</figcaption></figure>`).join('')
  const opcoes = h.formulario.especialidades.map((p) => `<option>${esc(p)}</option>`).join('')

  const body = `<body>
${header(data, url, ctaWa, 'home')}
<main id="conteudo">

<section class="hero">
  <figure class="hero__foto">${im(h.hero.imagem, h.hero.imagemAlt, 'fetchpriority="high"')}<figcaption>${esc(data.responsavel.nome)} · ${esc(data.descritor)}</figcaption></figure>
  <div class="container hero__wrap">
    <div class="hero__txt">
      <p class="selo">${esc(h.hero.selo)}</p>
      <h1>${rich(h.hero.titulo)}</h1>
      <p class="lead">${esc(h.hero.subtitulo)}</p>
      <div class="acoes">
        <a class="btn" href="#avaliacao">${esc(h.hero.cta)}</a>
        <a class="btn btn--ghost" href="#vitra">${esc(h.hero.ctaSecundario)}</a>
      </div>
    </div>
  </div>
</section>

<nav class="indice" aria-label="Especialidades"><div class="container"><ol>${indice}</ol></div></nav>

<section class="sec ap" id="vitra">
  <div class="container ap__in">
    <div class="ap__txt" data-reveal>
      <p class="eyebrow">${esc(h.apresentacao.eyebrow)}</p>
      <h2>${rich(h.apresentacao.titulo)}</h2>
      <p>${esc(h.apresentacao.texto)}</p>
    </div>
    <figure class="ap__foto" data-reveal>${im(h.apresentacao.imagem, h.apresentacao.imagemAlt)}</figure>
  </div>
</section>

<section class="princ">
  <div class="princ__foto" aria-hidden="false">${im(h.principal.imagem, h.principal.imagemAlt)}</div>
  <div class="container princ__in">
    <div class="princ__txt" data-reveal>
      <p class="eyebrow">${esc(h.principal.eyebrow)}</p>
      <h2>${rich(h.principal.titulo)}</h2>
      <p class="lead">${esc(h.principal.texto)}</p>
      <ol class="princ__lista">${lista}</ol>
      <p class="nota">${esc(h.principal.aviso)}</p>
      <a class="btn" href="${url('tratamentos')}#cirurgia">${esc(h.principal.botao)}</a>
    </div>
  </div>
</section>

<section class="sec esp" id="especialidades">
  <div class="container">
    <header class="cab" data-reveal><p class="eyebrow">${esc(h.especialidades.eyebrow)}</p><h2>${rich(h.especialidades.titulo)}</h2></header>
    <div class="bento">${cards}</div>
  </div>
</section>

<section class="sec dif">
  <div class="container">
    <header class="cab" data-reveal><p class="eyebrow">${esc(h.diferenciais.eyebrow)}</p><h2>${rich(h.diferenciais.titulo)}</h2></header>
    <ul class="dif__lista">${difs}</ul>
  </div>
</section>

<section class="tec">
  <div class="container tec__in">
    <figure class="tec__foto" data-reveal>${im(h.tecnologia.imagem, h.tecnologia.imagemAlt)}</figure>
    <div class="tec__txt" data-reveal>
      <p class="eyebrow">${esc(h.tecnologia.eyebrow)}</p>
      <h2>${rich(h.tecnologia.titulo)}</h2>
      <p class="lead">${esc(h.tecnologia.texto)}</p>
      <ul class="tec__lista">${recursos}</ul>
      <p class="nota">${esc(h.tecnologia.nota)}</p>
    </div>
  </div>
</section>

<section class="sec fund">
  <div class="container fund__in">
    <div class="fund__id" data-reveal>
      <span class="fund__mono" aria-hidden="true">RA</span>
      <p class="fund__nome">${esc(data.responsavel.nome)}</p>
      <p class="fund__cargo">${esc(data.responsavel.cargo)}</p>
    </div>
    <div class="fund__txt" data-reveal>
      <p class="eyebrow">${esc(h.fundador.eyebrow)}</p>
      <h2>${rich(h.fundador.titulo)}</h2>
      ${h.fundador.texto.map((p) => `<p>${esc(p)}</p>`).join('')}
      <p class="nota nota--l">${esc(h.fundador.nota)}</p>
      <a class="link" href="${url('tratamentos')}">${esc(h.fundador.botao)} <span aria-hidden="true">→</span></a>
    </div>
  </div>
</section>

<section class="sec jor">
  <div class="container jor__in">
    <header class="jor__cab" data-reveal><p class="eyebrow">${esc(h.jornada.eyebrow)}</p><h2>${rich(h.jornada.titulo)}</h2></header>
    <ol class="jor__lista">${jornada}</ol>
  </div>
</section>

<section class="sec est">
  <div class="container">
    <header class="cab" data-reveal><p class="eyebrow">${esc(h.estrutura.eyebrow)}</p><h2>${rich(h.estrutura.titulo)}</h2></header>
    <div class="gal">${gal}</div>
    <p class="nota nota--l">${esc(h.estrutura.nota)}</p>
  </div>
</section>

<section class="fim" id="avaliacao">
  <div class="container fim__in">
    <div class="fim__txt" data-reveal>
      <h2>${rich(h.cta.titulo)}</h2>
      <p class="lead">${esc(h.cta.texto)}</p>
      <div class="acoes"><a class="btn" href="${ctaWa}">${esc(h.cta.botao)}</a></div>
      <p class="fim__end">${data.contato.endereco.map(esc).join(' · ')}</p>
    </div>
    <form class="form" id="formulario" data-reveal novalidate${data.contato.whatsapp ? ` data-wa="${wa(data, '', '')}"` : ''}>
      <h3>${esc(h.formulario.titulo)}</h3>
      <p class="form__lead">${esc(h.formulario.texto)}</p>
      <label>Nome<input name="nome" type="text" autocomplete="name" required></label>
      <label>WhatsApp<input name="tel" type="tel" autocomplete="tel" inputmode="tel" required></label>
      <label>E-mail <small>(opcional)</small><input name="email" type="email" autocomplete="email"></label>
      <label>Especialidade de interesse<select name="proc">${opcoes}</select></label>
      <label>Mensagem <small>(opcional, sem dados de saúde)</small><textarea name="msg" rows="3"></textarea></label>
      <label class="form__ck"><input type="checkbox" name="ck" required><span>${esc(h.formulario.consentimento)}</span></label>
      <button class="btn" type="submit">${esc(h.formulario.botao)}</button>
      <p class="form__status" role="status" aria-live="polite"></p>
      ${data.demo ? '<p class="form__demo">Demonstração: nenhum dado é enviado ou armazenado.</p>' : ''}
    </form>
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
  const ctaWa = wa(data, '', url('') + '#avaliacao')
  const im = (f, alt, extra) => imgTag(data, url, f, alt, extra)

  const lateral = t.areas.map((a) => `<li><a href="#${a.id}" data-alvo="${a.id}"><span>${a.n}</span>${esc(a.titulo)}</a></li>`).join('')

  const areas = t.areas
    .map(
      (a) => `<section class="area" id="${a.id}" data-area>
      <header class="area__cab" data-reveal>
        <div>
          <span class="area__n">${a.n}</span>
          <h2>${esc(a.titulo)}</h2>
          <p>${esc(a.texto)}</p>
        </div>
        ${a.imagem ? `<figure>${im(a.imagem, a.imagemAlt)}</figure>` : ''}
      </header>
      <div class="procs">
        ${a.itens
          .map(
            (p, i) => `<details class="proc"${i === 0 ? ' open' : ''}>
          <summary><h3>${esc(p.nome)}</h3><span class="proc__mais" aria-hidden="true"></span></summary>
          <dl>
            <div><dt>O que é</dt><dd>${esc(p.descricao)}</dd></div>
            <div><dt>Finalidade</dt><dd>${esc(p.finalidade)}</dd></div>
            <div><dt>Possíveis indicações gerais</dt><dd>${esc(p.indicacoes)}</dd></div>
            <div><dt>Por que avaliar antes</dt><dd>A indicação, o planejamento e os riscos são definidos em avaliação especializada individual.</dd></div>
          </dl>
          <a class="link" href="${wa(data, `Olá! Gostaria de obter informações sobre uma avaliação em ${p.nome.toLowerCase()} na VITRA.`, ctaWa)}">Agendar avaliação <span aria-hidden="true">→</span></a>
        </details>`
          )
          .join('')}
      </div>
    </section>`
    )
    .join('')

  const passos = t.integracao.passos.map((p, i) => `<li><span>${String(i + 1).padStart(2, '0')}</span>${esc(p)}</li>`).join('')
  const faq = t.faq.itens.map((f) => `<details class="faq__item"><summary>${esc(f.p)}</summary><p>${esc(f.r)}</p></details>`).join('')

  const body = `<body>
${header(data, url, ctaWa, 'tratamentos')}
<main id="conteudo">
  <section class="pag">
    <figure class="pag__foto" aria-hidden="true">${im(t.hero.imagem, '')}</figure>
    <div class="container pag__in">
      <p class="selo">${esc(t.hero.eyebrow)}</p>
      <h1>${rich(t.hero.titulo)}</h1>
      <p class="lead">${esc(t.hero.texto)}</p>
    </div>
  </section>

  <div class="container intro" data-reveal>
    <h2>${esc(t.intro.titulo)}</h2>
    <p>${esc(t.intro.texto)}</p>
  </div>

  <div class="container trat">
    <aside class="lat" aria-label="Especialidades desta página">
      <p class="lat__t">Nesta página</p>
      <ol>${lateral}</ol>
    </aside>
    <div class="trat__corpo">
      <p class="aviso">${esc(t.aviso)}</p>
      ${areas}
    </div>
  </div>

  <section class="sec integ">
    <div class="container integ__in">
      <div data-reveal><h2>${esc(t.integracao.titulo)}</h2><p>${esc(t.integracao.texto)}</p></div>
      <ol class="integ__passos" data-reveal>${passos}</ol>
    </div>
  </section>

  <section class="sec faq">
    <div class="container faq__in">
      <h2 class="cab-c" data-reveal>${rich(t.faq.titulo)}</h2>
      <div>${faq}</div>
    </div>
  </section>

  <section class="fim fim--c">
    <div class="container fim__in fim__in--c">
      <h2>${rich(t.cta.titulo)}</h2>
      <div class="acoes acoes--c"><a class="btn" href="${ctaWa}">${esc(t.cta.botao)}</a></div>
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
