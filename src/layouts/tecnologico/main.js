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

  // Índice lateral: destaca a especialidade visível
  var links = document.querySelectorAll('.lat a[data-alvo]')
  var areas = document.querySelectorAll('[data-area]')
  if (links.length && areas.length && 'IntersectionObserver' in window) {
    var marcar = function (id) {
      links.forEach(function (a) {
        var on = a.getAttribute('data-alvo') === id
        a.classList.toggle('ativo', on)
        if (on) { var ol = a.closest('ol'); if (ol && ol.scrollWidth > ol.clientWidth) ol.scrollLeft = a.offsetLeft - 20 }
      })
    }
    marcar(areas[0].id)
    var ob = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) marcar(e.target.id) })
    }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 })
    areas.forEach(function (a) { ob.observe(a) })
  }

  // Formulário: monta a mensagem para o WhatsApp. Sem número (demonstração), não envia nada.
  var form = document.getElementById('formulario')
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault()
      var st = form.querySelector('.form__status')
      var nome = form.nome.value.trim()
      var tel = form.tel.value.trim()
      if (!nome || !tel) { st.textContent = 'Informe seu nome e um WhatsApp para contato.'; return }
      if (!form.ck.checked) { st.textContent = 'Para continuar, marque o consentimento de contato.'; return }
      var msg = 'Olá! Gostaria de obter informações sobre uma avaliação na VITRA.\nNome: ' + nome + '\nWhatsApp: ' + tel +
        (form.email.value ? '\nE-mail: ' + form.email.value : '') +
        '\nInteresse: ' + form.proc.value +
        (form.msg.value.trim() ? '\nMensagem: ' + form.msg.value.trim() : '')
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
