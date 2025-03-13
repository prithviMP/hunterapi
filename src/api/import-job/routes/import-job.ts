/**
 * import-job router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/import-job',
      handler: 'import-job.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/import-job/:id',
      handler: 'import-job.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/import-job',
      handler: 'import-job.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/import-job/:id',
      handler: 'import-job.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/import-job/:id',
      handler: 'import-job.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
