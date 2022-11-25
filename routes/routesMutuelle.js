const express =  require('express');
const mutuelleCtrl = require('../controllers/ctrlMutuelle.js');
const router = express.Router() ;

router.get('/', mutuelleCtrl.affichageMutuelle);

module.exports = router 