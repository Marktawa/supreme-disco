'use strict';

module.exports = {
  async index(ctx) {
    try {
      const entries = await strapi.db.query('api::book.book').findMany({
        where: {
          authors: {
            hobby: {
              $contains: 'Dance',
            },
          },
        },
      });

      ctx.body = entries;  // Send the query results
    } catch (err) {
      ctx.throw(500, 'Failed to fetch dance books');
    }
  },
};
