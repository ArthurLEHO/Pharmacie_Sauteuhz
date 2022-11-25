const express =  require('express');
const medicamentCtrl = require('../controllers/ctrlMedicament.js');
const router = express.Router() ;

router.get('/', medicamentCtrl.affichageMedicament);

module.exports = router 