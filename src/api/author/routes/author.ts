/**
 * author router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/author',
      handler: 'author.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/author/:id',
      handler: 'author.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/author',
      handler: 'author.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/author/:id',
      handler: 'author.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/author/:id',
      handler: 'author.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
