import express from 'express';

const router = express.Router();

const maintenanceItems = [
  {
    id: 'm-3001',
    checklistName: 'Spring Tune-Up',
    status: 'scheduled',
    systemId: 's-5001',
    refrigerantCheck: 'pass',
    ampCheck: 'pass',
    ohmCheck: 'warning',
  },
  {
    id: 'm-3002',
    checklistName: 'Fall Efficiency Review',
    status: 'completed',
    systemId: 's-5002',
    refrigerantCheck: 'pass',
    ampCheck: 'pass',
    ohmCheck: 'pass',
  },
];

router.get('/', (req, res) => {
  res.json({ data: maintenanceItems });
});

router.post('/log', (req, res) => {
  const payload = req.body;

  res.status(201).json({
    message: 'Maintenance log created successfully',
    data: {
      ...payload,
      createdAt: new Date().toISOString(),
    },
  });
});

export default router;
