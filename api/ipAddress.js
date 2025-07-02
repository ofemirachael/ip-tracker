export default async function handler(req, res) {
  const ip = req.query.ip;
  const apiKey = process.env.IPIFY_API_KEY;

  if (!ip) {
    return res.status(400).json({ error: 'Missing "ip" query parameter' });
  }

  try {
    const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip}`);
    const data = await response.json();
    res.status(response.ok ? 200 : response.status).json(data);
  } catch (error) {
    console.error('Error fetching IP data:', error);
    res.status(500).json({ error: 'Failed to fetch IP data' });
  }
}