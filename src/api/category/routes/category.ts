/**
 * category router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/category',
      handler: 'category.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/category/:id',
      handler: 'category.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/category',
      handler: 'category.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/category/:id',
      handler: 'category.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/category/:id',
      handler: 'category.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
