const express = require("express");
const router = express.Router();
const axios = require("axios")

router.get("/topgainers", async(req, res)=>{
const gainersURL = 'https://api.coinmarketcap.com/data-api/v3/cryptocurrency/spotlight?dataType=2&limit=30&rankRange=0&timeframe=24h';

  try {
    const response = await axios.get(gainersURL);
    const data = response.data;
    let topSixGainers = []

    for(let i = 0; i<6; i++){
        console.log(typeof(data.data.gainerList));
        data.data.gainerList[i].img=`https://s2.coinmarketcap.com/static/img/coins/64x64/${data.data.gainerList[i].id}.png`
        topSixGainers.push(data.data.gainerList[i]);
    }   
    res.status(200).json(topSixGainers);
  } catch (error) {
    console.error('Error fetching Top Gainers data:', error);
    res.status(500).json({ error: 'An error occurred while fetching Top Gainers data.' });
  }

})

router.get("/topSix", async(req,res)=>{
   let topsSymbols = req.headers.top
   const topSixURL=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${topsSymbols}&tsyms=USD&e=Coinbase`

    try {
        const response = await axios.get(topSixURL)
        const data = response.data   
        res.status(200).json(data.RAW);
    } catch (error) {
        console.error('Error fetching Top Six Coins data:', error);
        res.status(500).json({ error: 'An error occurred while fetching Top Six Coins data.' });
    }
    
});

router.get("/new", async(req,res)=>{
    const coinbaseReqUrl =
      "https://www.coinbase.com/graphql/query?&operationName=PricesV2Query&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%222126bbec4bfcee83a78d192f149e295065cfdd482292280adb0d98036b054d61%22%7D%7D&variables=%7B%22currency%22%3A%22USD%22%2C%22supportedLocale%22%3A%22en%22%2C%22killMarketHealth%22%3Afalse%2C%22assetQuery%22%3A%22%22%2C%22country%22%3A%22US%22%2C%22countryCode%22%3A%22US%22%2C%22filter%22%3A%22ALL%22%2C%22limit%22%3A30%2C%22order%22%3A%22ASC%22%2C%22resolution%22%3A%22WEEK%22%2C%22sort%22%3A%22RANK%22%2C%22page%22%3A1%2C%22skipCharts%22%3Afalse%2C%22selectedHourPrices%22%3Afalse%2C%22selectedDayPrices%22%3Afalse%2C%22selectedWeekPrices%22%3Afalse%2C%22selectedMonthPrices%22%3Afalse%2C%22selectedYearPrices%22%3Atrue%7D";

      try {
        const response = await axios.get(coinbaseReqUrl)
        const data = response.data.data
        res.status(200).json(data);
        
      } catch (error) {
        console.error('Error fetching Coinbase data:', error);
        res.status(500).json({ error: 'An error occurred while fetching Coinbase data.' });
      }
})
module.exports = router;
