// Netlify serverless function to fetch Google Scholar data
// This keeps your API key secure on the server side

exports.handler = async function(event, context) {
  const fetch = require('node-fetch');
  
  // API key is stored securely in Netlify environment variables
  const SERPAPI_KEY = process.env.SERPAPI_KEY;
  const AUTHOR_ID = '16_BMKUAAAAJ';
  
  try {
    const apiUrl = `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${AUTHOR_ID}&api_key=${SERPAPI_KEY}`;
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=604800' // Cache for 7 days
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch scholar data' })
    };
  }
};
