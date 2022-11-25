const express =  require('express');
const patientCtrl = require('../controllers/ctrlPatient.js');
const router = express.Router() ;

router.get('/', patientCtrl.affichagePatient);

module.exports = router 