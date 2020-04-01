const __ = require('lodash');
const AWS = require('aws-sdk');
const Axios = require('axios');

const config = require('./config/config');
const defaults = require('./config/default.config');
const pkg = require('./package.json');

const LambdaFunction = require('./src/lambaFunction');

const baseConfig = __.merge(Object.assign({}, defaults), config);
/* eslint-disable no-unused-vars */
const AWSConfig = new AWS.Config({
  accessKeyId: baseConfig.credentials.accessKeyId,
  secretAccessKey: baseConfig.credentials.secretAccessKey,
  region: pkg.config.region
});
/* eslint-enable no-unused-vars */

exports.function = function(options) {
  const lambdaFunction = new LambdaFunction(options, AWS, Axios);
  lambdaFunction.startup();
};
