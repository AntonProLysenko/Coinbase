const express = require("express");
const router = express.Router();
const request = require("request");
const KEY = process.env.KEY || 3001;
const https = require("https");
const axios = require("axios")

router.get("/topgainers", async(req, res)=>{
const gainersURL = 'https://api.coinmarketcap.com/data-api/v3/cryptocurrency/spotlight?dataType=2&limit=30&rankRange=0&timeframe=24h';

  try {
    const response = await axios.get(gainersURL);
    const data = response.data;
    let topSixGainers = []

    for(let i = 0; i<6; i++){
        data.data.gainerList[i].img=`https://s2.coinmarketcap.com/static/img/coins/64x64/${data.data.gainerList[i].id}.png`
        topSixGainers.push(data.data.gainerList[i]);
    }   
    res.json(topSixGainers);
  } catch (error) {
    console.error('Error fetching Top Gainers data:', error);
    res.status(500).json({ error: 'An error occurred while fetching Top Gainers data.' });
  }

})

router.get("/topSix", async(req,res)=>{
   let topsSymbols = req.headers.top
    console.log(topsSymbols);
    const topSixURL=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${topsSymbols}&tsyms=USD&e=Coinbase`

    try {
        const response = await axios.get(topSixURL)

        console.log("response", response.data.RAW);
        
        res.json(response.data.RAW);
    } catch (error) {
        console.error('Error fetching Top Six Coins data:', error);
        res.status(500).json({ error: 'An error occurred while fetching Top Six Coins data.' });
    }
    
});
module.exports = router;
