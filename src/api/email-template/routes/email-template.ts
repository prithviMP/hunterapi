/**
 * email-template router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/email-template',
      handler: 'email-template.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/email-template/:id',
      handler: 'email-template.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/email-template',
      handler: 'email-template.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/email-template/:id',
      handler: 'email-template.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/email-template/:id',
      handler: 'email-template.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
