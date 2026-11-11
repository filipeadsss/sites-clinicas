// Utilitários de HTML compartilhados pelos layouts.

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** Escapa o texto e transforma *trecho* em itálico de destaque. */
export const rich = (s = '') => esc(s).replace(/\*(.+?)\*/g, '<em>$1</em>')

/** Monta caminhos a partir da base do site (ex.: /aurelia/ ou /). */
export const makeUrl = (base) => (p = '') => base + p.replace(/^\//, '')

/** Link do WhatsApp. Sem número (demonstração), aponta para a seção de contato. */
export function whatsappHref(data, fallback = '#contato') {
  const n = (data.contato.whatsapp || '').replace(/\D/g, '')
  if (!n) return fallback
  return `https://wa.me/${n}?text=${encodeURIComponent(data.contato.mensagemWhatsapp || '')}`
}

export function mapsEmbed(data) {
  return `https://www.google.com/maps?q=${encodeURIComponent(data.contato.mapaConsulta)}&output=embed`
}
export function mapsLink(data) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.contato.mapaConsulta)}`
}

/** CSS com as variáveis do tema do cliente. */
export function themeVars(t) {
  if (t.cores) {
    const v = Object.entries(t.cores).map(([k, c]) => `--${k}:${c}`).join(';')
    return `:root{${v};--f-titulo:'${t.fonteTitulo}',Georgia,'Times New Roman',serif;--f-texto:'${t.fonteTexto}',system-ui,-apple-system,'Segoe UI',sans-serif}`
  }
  return `:root{--marrom:${t.marrom};--dourado:${t.dourado};--dourado-texto:${t.douradoTexto};--bege:${t.bege};--offwhite:${t.offwhite};--branco:${t.branco};--f-titulo:'${t.fonteTitulo}',Georgia,'Times New Roman',serif;--f-texto:'${t.fonteTexto}',system-ui,-apple-system,'Segoe UI',sans-serif}`
}

export function head({ data, url, title, description, path }) {
  const t = data.tema
  return `<!doctype html>
<html lang="${data.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="theme-color" content="${t.branco}">
${data.noindex ? '<meta name="robots" content="noindex, nofollow">' : ''}
<link rel="icon" href="${url('favicon.svg')}" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${t.googleFonts}">
<style>${themeVars(t)}</style>
<link rel="stylesheet" href="${url('styles.css')}">
<script>document.documentElement.className+=' js'</script>
</head>`
}
