/**
 * scheduled-call router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/scheduled-call',
      handler: 'scheduled-call.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/scheduled-call/:id',
      handler: 'scheduled-call.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/scheduled-call',
      handler: 'scheduled-call.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/scheduled-call/:id',
      handler: 'scheduled-call.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/scheduled-call/:id',
      handler: 'scheduled-call.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
