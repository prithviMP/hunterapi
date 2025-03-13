/**
 * call-log router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/call-log',
      handler: 'call-log.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/call-log/:id',
      handler: 'call-log.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/call-log',
      handler: 'call-log.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/call-log/:id',
      handler: 'call-log.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/call-log/:id',
      handler: 'call-log.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
