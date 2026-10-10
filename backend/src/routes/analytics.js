import express from 'express';

const router = express.Router();

const analytics = {
  summary: {
    averageSystemAge: 12.4,
    annualEnergyCost: 1840,
    replacementRecommendationRate: 26,
  },
  systems: [
    {
      systemId: 's-5001',
      ageYears: 15,
      estimatedMonthlyUsage: 182,
      repairCost: 980,
      replacementCost: 6400,
      recommendation: 'replace',
    },
    {
      systemId: 's-5002',
      ageYears: 9,
      estimatedMonthlyUsage: 129,
      repairCost: 540,
      replacementCost: 5200,
      recommendation: 'repair',
    },
  ],
};

router.get('/summary', (req, res) => {
  res.json({ data: analytics.summary });
});

router.get('/systems', (req, res) => {
  res.json({ data: analytics.systems });
});

export default router;
