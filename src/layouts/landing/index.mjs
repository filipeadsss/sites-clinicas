// Layout "landing": página única de conversão para WhatsApp. Cantos curvos, ondas e blocos de cor sólida.
import { esc, head, mapsLink } from '../../lib/html.mjs'

const I = {
  dente: '<path d="M7.5 3.5C5 3.5 3.5 5.5 3.5 8c0 2.2.9 3.6 1.4 5.6.5 2 .6 5.6 1.9 7 .9.9 1.7.1 2.1-1.5.3-1.3.7-2.3 1.6-2.3h3c.9 0 1.3 1 1.6 2.3.4 1.6 1.2 2.4 2.1 1.5 1.3-1.4 1.4-5 1.9-7 .5-2 1.4-3.4 1.4-5.6 0-2.5-1.5-4.5-4-4.5-1.5 0-2.7.7-4.5.7S9 3.5 7.5 3.5z"/>',
  escudo: '<path d="M12 3l7.5 2.7v5.6c0 4.4-3 7.6-7.5 9.7-4.5-2.1-7.5-5.3-7.5-9.7V5.7L12 3z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  canal: '<path d="M7.5 3.5C5 3.5 3.5 5.5 3.5 8c0 2.2.9 3.6 1.4 5.6.5 2 .6 5.6 1.9 7 .9.9 1.7.1 2.1-1.5.3-1.3.7-2.3 1.6-2.3h3c.9 0 1.3 1 1.6 2.3.4 1.6 1.2 2.4 2.1 1.5 1.3-1.4 1.4-5 1.9-7 .5-2 1.4-3.4 1.4-5.6 0-2.5-1.5-4.5-4-4.5-1.5 0-2.7.7-4.5.7S9 3.5 7.5 3.5z"/><path d="M9.5 9.5v5M14.5 9.5v5"/>',
  gengiva: '<path d="M3 9c2.2-2 4.2-2 6 0s3.800 2 6 0 4-2 6 0"/><path d="M6 12.500c0 3 .5 6 1.800 7.500M12 13v7M18 12.500c0 3-.5 6-1.800 7.500"/>',
  implante: '<path d="M6.500 3.500h11c1.500 0 2.500 1.200 2.500 2.800 0 1.700-1 3-2.500 3.200h-11C5 9.300 4 8 4 6.300c0-1.600 1-2.800 2.500-2.800z"/><path d="M9 12h6M9.500 15h5M10.500 18h3M10 9.500V12M14 9.500V12"/>',
  brilho: '<path d="M10 3.500C7.500 3.500 6 5.500 6 8c0 2.200.9 3.600 1.400 5.600.5 2 .6 5.600 1.900 7 .9.9 1.700.1 2.100-1.500.2-.9.5-1.700 1-2"/><path d="M17.500 3.500l1 2.500 2.500 1-2.500 1-1 2.500-1-2.500-2.500-1 2.500-1z"/>',
  relogio: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  pino: '<path d="M12 21s-7-6.200-7-11.500a7 7 0 0114 0C19 14.800 12 21 12 21z"/><circle cx="12" cy="9.500" r="2.500"/>',
  seta: '<path d="M5 12h14M13 6l6 6-6 6"/>',
}
const ic = (n, cls = 'ic') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${I[n]}</svg>`

const zap = `<svg class="zap" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12.04 2a9.9 9.9 0 00-8.5 14.9L2 22l5.250-1.380A9.900 9.900 0 1012.040 2zm0 1.800a8.100 8.100 0 11-4.160 15.050l-.300-.180-3.100.810.830-3.020-.200-.310A8.100 8.100 0 0112.040 3.800zM8.700 7.400c-.2 0-.5.070-.760.360-.260.290-1 1-1 2.440 0 1.440 1.050 2.830 1.200 3.020.150.200 2.050 3.280 5.060 4.470 2.500.990 3 .790 3.540.740.540-.050 1.750-.710 2-1.400.250-.690.250-1.280.170-1.400-.070-.120-.270-.200-.560-.350-.290-.150-1.750-.860-2.020-.960-.270-.100-.470-.150-.660.150-.200.290-.760.960-.930 1.160-.170.200-.340.220-.640.070-.290-.150-1.250-.460-2.370-1.470-.880-.780-1.470-1.750-1.640-2.040-.170-.300-.020-.460.130-.610.130-.130.290-.340.440-.510.150-.170.200-.290.290-.490.100-.200.050-.370-.020-.510-.070-.150-.660-1.610-.910-2.200-.240-.570-.490-.490-.660-.500h-.560z"/></svg>`

// Símbolo: dente estilizado com sorriso dourado.
const marca = (id) => `<svg class="marca" viewBox="0 0 64 56" aria-hidden="true" focusable="false"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2FA8A8"/><stop offset="1" stop-color="#0E6B6B"/></linearGradient></defs><path d="M32 13C28 4 14 2.500 9 12c-3 6 3 14 6 24 2 7 3 15 5.500 15 2.500 0 2.500-9 5-12h13c2.500 3 2.500 12 5 12 2.500 0 3.500-8 5.500-15 3-10 9-18 6-24C50 2.500 36 4 32 13z" fill="none" stroke="url(#${id})" stroke-width="4.500" stroke-linejoin="round"/><path d="M19 25c7 9 20 9 29-2" fill="none" stroke="#D9B37A" stroke-width="4.500" stroke-linecap="round"/></svg>`

const onda = (cor, cls = '') => `<svg class="onda ${cls}" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path fill="${cor}" d="M0 56C240 100 480 100 720 56S1200 12 1440 52V90H0z"/><path fill="none" stroke="#D9B37A" stroke-width="3" d="M0 56C240 100 480 100 720 56S1200 12 1440 52" vector-effect="non-scaling-stroke"/></svg>`

function wa(data, msg) {
  const n = (data.contato.whatsapp || '').replace(/\D/g, '')
  const t = encodeURIComponent(msg || data.contato.mensagemWhatsapp || '')
  return n ? `https://wa.me/${n}?text=${t}` : `https://wa.me/?text=${t}`
}
const img = (data, url, f, alt, extra = 'loading="lazy" decoding="async"') => {
  const foco = data.foco && data.foco[f]
  return `<img src="${url('img/' + f)}" alt="${esc(alt)}"${foco ? ` style="object-position:${foco}"` : ''} ${extra}>`
}

function page(data, url) {
  const h = data.home
  const c = data.contato
  const A = wa(data)
  const im = (f, alt, e) => img(data, url, f, alt, e)
  const btn = (txt, href = A, cls = '') => `<a class="btn ${cls}" href="${href}" rel="noopener">${zap}<span>${esc(txt)}</span></a>`

  const trats = h.tratamentos.itens.map((t) => `<li class="trat__item">
      <span class="trat__ic">${ic(t.icone)}</span>
      <div><h3>${esc(t.titulo)}</h3><p>${esc(t.texto)}</p>
      <a class="trat__link" href="${wa(data, `Olá! Gostaria de saber mais sobre ${t.titulo.toLowerCase()}.`)}" rel="noopener">${esc(h.tratamentos.botaoItem)} ${ic('seta', 'ic ic--s')}</a></div>
    </li>`).join('')

  const difs = h.diferenciais.itens.map((d) => `<li><h3>${esc(d.titulo)}</h3><p>${esc(d.texto)}</p></li>`).join('')
  const etapas = h.etapas.itens.map((e, i) => `<li><span class="et__n" aria-hidden="true">${i + 1}</span><h3>${esc(e.titulo)}</h3><p>${esc(e.texto)}</p></li>`).join('')
  const fotos = h.espaco.fotos.map((f) => `<figure>${im(f.src, f.alt)}<figcaption>${esc(f.legenda)}</figcaption></figure>`).join('')
  const horas = c.horarios.map(([d, t]) => `<div><dt>${esc(d)}</dt><dd>${esc(t)}</dd></div>`).join('')
  const faq = h.faq.itens.map((f) => `<details><summary>${esc(f.p)}</summary><p>${esc(f.r)}</p></details>`).join('')

  const logo = (id, cls = '') => `<a class="logo ${cls}" href="#topo" aria-label="${esc(data.nome)}, início">${marca(id)}<span class="logo__t"><strong>${esc(data.nome)}</strong><small>${esc(data.descritor)}</small></span></a>`

  const body = `<body>
${data.demo ? '<div class="demo-bar" role="note">Site de demonstração · marca, profissional e imagens fictícias ou ilustrativas</div>' : ''}
<header class="topo" id="topo">
  <div class="topo__in container">
    ${logo('lg1')}
    <nav class="menu" aria-label="Principal"><a href="#sobre">Sobre</a><a href="#tratamentos">Tratamentos</a><a href="#espaco">Espaço</a><a href="#local">Localização</a></nav>
    ${btn('Agendar', A, 'btn--sm')}
  </div>
</header>
<main id="conteudo">

<section class="hero">
  <div class="container hero__in">
    <div class="hero__txt">
      <h1>${esc(h.hero.titulo)}</h1>
      <p class="lead">${esc(h.hero.subtitulo)}</p>
      <div class="acoes">${btn(h.hero.cta)}<a class="btn btn--vazio" href="#tratamentos">${esc(h.hero.ctaSecundario)}</a></div>
      <ul class="fatos"><li>${ic('pino')}<span>${esc(h.hero.fatos[0])}</span></li><li>${ic('relogio')}<span>${esc(h.hero.fatos[1])}</span></li></ul>
    </div>
    <figure class="hero__foto">${im(h.hero.imagem, h.hero.imagemAlt, 'fetchpriority="high" decoding="async"')}</figure>
  </div>
  ${onda('#FFFFFF')}
</section>

<section class="sec sobre" id="sobre">
  <div class="container sobre__in">
    <figure class="sobre__foto" data-reveal>${im(h.sobre.imagem, h.sobre.imagemAlt)}</figure>
    <div class="sobre__txt" data-reveal>
      <h2>${esc(h.sobre.titulo)}</h2>
      ${h.sobre.texto.map((p) => `<p>${esc(p)}</p>`).join('')}
      <p class="assina">${esc(data.assinatura)}</p>
    </div>
  </div>
</section>

<section class="trat" id="tratamentos">
  ${onda('#FFFFFF', 'onda--topo')}
  <div class="container">
    <h2 data-reveal>${esc(h.tratamentos.titulo)}</h2>
    <ul class="trat__lista">${trats}</ul>
    <p class="trat__nota">${esc(h.tratamentos.nota)}</p>
    <div class="trat__cta">${btn(h.tratamentos.cta, A, 'btn--ouro')}</div>
  </div>
</section>

<section class="sec difs">
  <div class="container difs__in">
    <div data-reveal>
      <h2>${esc(h.diferenciais.titulo)}</h2>
      <ul class="difs__lista">${difs}</ul>
    </div>
    <figure class="difs__foto" data-reveal>${im(h.diferenciais.imagem, h.diferenciais.imagemAlt)}</figure>
  </div>
</section>

<section class="sec etapas">
  <div class="container">
    <h2 data-reveal>${esc(h.etapas.titulo)}</h2>
    <ol class="et__lista">${etapas}</ol>
  </div>
</section>

<section class="sec espaco" id="espaco">
  <div class="container">
    <h2 data-reveal>${esc(h.espaco.titulo)}</h2>
    <p class="sub">${esc(h.espaco.texto)}</p>
    <div class="espaco__gal">${fotos}</div>
    ${data.demo ? `<p class="nota">${esc(h.espaco.nota)}</p>` : ''}
  </div>
</section>

<section class="sec local" id="local">
  <div class="container local__in">
    <div data-reveal>
      <h2>${esc(h.local.titulo)}</h2>
      <p>${esc(h.local.texto)}</p>
      <address>${ic('pino')}<span>${c.endereco.map(esc).join('<br>')}</span></address>
      <div class="acoes">${btn(h.local.botao)}<a class="btn btn--vazio" href="${mapsLink(data)}" rel="noopener" target="_blank">${esc(h.local.mapa)}</a></div>
    </div>
    <div class="horas" data-reveal>
      <h3>${ic('relogio')} Horários de atendimento</h3>
      <dl>${horas}</dl>
    </div>
  </div>
</section>

<section class="sec faq" id="duvidas">
  <div class="container faq__in">
    <h2>${esc(h.faq.titulo)}</h2>
    <div class="faq__lista">${faq}</div>
  </div>
</section>

<section class="cta">
  <figure class="cta__foto">${im(h.cta.imagem, h.cta.imagemAlt)}</figure>
  <div class="cta__painel">
    <div class="cta__in">
      <h2>${esc(h.cta.titulo)}</h2>
      <p>${esc(h.cta.texto)}</p>
      ${btn(h.cta.botao, A, 'btn--ouro')}
    </div>
  </div>
</section>
</main>

<footer class="rodape">
  <div class="container rodape__in">
    <div>${logo('lg2', 'logo--claro')}<p class="rodape__ass">${esc(data.assinatura)}</p></div>
    <div><h2>Contato</h2><p>${c.endereco.map(esc).join('<br>')}</p><p><a href="${A}" rel="noopener">WhatsApp ${esc(c.whatsappExibicao)}${data.demo && !c.whatsapp ? ' (ilustrativo)' : ''}</a></p></div>
    <div><h2>Horários</h2><p>${c.horarios.map(([d, t]) => `${esc(d)}: ${esc(t)}`).join('<br>')}</p></div>
  </div>
  <div class="container rodape__fim">
    <p>Responsável técnica: ${esc(data.responsavel.nome)} · ${esc(data.responsavel.registro)}${data.demo ? ` · ${esc(data.responsavel.registroNota)}` : ''}</p>
    <p>© ${new Date().getFullYear()} ${esc(data.nome)} ${esc(data.descritor)}.${data.demo ? ' Site de demonstração, sem consultório real.' : ''}</p>
  </div>
</footer>
<a class="fab" href="${A}" rel="noopener" aria-label="Agendar pelo WhatsApp">${zap}<span>Agendar</span></a>
<script src="${url('main.js')}" defer></script>
</body>
</html>`

  return head({ data, url, title: data.seo.titulo, description: data.seo.descricao }) + body
}

export const assets = ['styles.css', 'main.js']
export function render(data, url) {
  return { '': page(data, url) }
}
