/**
 * invoice router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/invoice',
      handler: 'invoice.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/invoice/:id',
      handler: 'invoice.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/invoice',
      handler: 'invoice.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/invoice/:id',
      handler: 'invoice.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/invoice/:id',
      handler: 'invoice.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
