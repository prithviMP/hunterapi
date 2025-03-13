/**
 * region router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/region',
      handler: 'region.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/region/:id',
      handler: 'region.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/region',
      handler: 'region.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/region/:id',
      handler: 'region.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/region/:id',
      handler: 'region.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
