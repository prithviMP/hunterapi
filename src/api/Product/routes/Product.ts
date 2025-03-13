/**
 * product router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/product',
      handler: 'product.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/product/:id',
      handler: 'product.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/product',
      handler: 'product.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/product/:id',
      handler: 'product.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/product/:id',
      handler: 'product.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
