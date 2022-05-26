var express = require('express');
var router = express.Router();
const statController = require('./statController');
const showController = require('./showController');

router.post('/show', showController.show);

// router.post('/stat', statController.hp);
router.post('/stat', statController.typing);
// router.post('/stat', statController.luck);
// router.post('/stat', statController.patience);
// router.post('/stat', statController.coding);

// router.post('/auto_gold', goldController.desk);
// router.post('/auto_gold', goldController.chair);
// router.post('/auto_exp', expController.cook);
// router.post('/auto_exp', expController.homekeeper);

module.exports = router;
