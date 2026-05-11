export default async function handler(req, res) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    try {

        const response = await fetch(
            'https://back.asitha.top/api/user/details?apiKey=dc4c789365f713a0b4f75b7164e4cfc856153605dad75bbaa3074c0d759b7d3d'
        );

        const text = await response.text();

        return res.status(200).json({
            status: response.status,
            response: text
        });

    } catch (err) {

        return res.status(500).json({
            error: err.message
        });

    }

}
