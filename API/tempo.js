//ESTUDOS DE APIs EM  JS 

async function tempo(request, response) {
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();

    const subscribersResponse = await fetch(`https://api.convertkit.com/v3/subscribers`)
    const subscribersResponseJson = await subscribersResponse.json();
    const inscritos = subscribersResponseJson.total_subscribers;

    response.setHeader('Cache-Control', 's-maxage=10, stale-whilee-revalidate');

    response.json({
        date: dynamicDate.toGMTString()
    });
}

export default tempo;