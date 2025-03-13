/**
 * product-variant router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/product-variant',
      handler: 'product-variant.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/product-variant/:id',
      handler: 'product-variant.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/product-variant',
      handler: 'product-variant.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/product-variant/:id',
      handler: 'product-variant.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/product-variant/:id',
      handler: 'product-variant.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
