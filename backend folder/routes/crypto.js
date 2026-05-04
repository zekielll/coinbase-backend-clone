const express = require('express');
const router = express.Router();
const { getAllCryptos, getTopGainers, getNewListings, createCrypto } = require('../controllers/cryptoController');
const protect = require('../middleware/authMiddleware');

router.get('/', getAllCryptos);
router.get('/gainers', getTopGainers);
router.get('/new', getNewListings);
router.post('/', protect, createCrypto);

module.exports = router;
