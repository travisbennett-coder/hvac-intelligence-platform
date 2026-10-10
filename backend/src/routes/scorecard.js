import express from 'express';

import { systems } from '../data/mockDb.js';

const router = express.Router();

router.get('/scorecard/:systemId', (req, res) => {
  const system = systems.find((item) => item.id === req.params.systemId);

  if (!system) {
    return res.status(404).json({ message: 'System not found' });
  }

  const score = Math.max(0, 100 - system.ageYears * 3 - (system.runtime.todayHours > system.runtime.normalHours ? 12 : 0) - (system.electrical.ampDraw > system.electrical.ratedAmp ? 18 : 0));

  return res.json({
    data: {
      systemId: system.id,
      score: score,
      grade: score >= 85 ? 'A' : score >= 70 ? 'B' : score >= 55 ? 'C' : 'D',
      summary: score >= 70
        ? 'System is performing within expected service range.'
        : 'System is showing efficiency or condition issues that need attention.'
    }
  });
});

export default router;
