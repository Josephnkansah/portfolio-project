const express = require('express')
const router = express.Router();
const {Register, Login} = require('./User')
const {takeOrder} =  require('./Order')

router.route('/register').post(Register)
router.route('/login').post(Login)
router.route('/order').post(takeOrder)

module.exports = router