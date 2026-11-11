// Layout "institucional": médico premium, cantos retos, linhas finas, numeração romana, jornada linear.
import { esc, rich, head } from '../../lib/html.mjs'

const fita = (id = 'n') => `<svg class="fita" viewBox="0 0 100 52" aria-hidden="true" focusable="false">
  <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8B6A4E"/><stop offset="1" stop-color="#C7A98A"/></linearGradient></defs>
  <path d="M5 40C22 6 44 6 54 26 62 42 82 38 95 6" fill="none" stroke="url(#${id})" stroke-width="4.2" stroke-linecap="round"/>
  <path d="M12 44C28 18 44 18 52 33 60 46 80 44 92 20" fill="none" stroke="url(#${id})" stroke-width="1.2" stroke-linecap="round" opacity=".7"/>
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

const logo = (data, href, id, claro) => `<a class="logo${claro ? ' logo--claro' : ''}" href="${href}" aria-label="${esc(data.nome)} ${esc(data.descritor)}, página inicial">
  ${fita(id)}
  <span class="logo__txt"><span class="logo__nome">${esc(data.nome).toUpperCase()}</span><span class="logo__desc">${esc(data.descritor)}</span></span>
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
      ${link(url('tratamentos'), 'Cirurgias e Recovery', 'tratamentos')}
      <a class="btn btn--sm menu__cta" href="${ctaHref}">WhatsApp</a>
    </nav>
  </div>
</header>`
}

function footer(data, url, ctaHref) {
  return `<footer class="rodape">
  <div class="container rodape__in">
    <div>
      ${logo(data, url(''), 'lg2', true)}
      <p class="rodape__ass">${esc(data.assinatura)}</p>
    </div>
    <div class="rodape__col"><h2>Navegação</h2><a href="${url('')}">Início</a><a href="${url('tratamentos')}">Cirurgias e Recovery</a><a href="${url('')}#avaliacao">Solicitar avaliação</a></div>
    <div class="rodape__col"><h2>Contato</h2><a href="${ctaHref}">WhatsApp ${esc(data.contato.whatsappExibicao)}${data.demo && !data.contato.whatsapp ? ' (ilustrativo)' : ''}</a><p>${data.contato.endereco.map(esc).join('<br>')}</p></div>
  </div>
  <div class="container rodape__fim">
    <p>Conteúdo informativo, sem promessa de resultado e sem substituir consulta médica.</p>
    ${data.demo ? `<p>${esc(data.responsavel.registroNota)}</p>` : ''}
    <p>© ${new Date().getFullYear()} ${esc(data.nome)} ${esc(data.descritor)}. ${data.demo ? 'Site de demonstração, sem clínica real.' : ''}</p>
  </div>
</footer>
<a class="fab" href="${ctaHref}" aria-label="Falar com o concierge pelo WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"/></svg><span>Concierge</span></a>
<script src="JS_SRC" defer></script>`
}

function pageHome(data, url) {
  const h = data.home
  const ctaWa = wa(data, '', '#avaliacao')
  const im = (f, alt, extra) => imgTag(data, url, f, alt, extra)

  const nums = h.numeros.itens.map((n) => `<li><strong>${esc(n.n)}</strong><span>${esc(n.t)}</span></li>`).join('')

  const esps = h.especialidades.itens
    .map(
      (e) => `<article class="esp" data-reveal>
      <span class="esp__n">${e.n}</span>
      <h3>${esc(e.titulo)}</h3>
      <p>${esc(e.texto)}</p>
      <ul>${e.lista.map((l) => `<li>${esc(l)}</li>`).join('')}</ul>
      <a class="link" href="${url('tratamentos')}#${e.id}">${esc(h.especialidades.botao)} <span aria-hidden="true">→</span></a>
    </article>`
    )
    .join('')

  const equipe = h.equipe.itens.map((e) => `<li data-reveal><strong>${esc(e.t)}</strong><span>${esc(e.d)}</span></li>`).join('')

  const gal = h.estrutura.fotos
    .map((f) => `<figure class="gal__${f.area}" data-reveal>${im(f.src, f.alt)}<figcaption>${esc(f.legenda)}</figcaption></figure>`)
    .join('')

  const jornada = h.jornada.etapas
    .map((e, i) => `<li data-reveal><span class="jor__n">${String(i + 1).padStart(2, '0')}</span><h3>${esc(e.t)}</h3><p>${esc(e.d)}</p></li>`)
    .join('')

  const opcoes = h.formulario.procedimentos.map((p) => `<option>${esc(p)}</option>`).join('')

  const body = `<body>
${header(data, url, ctaWa, 'home')}
<main id="conteudo">

<section class="hero">
  <figure class="hero__foto">${im(h.hero.imagem, h.hero.imagemAlt, 'fetchpriority="high"')}</figure>
  <div class="container hero__wrap">
    <div class="hero__card">
      <p class="selo">${esc(h.hero.selo)}</p>
      <h1>${rich(h.hero.titulo)}</h1>
      <p class="lead">${esc(h.hero.subtitulo)}</p>
      <div class="acoes">
        <a class="btn" href="#avaliacao">${esc(h.hero.cta)}</a>
        <a class="btn btn--ghost" href="#especialidades">${esc(h.hero.ctaSecundario)}</a>
      </div>
    </div>
  </div>
</section>

<section class="numeros" aria-label="${esc(h.numeros.rotulo)}">
  <div class="container">
    <ul>${nums}</ul>
    <p>${esc(h.numeros.rotulo)}</p>
  </div>
</section>

<section class="sec ap">
  <div class="container ap__in">
    <figure class="ap__foto" data-reveal>${im(h.apresentacao.imagem, h.apresentacao.imagemAlt)}</figure>
    <div class="ap__txt" data-reveal>
      <p class="eyebrow">${esc(h.apresentacao.eyebrow)}</p>
      <h2>${rich(h.apresentacao.titulo)}</h2>
      ${h.apresentacao.texto.map((p) => `<p>${esc(p)}</p>`).join('')}
      <ul class="pilares">${h.apresentacao.pilares.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
    </div>
  </div>
</section>

<section class="sec esps" id="especialidades">
  <div class="container">
    <header class="cab" data-reveal><p class="eyebrow">${esc(h.especialidades.eyebrow)}</p><h2>${rich(h.especialidades.titulo)}</h2></header>
    <div class="esps__grade">${esps}</div>
  </div>
</section>

<section class="sec fund" id="fundador">
  <div class="container fund__in">
    <div class="fund__txt" data-reveal>
      <p class="eyebrow">${esc(h.fundador.eyebrow)}</p>
      <h2>${rich(h.fundador.titulo)}</h2>
      ${h.fundador.texto.map((p) => `<p>${esc(p)}</p>`).join('')}
      <div class="placa"><strong>${esc(data.responsavel.nome)}</strong><span>${esc(data.responsavel.cargo)}</span></div>
    </div>
    <figure class="fund__foto" data-reveal>${im(h.fundador.imagem, h.fundador.imagemAlt)}</figure>
  </div>
</section>

<section class="sec eq">
  <div class="container eq__in">
    <div data-reveal>
      <p class="eyebrow">${esc(h.equipe.eyebrow)}</p>
      <h2>${rich(h.equipe.titulo)}</h2>
      <p>${esc(h.equipe.texto)}</p>
      <figure class="eq__foto">${im(h.equipe.imagem, h.equipe.imagemAlt)}</figure>
    </div>
    <div>
      <ul class="eq__lista">${equipe}</ul>
      <p class="nota">${esc(h.equipe.nota)}</p>
    </div>
  </div>
</section>

<section class="sec estr" id="estrutura">
  <div class="container">
    <header class="cab" data-reveal><p class="eyebrow">${esc(h.estrutura.eyebrow)}</p><h2>${rich(h.estrutura.titulo)}</h2></header>
    <div class="gal">${gal}</div>
    ${data.demo ? `<p class="nota">${esc(h.estrutura.nota)}</p>` : ''}
  </div>
</section>

<section class="sec rec">
  <div class="container rec__in">
    <figure class="rec__foto" data-reveal>${im(h.recovery.imagem, h.recovery.imagemAlt)}</figure>
    <div data-reveal>
      <p class="eyebrow">${esc(h.recovery.eyebrow)}</p>
      <h2>${rich(h.recovery.titulo)}</h2>
      <p>${esc(h.recovery.texto)}</p>
      <p class="nota">${esc(h.recovery.aviso)}</p>
      <div class="acoes"><a class="btn" href="${url('tratamentos')}#recovery">${esc(h.recovery.botao)}</a></div>
    </div>
  </div>
</section>

<section class="sec jor">
  <div class="container">
    <header class="cab" data-reveal><p class="eyebrow">${esc(h.jornada.eyebrow)}</p><h2>${rich(h.jornada.titulo)}</h2></header>
    <ol class="jor__lista">${jornada}</ol>
  </div>
</section>

<section class="sec av" id="avaliacao">
  <div class="container av__in">
    <div class="av__txt" data-reveal>
      <h2>${rich(h.cta.titulo)}</h2>
      <p class="lead">${esc(h.cta.texto)}</p>
      <div class="acoes">
        <a class="btn" href="#formulario">${esc(h.cta.botao)}</a>
        <a class="btn btn--ghost" href="${ctaWa}">${esc(h.cta.botaoSec)}</a>
      </div>
      <dl class="dados">
        <div><dt>Localização</dt><dd>${data.contato.endereco.map(esc).join('<br>')}</dd></div>
        <div><dt>WhatsApp</dt><dd>${esc(data.contato.whatsappExibicao)}${data.demo && !data.contato.whatsapp ? ' <small>(ilustrativo)</small>' : ''}</dd></div>
        <div><dt>Atendimento</dt><dd>${esc(data.contato.horarios)}</dd></div>
      </dl>
    </div>
    <form class="form" id="formulario" data-reveal data-wa="${wa(data, '', '')}" novalidate>
      <h3>${esc(h.formulario.titulo)}</h3>
      <p>${esc(h.formulario.texto)}</p>
      <label>Nome<input name="nome" type="text" autocomplete="name" required></label>
      <label>Telefone / WhatsApp<input name="tel" type="tel" autocomplete="tel" required></label>
      <label>E-mail <small>(opcional)</small><input name="email" type="email" autocomplete="email"></label>
      <label>Procedimento de interesse<select name="proc">${opcoes}</select></label>
      <fieldset><legend>Preferência de contato</legend>
        <label class="op"><input type="radio" name="pref" value="WhatsApp" checked> WhatsApp</label>
        <label class="op"><input type="radio" name="pref" value="Telefone"> Telefone</label>
        <label class="op"><input type="radio" name="pref" value="E-mail"> E-mail</label>
      </fieldset>
      <button class="btn" type="submit">${esc(h.formulario.botao)}</button>
      <p class="form__status" role="status" aria-live="polite"></p>
      ${data.demo ? `<p class="form__demo">${esc(h.formulario.demo)}</p>` : ''}
    </form>
  </div>
</section>

<section class="sec loc">
  <div class="container loc__in" data-reveal>
    <div><p class="eyebrow">${esc(h.local.eyebrow)}</p><h2>${rich(h.local.titulo)}</h2></div>
    <p>${esc(h.local.texto)}</p>
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
  const ctaAv = url('') + '#avaliacao'
  const im = (f, alt, extra) => imgTag(data, url, f, alt, extra)
  const rec = t.recovery

  const nav = [...t.grupos.map((g) => [g.id, g.titulo]), ['recovery', 'Núvia Recovery'], ['duvidas', 'Perguntas']]
    .map(([id, n]) => `<a href="#${id}">${esc(n)}</a>`)
    .join('')

  const grupos = t.grupos
    .map(
      (g, i) => `<section class="sec grp ${i % 2 ? 'grp--alt' : ''}" id="${g.id}">
    <div class="container grp__in">
      <header class="grp__cab" data-reveal><span class="esp__n">${g.n}</span><h2>${esc(g.titulo)}</h2><p>${esc(g.texto)}</p></header>
      <ul class="grp__lista">
        ${g.itens
          .map(
            (p) => `<li data-reveal>
          <h3>${esc(p.nome)}</h3>
          <div><p>${esc(p.texto)}</p><p><strong>Objetivo geral:</strong> ${esc(p.objetivo)}</p><p class="peq">Indicação, planejamento e recuperação são definidos em avaliação médica individual.</p></div>
          <a class="link" href="${wa(data, `Olá! Gostaria de solicitar uma avaliação sobre ${p.nome.toLowerCase()}.`, ctaAv)}">Solicitar avaliação <span aria-hidden="true">→</span></a>
        </li>`
          )
          .join('')}
      </ul>
    </div>
  </section>`
    )
    .join('')

  const suites = rec.suites.imagens.map((f) => `<figure>${im(f.src, f.alt)}</figure>`).join('')
  const etapas = rec.jornada.etapas.map((e, i) => `<li data-reveal><span class="jor__n">${String(i + 1).padStart(2, '0')}</span><p>${esc(e)}</p></li>`).join('')
  const faq = t.faq.itens.map((f) => `<details class="faq__item" data-reveal><summary>${esc(f.p)}</summary><p>${esc(f.r)}</p></details>`).join('')

  const body = `<body>
${header(data, url, ctaWa, 'tratamentos')}
<main id="conteudo">
  <section class="pag">
    <div class="container pag__in">
      <p class="selo">${esc(t.hero.eyebrow)}</p>
      <h1>${rich(t.hero.titulo)}</h1>
      <p class="lead">${esc(t.hero.texto)}</p>
      <div class="acoes"><a class="btn" href="${ctaAv}">${esc(t.hero.botao)}</a></div>
    </div>
  </section>

  <nav class="abas" aria-label="Seções desta página"><div class="container abas__in">${nav}</div></nav>
  <p class="container aviso">${esc(t.aviso)}</p>

  ${grupos}

  <section class="sec aval">
    <div class="container aval__in">
      <figure data-reveal>${im(t.avaliacao.imagem, t.avaliacao.imagemAlt)}</figure>
      <div data-reveal>
        <p class="eyebrow">${esc(t.avaliacao.eyebrow)}</p>
        <h2>${rich(t.avaliacao.titulo)}</h2>
        ${t.avaliacao.texto.map((p) => `<p>${esc(p)}</p>`).join('')}
      </div>
    </div>
  </section>

  <section class="sec rec2" id="recovery">
    <div class="container">
      <header class="cab" data-reveal><p class="eyebrow">${esc(rec.eyebrow)}</p><h2>${rich(rec.titulo)}</h2>${rec.texto.map((p) => `<p>${esc(p)}</p>`).join('')}</header>
      <div class="suites">
        <div class="suites__fotos" data-reveal>${suites}</div>
        <div class="suites__txt" data-reveal><h3>${esc(rec.suites.titulo)}</h3><p>${esc(rec.suites.texto)}</p><p class="nota">${esc(rec.suites.aviso)}</p></div>
      </div>
      <div class="kit" data-reveal>
        <figure>${im(rec.kit.imagem, rec.kit.imagemAlt)}</figure>
        <div><h3>${esc(rec.kit.titulo)}</h3><p>${esc(rec.kit.texto)}</p><p class="nota">${esc(rec.kit.aviso)}</p></div>
      </div>
      <h3 class="jor__t" data-reveal>${esc(rec.jornada.titulo)}</h3>
      <ol class="jor__lista jor__lista--s">${etapas}</ol>
    </div>
  </section>

  <section class="sec faq" id="duvidas">
    <div class="container faq__in">
      <h2 class="cab-c" data-reveal>${rich(t.faq.titulo)}</h2>
      <div>${faq}</div>
    </div>
  </section>

  <section class="sec fim">
    <div class="container fim__in">
      <h2>${rich(t.cta.titulo)}</h2>
      <p class="lead">${esc(t.cta.texto)}</p>
      <div class="acoes acoes--c">
        <a class="btn" href="${ctaAv}">${esc(t.cta.botao)}</a>
        <a class="btn btn--ghost" href="${ctaWa}">${esc(t.cta.botaoSec)}</a>
      </div>
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
