/**
 * application router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/application',
      handler: 'application.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/application/:id',
      handler: 'application.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/application',
      handler: 'application.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/application/:id',
      handler: 'application.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/application/:id',
      handler: 'application.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
