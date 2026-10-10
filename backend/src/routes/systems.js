import express from 'express';

import { systems, maintenanceLogs, customers } from '../data/mockDb.js';
import { evaluateSystemHealth, evaluateReplacementRecommendation } from '../services/alertEngine.js';

const router = express.Router();

router.get('/', (req, res) => {
  const payload = systems.map((system) => ({
    ...system,
    health: evaluateSystemHealth(system),
    recommendation: evaluateReplacementRecommendation(system, 950)
  }));

  res.json({ data: payload });
});

router.get('/:id', (req, res) => {
  const system = systems.find((item) => item.id === req.params.id);

  if (!system) {
    return res.status(404).json({ message: 'System not found' });
  }

  const systemSummary = {
    ...system,
    health: evaluateSystemHealth(system),
    recommendation: evaluateReplacementRecommendation(system, 950),
    maintenanceHistory: maintenanceLogs.filter((entry) => entry.systemId === system.id),
    customer: customers.find((customer) => customer.id === system.customerId)
  };

  return res.json({ data: systemSummary });
});

router.get('/:id/alerts', (req, res) => {
  const system = systems.find((item) => item.id === req.params.id);

  if (!system) {
    return res.status(404).json({ message: 'System not found' });
  }

  return res.json({ data: evaluateSystemHealth(system) });
});

router.get('/:id/recommendation', (req, res) => {
  const system = systems.find((item) => item.id === req.params.id);

  if (!system) {
    return res.status(404).json({ message: 'System not found' });
  }

  return res.json({
    data: evaluateReplacementRecommendation(system, 1200)
  });
});

router.post('/', (req, res) => {
  const payload = req.body;

  const newSystem = {
    id: `s-${Date.now()}`,
    ...payload,
    status: 'monitoring',
    createdAt: new Date().toISOString()
  };

  systems.push(newSystem);

  return res.status(201).json({
    message: 'HVAC system registered successfully',
    data: newSystem
  });
});

export default router;
