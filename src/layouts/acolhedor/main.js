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

  var par = document.querySelectorAll('[data-parallax]')
  if (par.length && !reduz) {
    var tick = false
    window.addEventListener('scroll', function () {
      if (tick) return
      tick = true
      requestAnimationFrame(function () {
        par.forEach(function (el) {
          var f = parseFloat(el.getAttribute('data-parallax')) || 0
          el.style.setProperty('--py', (window.scrollY * f).toFixed(1) + 'px')
        })
        tick = false
      })
    }, { passive: true })
  }
})()
