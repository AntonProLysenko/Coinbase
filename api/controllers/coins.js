const express = require("express");
const router = express.Router();
const request = require("request");
const KEY = process.env.KEY || 3001;
const https = require("https");
const axios = require("axios")

router.get("/coins", async function (req, res) {
const url = 'https://api.coinmarketcap.com/data-api/v3/cryptocurrency/spotlight?dataType=2&limit=30&rankRange=0&timeframe=24h';

  try {
    const response = await axios.get(url);
    const data = response.data;
    let topSixGainers = []

    for(let i = 0; i<6; i++){
        topSixGainers.push(data.data.gainerList[i]);
    }
    // console.log(topSixGainers);
    
    res.json(topSixGainers);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }

})
module.exports = router;
