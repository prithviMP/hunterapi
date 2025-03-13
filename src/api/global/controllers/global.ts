/**
 * global controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::global.global', ({ strapi }) => ({
  // Single types don't have findOne and find methods but findOne and find routes
  // We need to override the default controller to handle this
  async find(ctx) {
    const entity = await strapi.entityService.findMany('api::global.global', {
      populate: ctx.query.populate,
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  async update(ctx) {
    const { data } = ctx.request.body;
    
    const entity = await strapi.entityService.update('api::global.global', 1, {
      data,
      populate: ctx.query.populate,
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
