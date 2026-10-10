import express from 'express';

const router = express.Router();

const contractors = [
  {
    id: 'c-1001',
    name: 'Wendell Climate Solutions',
    serviceArea: 'Wendell, NC',
    brandColor: '#1c7c54',
    subscriptionTier: 'pro',
  },
  {
    id: 'c-1002',
    name: 'Bright Air & Heat',
    serviceArea: 'Raleigh / Clayton',
    brandColor: '#0f4c81',
    subscriptionTier: 'elite',
  },
];

router.get('/', (req, res) => {
  res.json({
    message: 'HVAC Intelligence API',
    version: '1.0.0',
    modules: ['contractors', 'customers', 'maintenance', 'analytics'],
  });
});

router.get('/contractors', (req, res) => {
  res.json({ data: contractors });
});

router.get('/contractors/:id', (req, res) => {
  const contractor = contractors.find((item) => item.id === req.params.id);

  if (!contractor) {
    return res.status(404).json({ message: 'Contractor not found' });
  }

  return res.json({ data: contractor });
});

export default router;
