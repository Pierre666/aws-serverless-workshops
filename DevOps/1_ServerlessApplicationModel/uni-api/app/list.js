'use strict';

const AWS = require('aws-sdk');

exports.lambda_handler = (event, context, callback) => {
  console.log('Received event:', JSON.stringify(event, null, 2));

  var message = "Go Serverless Chile!";

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      Output: message
    })
  });
};
