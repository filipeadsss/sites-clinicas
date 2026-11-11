import http from 'node:http'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.txt': 'text/plain' }
http.createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0])
  if (p.endsWith('/')) p += 'index.html'
  let f = path.join('dist', p)
  try { if (!path.extname(f)) f += '/index.html'; const b = await readFile(f); res.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' }); res.end(b) }
  catch { res.writeHead(404); res.end('404') }
}).listen(8771, () => console.log('http://localhost:8771'))
