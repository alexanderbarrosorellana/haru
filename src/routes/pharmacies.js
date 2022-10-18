const router = require('express').Router()
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));


const pharmaciesUrl = 'https://farmanet.minsal.cl/index.php/ws/getLocalesTurnos'

const getPharmacies = async () => {
  
}

router.route('/').get(async (req, res) => {
  try {
    const pharmaciesResponse = await fetch(pharmaciesUrl);
    const pharmaciesJSON = await pharmaciesResponse.json();
    res.status(200).json(pharmaciesJSON)
  } catch (err) {
    console.log(`fetch pharmacies ERROR: ${err}`);
    res.status(500).json({message: 'Internal server Error'})
  }
})


module.exports = router