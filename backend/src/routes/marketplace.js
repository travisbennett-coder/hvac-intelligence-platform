import express from 'express';

import { MarketplaceService } from '../services/MarketplaceService.js';

const router = express.Router();
const marketplaceService = new MarketplaceService();

router.get('/featured', async (req, res) => {
  const location = req.query.location || 'Wendell';
  const offers = await marketplaceService.getFeaturedOffers(location);
  return res.json({ data: offers });
});

router.post('/offers', async (req, res) => {
  const offer = await marketplaceService.createOffer(req.body);
  return res.status(201).json({ data: offer });
});

router.post('/redeem', async (req, res) => {
  const { customerId, offerId } = req.body;
  const result = await marketplaceService.redeemOffer(customerId, offerId);
  return res.json({ data: result });
});

export default router;
