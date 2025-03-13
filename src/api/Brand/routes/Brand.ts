/**
 * brand router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/brand',
      handler: 'brand.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/brand/:id',
      handler: 'brand.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/brand',
      handler: 'brand.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/brand/:id',
      handler: 'brand.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/brand/:id',
      handler: 'brand.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
