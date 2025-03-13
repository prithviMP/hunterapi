/**
 * pdf-template router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/pdf-template',
      handler: 'pdf-template.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/pdf-template/:id',
      handler: 'pdf-template.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/pdf-template',
      handler: 'pdf-template.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/pdf-template/:id',
      handler: 'pdf-template.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/pdf-template/:id',
      handler: 'pdf-template.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
