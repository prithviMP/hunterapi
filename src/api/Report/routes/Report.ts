/**
 * report router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/report',
      handler: 'report.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/report/:id',
      handler: 'report.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/report',
      handler: 'report.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/report/:id',
      handler: 'report.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/report/:id',
      handler: 'report.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
