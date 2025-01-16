'use strict';

 module.exports = {
   async index(ctx, next) {
    const entries = await strapi.entityService.findMany('api::book.book', {
      filters: {
        authors: {
          hobby: {
            $contains: 'Dance'
          },
        }
      },
    });
    ctx.body = entries;
  }
};
