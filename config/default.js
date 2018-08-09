module.exports = {
  port: 3000,
  session: {
    secret: 'node-demos',
    key: 'node-demos',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/node-demos'
}
