'use strict';

/**
 * internship service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::internship.internship');
