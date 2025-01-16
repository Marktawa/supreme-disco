'use strict';

module.exports = {
  async index(ctx) {
    try {
      const books = await strapi.db.query('api::book.book').findMany({
        where: {
          authors: {
            hobby: {
              $contains: 'Dance',
            },
          },
        },
      });

      ctx.body = books;  // Send the query results
    } catch (err) {
      ctx.throw(500, 'Failed to fetch dance books');
    }
  },
};
