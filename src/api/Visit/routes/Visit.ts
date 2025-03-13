/**
 * visit router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/visit',
      handler: 'visit.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/visit/:id',
      handler: 'visit.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/visit',
      handler: 'visit.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/visit/:id',
      handler: 'visit.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/visit/:id',
      handler: 'visit.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
