/**
 * city router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/city',
      handler: 'city.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/city/:id',
      handler: 'city.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/city',
      handler: 'city.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/city/:id',
      handler: 'city.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/city/:id',
      handler: 'city.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
