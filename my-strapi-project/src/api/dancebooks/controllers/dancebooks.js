'use strict';

module.exports = {
  async index(ctx) {
    try {
      const entries = await strapi.documents('api::book.book').findMany({
        filters: {
          authors: {
            hobby: {
              $contains: 'Dance',
            },
          },
        },
      });

      ctx.body = entries;
    } catch (error) {
      ctx.throw(500, 'Failed to fetch dance books');
    }
  },
};
