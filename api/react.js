export default async function handler(req, res) {

    try {

        const response = await fetch(
        'https://back.asitha.top/api/user/details?apiKey=dc4c789365f713a0b4f75b7164e4cfc856153605dad75bbaa3074c0d759b7d3d'
        );

        const data = await response.json();

        res.status(200).json(data);

    } catch (err) {

        res.status(500).json({
            error: 'API Error'
        });

    }

}
