export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({
      status: false,
      message: 'Method not allowed'
    });
  }

  try {

    const { link, emoji } = req.body;

    const response = await fetch(
      'https://back.asitha.top/api/react',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':
            'Bearer dc4c789365f713a0b4f75b7164e4cfc856153605dad75bbaa3074c0d759b7d3d'
        },
        body: JSON.stringify({
          link,
          emoji
        })
      }
    );

    const data = await response.json();

    return res.status(response.status).json(data);

  } catch (err) {

    return res.status(500).json({
      status: false,
      message: 'Server error',
      error: err.toString()
    });

  }
}
