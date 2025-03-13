/**
 * export-job router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/export-job',
      handler: 'export-job.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/export-job/:id',
      handler: 'export-job.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/export-job',
      handler: 'export-job.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/export-job/:id',
      handler: 'export-job.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/export-job/:id',
      handler: 'export-job.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
