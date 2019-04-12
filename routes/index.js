/*---------- Requirements  ----------*/
const express = require('express');
const router = express.Router();



/*---------- Routing  ----------*/
router.get('/', (req, res, next) => {
    res.send('<h1>home page</h1>');
});



/*---------- Export  ----------*/
module.exports = router;