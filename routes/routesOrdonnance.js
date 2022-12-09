const express =  require('express');
const ordonnanceCtrl = require('../controllers/ctrlOrdonnance.js');
const router = express.Router() ;

router.get('/', ordonnanceCtrl.affichageOrdonnance);
router.get('/ajouter', ordonnanceCtrl.redirectionOrdonnance);
router.post('/ajouterOrdonnance', ordonnanceCtrl.ajouterOrdonnance);
router.get('/supprimerOrdonnance/:id', ordonnanceCtrl.supprimerOrdonnance);
router.get('/modifierOrdonnance/:id', ordonnanceCtrl.affichageUneOrdonnance);
router.post('/modifierOrdonnance/:id', ordonnanceCtrl.modifierOrdonnance);

module.exports = router 