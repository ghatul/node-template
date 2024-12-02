const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   res.status(200).send({message:"Hey, i am ready to start working"});
  });

module.exports = router;
