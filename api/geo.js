// Geo endpoint for dual-market pricing on the static site.
// Vercel injects x-vercel-ip-country on every request; static HTML can't read
// request headers, so pricing.html fetches this when no ?market= / localStorage.
module.exports = (req, res) => {
  const country = String(req.headers['x-vercel-ip-country'] || '').toUpperCase();
  const market = country === 'AU' ? 'au' : 'us';
  // Per-visitor response — must never be cached by the CDN.
  res.setHeader('Cache-Control', 'private, no-store');
  res.status(200).json({ market: market, country: country });
};
