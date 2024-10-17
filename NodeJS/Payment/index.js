const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();

app.listen(8080, () => {
  console.log('Server running on port 8080');
});

app.use(cors({
  origin : 'https://demo.com'
}))

app.use(bodyParser.urlencoded({
  extended : false
}))

app.use(bodyParser.json())

app.post('/payment', async (req, res) => {
  try {
    const buyer = req.body
    const instServer = 'https://test.instamojo.com/api/1.1/payment-requests/';
    const payload = {
      amount: buyer.amount,
      buyer_name: buyer.name,
      phone: buyer.phone,
      email: buyer.email,
      purpose: buyer.product
    };

    const auth = {
      headers: {
        'X-Api-Key': 'test_5cfa9272f65e2c9257a8cf10be6',
        'X-Auth-Token': 'test_60efaafe486ec2f27e4c70bcda3'
      }
    };

    const { data } = await axios.post(instServer, payload, auth);
    res.status(200).json(data);
  } catch (error) {
    // Log the error for debugging
    console.error('Error with Instamojo API:', error.response ? error.response.data : error.message);
    res.status(500).json({
      message: error.response ? error.response.data : "Internal server error",
    });
  }
});