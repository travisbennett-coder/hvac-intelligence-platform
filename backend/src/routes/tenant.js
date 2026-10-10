import express from 'express';

import { resolveTenantBrand } from '../config/tenantDefaults.js';

const router = express.Router();

router.get('/brand/:contractorId', (req, res) => {
  const contractor = {
    name: 'Wendell Climate Solutions',
    whiteLabel: {
      appName: 'Wendell Comfort',
      primaryColor: '#1c7c54',
      secondaryColor: '#0b2b26'
    },
    brandColor: '#1c7c54',
    serviceArea: 'Wendell, NC',
    timezone: 'America/New_York',
    featureFlags: {
      rebateMatching: true
    }
  };

  return res.json({ data: resolveTenantBrand(contractor) });
});

export default router;
