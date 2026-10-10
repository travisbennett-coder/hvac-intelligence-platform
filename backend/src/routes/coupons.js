import express from 'express';

import { coupons } from '../data/mockDb.js';

const router = express.Router();

router.get('/nearby', (req, res) => {
  const city = (req.query.city || 'Wendell').toString();

  const results = coupons.filter((coupon) => coupon.location.city.toLowerCase() === city.toLowerCase());

  return res.json({ data: results });
});

router.get('/:id', (req, res) => {
  const coupon = coupons.find((item) => item.id === req.params.id);

  if (!coupon) {
    return res.status(404).json({ message: 'Coupon not found' });
  }

  return res.json({ data: coupon });
});

router.post('/redeem', (req, res) => {
  const { couponId, customerId } = req.body;
  const coupon = coupons.find((item) => item.id === couponId);

  if (!coupon) {
    return res.status(404).json({ message: 'Coupon not found' });
  }

  return res.json({
    message: 'Coupon redeemed successfully',
    data: {
      couponId,
      customerId,
      redeemedAt: new Date().toISOString(),
      status: 'active'
    }
  });
});

export default router;
