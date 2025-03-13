/**
 * contact router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/contact',
      handler: 'contact.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/contact/:id',
      handler: 'contact.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/contact',
      handler: 'contact.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/contact/:id',
      handler: 'contact.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/contact/:id',
      handler: 'contact.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
