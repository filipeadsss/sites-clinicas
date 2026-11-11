(function () {
  var btn = document.querySelector('.menu-btn')
  var menu = document.getElementById('menu')
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('aberto')
      btn.setAttribute('aria-expanded', open ? 'true' : 'false')
      btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu')
    })
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { menu.classList.remove('aberto'); btn.setAttribute('aria-expanded', 'false') }
    })
  }

  var topo = document.getElementById('topo')
  function sombra() { if (topo) topo.classList.toggle('com-sombra', window.scrollY > 8) }
  sombra(); window.addEventListener('scroll', sombra, { passive: true })

  var reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  var itens = document.querySelectorAll('[data-reveal]')
  if ('IntersectionObserver' in window && !reduz) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visto'); io.unobserve(e.target) } })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 })
    itens.forEach(function (el) { io.observe(el) })
  } else {
    itens.forEach(function (el) { el.classList.add('visto') })
  }

  // Formulário: monta a mensagem para o WhatsApp. Sem número (demonstração), não envia nada.
  var form = document.getElementById('formulario')
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault()
      var st = form.querySelector('.form__status')
      var nome = form.nome.value.trim()
      var tel = form.tel.value.trim()
      if (!nome || !tel) { st.textContent = 'Informe seu nome e um telefone para contato.'; return }
      var pref = form.querySelector('input[name=pref]:checked').value
      var msg = 'Olá! Gostaria de solicitar uma avaliação.\nNome: ' + nome + '\nTelefone: ' + tel +
        (form.email.value ? '\nE-mail: ' + form.email.value : '') +
        '\nInteresse: ' + form.proc.value + '\nPreferência de contato: ' + pref
      var base = form.getAttribute('data-wa')
      if (base) {
        window.open(base.split('?')[0] + '?text=' + encodeURIComponent(msg), '_blank', 'noopener')
        st.textContent = 'Abrimos o WhatsApp com sua solicitação.'
      } else {
        st.textContent = 'Demonstração: em um site real, a solicitação seguiria para a equipe.'
      }
    })
  }
})()
