const express = require("express");
const cors = require("cors");

const PORT = 3001;


const app = express();

app.use(cors());

app.get("/",  (req, res) =>{

    console.log(req)
  res.status(200).send({message:"Server respond"})
});


app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
