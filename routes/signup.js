const express = require('express')
const router = express.Router()

const checkNotLogin = require('../middlewares/check').checkNotLogin

// GET /signup
router.get('/', checkNotLogin, function(req, res, next) {
  res.send('注册页')
})

// POST /signup
router.post('/', checkNotLogin, function(req, res, next) {
  res.send('注册')
})

module.exports = router
