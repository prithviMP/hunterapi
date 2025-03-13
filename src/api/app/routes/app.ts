/**
 * app router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/app',
      handler: 'app.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/app/:id',
      handler: 'app.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/app',
      handler: 'app.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/app/:id',
      handler: 'app.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/app/:id',
      handler: 'app.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
