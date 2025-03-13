/**
 * hsncode router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/hsncode',
      handler: 'hsncode.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/hsncode/:id',
      handler: 'hsncode.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/hsncode',
      handler: 'hsncode.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/hsncode/:id',
      handler: 'hsncode.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/hsncode/:id',
      handler: 'hsncode.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
