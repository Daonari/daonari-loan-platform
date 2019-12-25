const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const { deploy } = require('./src/service/deployService')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/test', function(req, res) {
    res.send('Helloooo Rahul')
})

app.post('/contracts', async (req, res) => {
    await deploy(req.body).then((txhash) => res.send('address is ' + txhash))
    // console.log('req is', req.body)
    
})

app.listen(3000)
console.log('Server started at http://localhost:3000')