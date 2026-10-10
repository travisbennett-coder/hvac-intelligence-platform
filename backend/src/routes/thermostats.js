import express from 'express';

import { thermostatDevices } from '../data/mockDb.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ data: thermostatDevices });
});

router.get('/:id', (req, res) => {
  const thermostat = thermostatDevices.find((item) => item.id === req.params.id);

  if (!thermostat) {
    return res.status(404).json({ message: 'Thermostat not found' });
  }

  return res.json({ data: thermostat });
});

router.get('/:id/data', (req, res) => {
  const thermostat = thermostatDevices.find((item) => item.id === req.params.id);

  if (!thermostat) {
    return res.status(404).json({ message: 'Thermostat not found' });
  }

  return res.json({
    data: {
      ...thermostat,
      currentRuntimeMinutes: thermostat.runtimeMinutes,
      comfortMode: thermostat.currentMode,
      lastUpdated: new Date().toISOString()
    }
  });
});

router.post('/pair', (req, res) => {
  const payload = req.body;

  const newThermostat = {
    id: `t-${Date.now()}`,
    paired: true,
    connection: 'wifi',
    status: 'connected',
    lastSeen: new Date().toISOString(),
    ...payload
  };

  thermostatDevices.push(newThermostat);

  return res.status(201).json({
    message: 'Thermostat successfully paired',
    data: newThermostat
  });
});

export default router;
