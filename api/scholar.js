// Vercel serverless function to fetch Google Scholar data
// File location: /api/scholar.js

const fetch = require('node-fetch');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 'public, max-age=604800'); // 7 days
  
  const SERPAPI_KEY = process.env.SERPAPI_KEY;
  const AUTHOR_ID = '16_BMKUAAAAJ';
  
  try {
    const apiUrl = `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${AUTHOR_ID}&api_key=${SERPAPI_KEY}`;
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch scholar data' });
  }
};
