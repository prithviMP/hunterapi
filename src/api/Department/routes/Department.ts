/**
 * department router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/department',
      handler: 'department.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/department/:id',
      handler: 'department.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/department',
      handler: 'department.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/department/:id',
      handler: 'department.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/department/:id',
      handler: 'department.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
