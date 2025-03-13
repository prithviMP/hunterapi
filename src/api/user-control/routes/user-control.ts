/**
 * user-control router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/user-control',
      handler: 'user-control.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/user-control/:id',
      handler: 'user-control.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/user-control',
      handler: 'user-control.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/user-control/:id',
      handler: 'user-control.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/user-control/:id',
      handler: 'user-control.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
