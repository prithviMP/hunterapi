/**
 * notification router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/notification',
      handler: 'notification.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/notification/:id',
      handler: 'notification.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/notification',
      handler: 'notification.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/notification/:id',
      handler: 'notification.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/notification/:id',
      handler: 'notification.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
