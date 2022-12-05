const express = require('express');
const maladieCtrl = require('../controllers/ctrlMaladie.js');
const router = express.Router();

router.get('/', maladieCtrl.affichageMaladie);
router.get('/ajouter', maladieCtrl.redirectionMaladie);
router.post('/ajouterMaladie', maladieCtrl.ajouterMaladie);
router.get('/supprimerMaladie/:id', maladieCtrl.supprimerMaladie);
router.get('/modifierMaladie/:id', maladieCtrl.affichageUneMaladie);
router.post('/modifierMaladie/:id', maladieCtrl.modifierMaladie);

module.exports = router