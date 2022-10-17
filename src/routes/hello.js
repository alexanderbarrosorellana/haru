const router = require('express').Router()

router.route('/').get((req, res) => {
  msg = `Hello ${req.query.name || 'World'} from get request`
  res.json({msg})
})

router.route('/:lang').get((req, res) => {
  msg = `Hello ${req.query.name || 'World'} from get request`
  res.json({msg})
})

module.exports = router