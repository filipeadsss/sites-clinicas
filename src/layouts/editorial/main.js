// Menu móvel e revelação ao rolar. Sem dependências.
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
      if (e.target.tagName === 'A') {
        menu.classList.remove('aberto')
        btn.setAttribute('aria-expanded', 'false')
      }
    })
  }
  var els = document.querySelectorAll('[data-reveal]')
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('visto') })
    return
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('visto'); io.unobserve(en.target) }
    })
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 })
  els.forEach(function (el) { io.observe(el) })
})()
