/**
 * company router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/company',
      handler: 'company.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/company/:id',
      handler: 'company.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/company',
      handler: 'company.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/company/:id',
      handler: 'company.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/company/:id',
      handler: 'company.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
