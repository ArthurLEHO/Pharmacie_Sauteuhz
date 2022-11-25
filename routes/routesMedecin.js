const express =  require('express');
const medecinCtrl = require('../controllers/ctrlMedecin.js');
const router = express.Router() ;

router.get('/', medecinCtrl.affichageMedecin);
router.get('/ajouter', medecinCtrl.redirectionMedecin);
router.post('/ajouterMedecin', medecinCtrl.ajouterMedecin);

module.exports = router 