const express = require("express");
const router = express.Router();
 const request = require("request");
const KEY = process.env.KEY || 3001;



router.get("/coins", function (req, res) {

    var url =`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=${KEY}`;
    request.get(
      {
        url: url,
        json: true,
        headers: { "User-Agent": "request",
     },
      },
      (err, respond, data) => {
        if (err) {
          console.log("Error:", err);
        } else if (respond.statusCode !== 200) {
          console.log("Status:", respond.statusCode);
        } else {
        //   console.log(data);
          let dalyData = Object.keys(data)[1];
          console.log(data[dalyData]);
          res.send(data[dalyData]);
        }
      }
    );
});

module.exports = router