import express from 'express';

const router = express.Router();

const maintenanceChecklist = [
  {
    id: 'check-1',
    section: 'Electrical',
    item: 'Measure compressor amp draw',
    acceptedRange: 'within manufacturer rating',
    type: 'amp'
  },
  {
    id: 'check-2',
    section: 'Electrical',
    item: 'Check resistance (ohms)',
    acceptedRange: 'within target range',
    type: 'ohm'
  },
  {
    id: 'check-3',
    section: 'Refrigerant',
    item: 'Verify refrigerant charge',
    acceptedRange: 'within manufacturer specification',
    type: 'refrigerant'
  },
  {
    id: 'check-4',
    section: 'Airflow',
    item: 'Verify airflow and temperature split',
    acceptedRange: 'normal delta across return and supply',
    type: 'airflow'
  },
  {
    id: 'check-5',
    section: 'Safety',
    item: 'Check capacitor and contactor condition',
    acceptedRange: 'safe and stable',
    type: 'safety'
  }
];

router.get('/template', (req, res) => {
  return res.json({ data: maintenanceChecklist });
});

router.post('/evaluate', (req, res) => {
  const measurements = req.body;

  let passCount = 0;

  const evaluation = maintenanceChecklist.map((item) => {
    let status = 'pass';

    if (item.type === 'amp' && measurements.ampDraw > measurements.ratedAmp) {
      status = 'warning';
    }

    if (item.type === 'ohm' && measurements.ohms > measurements.targetOhms) {
      status = 'warning';
    }

    if (item.type === 'refrigerant' && measurements.refrigerantCharge !== 'within-spec') {
      status = 'warning';
    }

    if (status === 'pass') passCount += 1;

    return {
      ...item,
      status
    };
  });

  return res.json({
    data: {
      total: evaluation.length,
      passed: passCount,
      failed: evaluation.length - passCount,
      evaluation,
      overall: passCount >= evaluation.length * 0.8 ? 'healthy' : 'needs-attention'
    }
  });
});

export default router;
