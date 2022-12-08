const express =  require('express');
const patientCtrl = require('../controllers/ctrlPatient.js');
const router = express.Router() ;

router.get('/', patientCtrl.affichagePatient);
router.get('/ajouter', patientCtrl.redirectionPatient);
router.post('/ajouterPatient', patientCtrl.ajouterPatient);
router.get('/supprimerPatient/:id', patientCtrl.supprimerPatient);
router.get('/modifierPatient/:id', patientCtrl.affichageUnPatient);
router.post('/modifierPatient/:id', patientCtrl.modifierPatient);

module.exports = router 