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

  // Paralaxe leve nas imagens sobrepostas (desligada com "reduzir movimento")
  var reduz = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  var itens = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'))
  if (!reduz && itens.length) {
    var ticking = false
    var atualizar = function () {
      var vh = window.innerHeight
      itens.forEach(function (el) {
        var r = el.getBoundingClientRect()
        if (r.bottom < -200 || r.top > vh + 200) return
        var f = parseFloat(el.getAttribute('data-parallax')) || 0
        var d = (r.top + r.height / 2) - vh / 2
        el.style.transform = 'translate3d(0,' + (d * f).toFixed(1) + 'px,0)'
      })
      ticking = false
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(atualizar) }
    }, { passive: true })
    window.addEventListener('resize', atualizar)
    atualizar()
  }
})()
