const express = require('express')
const router = express.Router()
const imageController = require('../controllers/imageController')

router.get('/test-api', function (req, res) {
    res.send("working...")
})

router.get('/pictures', imageController.getPicture)

module.exports = router;