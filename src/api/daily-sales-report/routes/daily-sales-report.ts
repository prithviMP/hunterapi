/**
 * daily-sales-report router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/daily-sales-report',
      handler: 'daily-sales-report.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/daily-sales-report/:id',
      handler: 'daily-sales-report.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/daily-sales-report',
      handler: 'daily-sales-report.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/daily-sales-report/:id',
      handler: 'daily-sales-report.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/daily-sales-report/:id',
      handler: 'daily-sales-report.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
