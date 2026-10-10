import express from 'express';

import { contractors } from '../data/mockDb.js';

const router = express.Router();

router.post('/onboard', (req, res) => {
  const payload = req.body;

  const newContractor = {
    id: `c-${Date.now()}`,
    subscriptionTier: payload.subscriptionTier || 'pro',
    serviceArea: payload.serviceArea || 'Local Market',
    timezone: payload.timezone || 'America/New_York',
    whiteLabel: {
      appName: payload.appName || 'ComfortIQ',
      primaryColor: payload.primaryColor || '#1c7c54',
      secondaryColor: payload.secondaryColor || '#0b2b26'
    },
    ...payload,
    createdAt: new Date().toISOString()
  };

  contractors.push(newContractor);

  return res.status(201).json({
    message: 'Contractor onboarded successfully',
    data: newContractor
  });
});

router.get('/config/:id', (req, res) => {
  const contractor = contractors.find((item) => item.id === req.params.id);

  if (!contractor) {
    return res.status(404).json({ message: 'Contractor not found' });
  }

  return res.json({
    data: {
      appName: contractor.whiteLabel?.appName || contractor.name,
      primaryColor: contractor.whiteLabel?.primaryColor || contractor.brandColor,
      secondaryColor: contractor.whiteLabel?.secondaryColor || '#0b2b26',
      serviceArea: contractor.serviceArea,
      subscriptionTier: contractor.subscriptionTier
    }
  });
});

export default router;
