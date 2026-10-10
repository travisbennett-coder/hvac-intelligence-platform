import express from 'express';

const router = express.Router();

const customers = [
  {
    id: 'u-2001',
    contractorId: 'c-1001',
    name: 'Darlene Walker',
    homeAddress: '128 Town Center Dr',
    systemCount: 2,
    servicePlan: 'Premier Care',
    alerts: 3,
  },
  {
    id: 'u-2002',
    contractorId: 'c-1001',
    name: 'Marcus Ellis',
    homeAddress: '49 Timberbrook Lane',
    systemCount: 1,
    servicePlan: 'Essential Care',
    alerts: 1,
  },
];

router.get('/', (req, res) => {
  res.json({ data: customers });
});

router.get('/:id', (req, res) => {
  const customer = customers.find((item) => item.id === req.params.id);

  if (!customer) {
    return res.status(404).json({ message: 'Customer not found' });
  }

  return res.json({ data: customer });
});

export default router;
