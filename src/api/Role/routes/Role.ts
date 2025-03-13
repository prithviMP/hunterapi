/**
 * role router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/role',
      handler: 'role.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/role/:id',
      handler: 'role.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/role',
      handler: 'role.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/role/:id',
      handler: 'role.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/role/:id',
      handler: 'role.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
