'use strict';

// tests for createUser
// Generated by serverless-mocha-plugin

const mochaPlugin = require('serverless-mocha');
const expect = mochaPlugin.chai.expect;
let wrapped = mochaPlugin.getWrapper('createUser', '../../../services/user-service/src/functions/createUser.js', 'createUser');
const AWS = require('aws-sdk-mock');
const AWS_SDK = require('aws-sdk');
AWS.setSDKInstance(AWS_SDK);
describe('createUser', () => {
  before((done) => {
    done();
  });

  it('implement tests here', async () => {
    process.env.DYNAMODB_USER_TABLE = 'user-service-userTable-dev';
    const response = await wrapped.run({
      body:JSON.stringify({
      username: 'test',
      password: '123'
    })});
    expect(response).to.not.be.empty;
  });
});
