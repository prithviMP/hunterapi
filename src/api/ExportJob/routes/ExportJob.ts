export default {
  routes: [
    {
      method: 'GET',
      path: '/export-jobs',
      handler: 'api::export-job.export-job.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/export-jobs/:id',
      handler: 'api::export-job.export-job.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/export-jobs',
      handler: 'api::export-job.export-job.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/export-jobs/:id',
      handler: 'api::export-job.export-job.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/export-jobs/:id',
      handler: 'api::export-job.export-job.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
