const router = require('express').Router()
const pharmaciesRoute = require('./pharmacies')

router.use('/pharmacies', pharmaciesRoute)

module.exports = router;