const express =  require('express');
const ordonnanceCtrl = require('../controllers/ctrlOrdonnance.js');
const router = express.Router() ;

router.get('/', ordonnanceCtrl.affichageOrdonnance);

module.exports = router 