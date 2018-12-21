;

const Donate =()=>{
  const express = require("express");
  const app = express();
  var request = require('request')

  app.post('/my-api/create-payment/', function(req, res)
  {
    // 2. Call /v1/payments/payment to set up the payment
    request.post(process.env.PAYPAL_API + '/v1/payments/payment',
    {
      auth:
      {
        user: process.env.PP_CLIENT,
        pass: process.env.PP_SECRET
      },
      body:
      {
        intent: 'sale',
        payer:
        {
          payment_method: 'paypal'
        },
        transactions: [
        {
          amount:
          {
            total: '5.99',
            currency: 'USD'
          }
        }],
        redirect_urls:
        {
          return_url: 'https://www.mysite.com',
          cancel_url: 'https://www.mysite.com'
        }
      },
      json: true
    }, function(err, response)
    {
      if (err)
      {
        console.error(err);
        return res.sendStatus(500);
      }
      // 3. Return the payment ID to the client
      res.json(
      {
        id: response.body.id
      });
    });
  })
  .post('/my-api/execute-payment/', function(req, res)
    {
      // 2. Get the payment ID and the payer ID from the request body.
      var paymentID = req.body.paymentID;
      var payerID = req.body.payerID;
      // 3. Call /v1/payments/payment/PAY-XXX/execute to finalize the payment.
      request.post(PAYPAL_API + '/v1/payments/payment/' + paymentID +
        '/execute',
        {
          auth:
          {
            user: CLIENT,
            pass: SECRET
          },
          body:
          {
            payer_id: payerID,
            transactions: [
            {
              amount:
              {
                total: '10.99',
                currency: 'USD'
              }
            }]
          },
          json: true
        },
        function(err, response)
        {
          if (err)
          {
            console.error(err);
            return res.sendStatus(500);
          }
          // 4. Return a success response to the client
          res.json(
          {
            status: 'success'
          });
        });
    });
}

module.exports.Donate=Donate
