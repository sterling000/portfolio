'use strict';

const googleapi = require('../google-util');

module.exports.loginGoogle = async (event, context) => {
    return googleapi.urlGoogle();
};
