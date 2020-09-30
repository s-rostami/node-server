const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
  endpoint: "https://dynamodb.us-east-1.amazonaws.com",
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/insert1", (req, res) => {
  const CityName = req.body.cityName;
  const cityReview = req.body.cityReview;
  var docClient = new AWS.DynamoDB.DocumentClient();

  var table = "Cities";

  var ID = 1;
  var City_Name = CityName;

  var params = {
    TableName: table,
    Item: {
      ID: ID,
      City_Name: City_Name,
      Review: cityReview,
    },
  };

  console.log("Adding a new item...");
  docClient.put(params, function (err, data) {
    if (err) {
      console.error(
        "Unable to add item. Error JSON:",
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log("Added item:", JSON.stringify(data, null, 2));
    }
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
