const express = require('express')
const router = express.Router()
const contractController = require('../controller/contractController')

router.post('/contracts', (req, res) => {
    console.log('req is', req)
    res.send('rahul')
})