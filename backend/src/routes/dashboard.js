import express from 'express';

const router = express.Router();

router.get('/overview', (req, res) => {
  res.json({
    data: {
      contractor: 'Wendell Climate Solutions',
      serviceArea: 'Wendell, NC',
      activeCustomers: 1284,
      activeSystems: 2089,
      alerts: 48,
      avgSavings: '$342/mo',
      replacementCandidates: 26,
      maintenanceDue: 63,
      localOffers: 12,
      topRisks: [
        { systemId: 's-5001', label: 'Aging system', severity: 'high', score: 82 },
        { systemId: 's-5017', label: 'Runtime above normal', severity: 'medium', score: 74 },
        { systemId: 's-5024', label: 'Amp over spec', severity: 'high', score: 88 }
      ]
    }
  });
});

router.get('/health', (req, res) => {
  res.json({
    data: {
      healthyCount: 1420,
      monitoringCount: 430,
      attentionCount: 239,
      avgHealthScore: 77
    }
  });
});

export default router;
