(function () {
  var topo = document.getElementById('topo')
  function sombra() { if (topo) topo.classList.toggle('com-sombra', window.scrollY > 8) }
  sombra(); window.addEventListener('scroll', sombra, { passive: true })
  var itens = document.querySelectorAll('[data-reveal]')
  var reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if ('IntersectionObserver' in window && !reduz) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visto'); io.unobserve(e.target) } })
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.04 })
    itens.forEach(function (el) { io.observe(el) })
  } else { itens.forEach(function (el) { el.classList.add('visto') }) }
})()
