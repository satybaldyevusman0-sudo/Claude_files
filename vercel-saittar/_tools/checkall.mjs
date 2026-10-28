// node checkall.mjs url1 url2 ...  — ар бир сайттын башкы бети, API, сүрөттөр жана логин текшерүүсү
const sites = process.argv.slice(2);
const pad = (s, n) => String(s).padEnd(n);
for (const base of sites) {
  const out = { site: base.replace('https://', '') };
  try {
    const r = await fetch(base + '/'); const html = await r.text();
    const js = html.match(/src="(\/assets\/[^"]+\.js)"/)?.[1];
    out.page = r.status + (html.includes('id="root"') ? '' : ' NOROOT') + (js ? ` js:${(await fetch(base + js)).status}` : ' NOJS');
    const t0 = Date.now();
    const it = await (await fetch(base + '/api/items?limit=60')).json();
    out.items = `${it.total} (${Date.now() - t0}ms)`;
    const items = it.items || [];
    out.wiki = `${items.filter((x) => /wikimedia|wikipedia/.test(x.image)).length}/${items.length}`;
    let bad = 0;
    if (process.env.IMG) await Promise.all(items.map(async (x) => { try { const h = await fetch(x.image, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } }); if (!h.ok) bad++; } catch { bad++; } }));
    out.broken = bad;
    const h = await (await fetch(base + '/api/health')).json();
    out.db = h.storage;
    const lr = await fetch(base + '/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: 'admin@site.kg', password: 'Admin12345!' }) });
    const lj = await lr.json().catch(() => ({}));
    out.admin = lr.status === 200 && (lj.user?.role === 'admin') ? 'OK' : `FAIL ${lr.status} ${JSON.stringify(lj).slice(0, 80)}`;
    if (process.env.SHOW) out.noWiki = items.filter((x) => !/wikimedia|wikipedia/.test(x.image)).map((x) => x.id).join(',');
  } catch (e) { out.error = String(e.message || e); }
  console.log(Object.entries(out).map(([k, v]) => `${k}=${v}`).join(' | '));
}
