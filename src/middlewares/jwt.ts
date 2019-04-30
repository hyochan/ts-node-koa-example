import koaJwt = require('koa-jwt');

const jwt = koaJwt({
  secret: process.env.JWT_SECRET ? process.env.JWT_SECRET : 'undefined',
});

export default jwt;