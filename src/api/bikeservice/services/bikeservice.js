'use strict';

/**
 * bikeservice service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bikeservice.bikeservice');
