const express =  require('express');
const mutuelleCtrl = require('../controllers/ctrlMutuelle.js');
const router = express.Router() ;

router.get('/', mutuelleCtrl.affichageMutuelle);
router.get('/ajouter', mutuelleCtrl.redirectionMutuelle);
router.post('/ajouterMutuelle', mutuelleCtrl.ajouterMutuelle);
router.get('/supprimerMutuelle/:id', mutuelleCtrl.supprimerMutuelle);
router.get('/modifierMutuelle/:id', mutuelleCtrl.affichageUneMutuelle);
router.post('/modifierMutuelle/:id', mutuelleCtrl.modifierMutuelle);


module.exports = router 