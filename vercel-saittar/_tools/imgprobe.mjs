const base = process.argv[2];
const it = await (await fetch(base + '/api/items?limit=60')).json();
for (const x of it.items.slice(0, 6)) {
  for (const m of ['HEAD', 'GET']) {
    try { const r = await fetch(x.image, { method: m, headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120 Safari/537.36' }, redirect: 'follow' }); console.log(m, r.status, r.headers.get('content-type'), x.image.slice(0, 90)); if (m === 'GET') await r.arrayBuffer(); } catch (e) { console.log(m, 'ERR', e.message, x.image.slice(0, 80)); }
  }
}
// Wikipedia API түз текшерүү
const q = new URLSearchParams({ action: 'query', titles: 'Personal trainer', prop: 'pageimages', piprop: 'thumbnail', pithumbsize: '900', format: 'json', formatversion: '2', origin: '*', redirects: '1' });
const w = await fetch('https://en.wikipedia.org/w/api.php?' + q, { headers: { 'User-Agent': 'KG-exam-sites/1.0 (https://vercel.com; educational demo)' } });
console.log('WIKI API', w.status, (await w.text()).slice(0, 300));
