/**
 * area router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/area',
      handler: 'area.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/area/:id',
      handler: 'area.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/area',
      handler: 'area.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/area/:id',
      handler: 'area.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/area/:id',
      handler: 'area.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
