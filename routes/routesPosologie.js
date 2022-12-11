const express =  require('express');
const posologieCtrl = require('../controllers/ctrlPosologie.js');
const router = express.Router() ;

router.get('/:id', posologieCtrl.affichagePosologie);
router.get('/modifierPosologie/:id', posologieCtrl.affichageUnePosologie);
router.post('/modifierPosologie/:id', posologieCtrl.modifierPosologie);

module.exports = router 