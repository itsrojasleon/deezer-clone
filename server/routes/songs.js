const express = require('express');
const axios = require('axios').default;

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { data } = await axios.get('https://api.deezer.com/user/2529');
    res.json({ data });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
