import express from 'express';

import { rebates } from '../data/mockDb.js';
import { buildRebateMatch } from '../services/rebateMatcher.js';
import { systems } from '../data/mockDb.js';

const router = express.Router();

router.get('/search', (req, res) => {
  const keyword = (req.query.keyword || '').toString().toLowerCase();

  const filtered = rebates.filter((rebate) => {
    if (!keyword) return true;
    return rebate.title.toLowerCase().includes(keyword) || rebate.provider.toLowerCase().includes(keyword);
  });

  return res.json({ data: filtered });
});

router.get('/matches/:systemId', (req, res) => {
  const system = systems.find((item) => item.id === req.params.systemId);

  if (!system) {
    return res.status(404).json({ message: 'System not found' });
  }

  return res.json({ data: buildRebateMatch(system) });
});

router.post('/apply', (req, res) => {
  const { customerId, rebateId } = req.body;

  const rebate = rebates.find((item) => item.id === rebateId);

  if (!rebate) {
    return res.status(404).json({ message: 'Rebate not found' });
  }

  return res.status(201).json({
    message: 'Rebate application created',
    data: {
      customerId,
      rebateId,
      status: 'submitted',
      submittedAt: new Date().toISOString()
    }
  });
});

export default router;
