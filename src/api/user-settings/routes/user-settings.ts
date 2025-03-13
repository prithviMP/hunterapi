/**
 * user-settings router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/user-settings',
      handler: 'user-settings.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/user-settings/:id',
      handler: 'user-settings.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/user-settings',
      handler: 'user-settings.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/user-settings/:id',
      handler: 'user-settings.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/user-settings/:id',
      handler: 'user-settings.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
