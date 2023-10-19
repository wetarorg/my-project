'use strict';

/**
 * carservice service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::carservice.carservice');
