const express = require('express');
const router = express.Router();


router.get("/", async (req,res,next) => {
    try {
        var data={ "sarasa": "Sebastián"};
        res.json(data);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

module.exports = router;