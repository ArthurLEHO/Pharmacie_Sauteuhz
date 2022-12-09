const express =  require('express');
const medicamentCtrl = require('../controllers/ctrlMedicament.js');
const router = express.Router() ;

router.get('/', medicamentCtrl.affichageMedicament);
router.get('/ajouter', medicamentCtrl.redirectionMedicament);
router.post('/ajouterMedicament', medicamentCtrl.ajouterMedicament);
router.get('/supprimerMedicament/:id', medicamentCtrl.supprimerMedicament);
router.get('/modifierMedicament/:id', medicamentCtrl.affichageUnMedicament);
router.post('/modifierMedicament/:id', medicamentCtrl.modifierMedicament);

module.exports = router 