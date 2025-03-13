/**
 * payment router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/payment',
      handler: 'payment.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/payment/:id',
      handler: 'payment.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/payment',
      handler: 'payment.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/payment/:id',
      handler: 'payment.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/payment/:id',
      handler: 'payment.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
