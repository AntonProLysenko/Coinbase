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

    // Do something with the data, like sending it in the response
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }

    
    // let allData = [];
    // let getTonOfData=()=>{
    //      try {
    //        const allCoins = req.headers.coins.split(",");
    //        // const allCoins = ["BTC",]
    //        // console.log(allCoins);

    //        allCoins.forEach((symbol) => {
    //          let url = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${symbol}&market=USD&apikey=${KEY}`;
    //          request.get(
    //            {
    //              url: url,
    //              json: true,
    //              headers: { "User-Agent": "request" },
    //            },

    //            (err, respond, data) => {
    //              if (err) {
    //                console.log("MY Error:", err);
    //              } else if (respond.statusCode !== 200) {
    //                console.log("Status:", respond.statusCode);
    //              } else {
    //                let dalyData = Object.keys(data)[1];
    //                // res.send(data[dalyData]);
    //                allData.push(data[dalyData]);

    //                console.log(data);
                   

                   
    //             }
    //             // console.log(allData);
    //            }
    //          );
    //        });
    //     //    res.status(200).send(allData);
    //      } catch (error) {
    //        res.status(400).send(error);
    //      }
    // }
    // getTonOfData()

    // console.log(allData);
    

})
module.exports = router;
