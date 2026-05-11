export default async function handler(req, res) {

    // IZINKAN CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if(req.method === 'OPTIONS'){
        return res.status(200).end();
    }

    if(req.method !== 'POST'){
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }

    try{

        const { link, emoji } = req.body;

        const response = await fetch(
            'https://back.asitha.top/api/user/details?apiKey=dc4c789365f713a0b4f75b7164e4cfc856153605dad75bbaa3074c0d759b7d3d'
        );

        const data = await response.json();

        return res.status(200).json(data);

    }catch(err){

        return res.status(500).json({
            error:'Server error',
            detail:err.message
        });

    }

}
