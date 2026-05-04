const Crypto = require('../models/Crypto');

exports.getAllCryptos = async (req, res) => {
  try {
    const cryptos = await Crypto.find().sort({ name: 1 });
    res.json({ success: true, data: cryptos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Unable to fetch cryptocurrencies.' });
  }
};

exports.getTopGainers = async (req, res) => {
  try {
    const gainers = await Crypto.find().sort({ change24h: -1 });
    res.json({ success: true, data: gainers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Unable to fetch top gainers.' });
  }
};

exports.getNewListings = async (req, res) => {
  try {
    const newCryptos = await Crypto.find().sort({ createdAt: -1 });
    res.json({ success: true, data: newCryptos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Unable to fetch new listings.' });
  }
};

exports.createCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;
    if (!name || !symbol || price === undefined || change24h === undefined) {
      return res.status(400).json({ success: false, message: 'Name, symbol, price, and 24h change are required.' });
    }

    const crypto = await Crypto.create({
      name,
      symbol,
      price,
      image: image || '',
      change24h,
    });

    res.status(201).json({ success: true, data: crypto });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to create cryptocurrency.' });
  }
};
