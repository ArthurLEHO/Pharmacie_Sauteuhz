const express =  require('express');
const maladieCtrl = require('../controllers/ctrlMaladie.js');
const router = express.Router() ;

router.get('/', maladieCtrl.affichageMaladie);

module.exports = router 