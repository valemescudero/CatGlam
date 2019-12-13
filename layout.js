const express = require('express');
const router = express.Router();

router.get('/',  (req,res) => {
  let logger = {
    "logged" :  req.session.log,
    };
    console.log (logger);
} );
module.exports = router;