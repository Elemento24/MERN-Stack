const express = require('express');
const router = express.Router();

// @router    GET ap/profile
// @desc      Test Route
// @access    Public
router.get('/', (req, res) => {
  res.send('Profile Route');
});

module.exports = router;