const express =  require('express');
const ordonnanceCtrl = require('../controllers/ctrlOrdonnance.js');
const router = express.Router() ;

router.get('/affichage', ordonnanceCtrl.affichageOrdonnance);

module.exports = router 