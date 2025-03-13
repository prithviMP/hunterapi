/**
 * shortcode router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/shortcode',
      handler: 'shortcode.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/shortcode/:id',
      handler: 'shortcode.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/shortcode',
      handler: 'shortcode.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/shortcode/:id',
      handler: 'shortcode.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/shortcode/:id',
      handler: 'shortcode.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
