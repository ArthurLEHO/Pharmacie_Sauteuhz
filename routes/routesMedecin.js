const express =  require('express');
const medecinCtrl = require('../controllers/ctrlMedecin.js');
const router = express.Router() ;

router.get('/', medecinCtrl.affichageMedecin);
router.get('/ajouter', medecinCtrl.redirectionMedecin);
router.post('/ajouterMedecin', medecinCtrl.ajouterMedecin);
router.get('/supprimerMedecin/:id', medecinCtrl.supprimerMedecin);
router.get('/modifierMedecin/:id', medecinCtrl.affichageUnMedecin);
router.post('/modifierMedecin/:id', medecinCtrl.modifierMedecin);

module.exports = router 