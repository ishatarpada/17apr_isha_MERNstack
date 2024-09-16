const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser")
const Razorpay = require('razorpay');

const instance = new Razorpay({
  key_id: 'rzp_test_1jKJVr2znzLDYS',
  key_secret: 'wQR3pXJGRe1Qxkg9knAAv1le'
})

app.listen(8080);
app.use(cors());
app.use(bodyParser.urlencoded({
  extended : false
}));
app.use(bodyParser.json());

app.post('/orders', async (req, res) => {
  try {
    const newOrder = await instance.orders.create({
      amount: (req.body.amount) * 100,
      receipt: 'CO_RP_' + Date.now()
    });
    res.json({
      amount: newOrder.amount,
      orderId: newOrder.id
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).json({ message: 'Failed to create order', error });
  }
});


app.get('/payments', async (req, res) => {
  try {
    const payments = await instance.payments.all();
    res.json(payments);
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).json({ message: 'Failed to create order', error });
  }
});