const express =  require('express');
const mainCtrl = require('../controllers/ctrlMain.js');
const router = express.Router() ;

router.get('/', mainCtrl.affichageAccueil);

module.exports = router 