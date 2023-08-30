const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const coinRouter = require("./controllers/coins")

app.use(cors());

app.use("/api", coinRouter);


app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
