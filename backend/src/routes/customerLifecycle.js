import express from 'express';

import { customers, systems, thermostatDevices } from '../data/mockDb.js';

const router = express.Router();

router.post('/register', (req, res) => {
  const payload = req.body;

  const newCustomer = {
    id: `u-${Date.now()}`,
    contractorId: payload.contractorId,
    servicePlan: payload.servicePlan || 'Essential Care',
    preferredContact: payload.preferredContact || 'sms',
    alerts: 0,
    ...payload,
    createdAt: new Date().toISOString()
  };

  customers.push(newCustomer);

  return res.status(201).json({
    message: 'Customer registered successfully',
    data: newCustomer
  });
});

router.post('/system', (req, res) => {
  const payload = req.body;

  const newSystem = {
    id: `s-${Date.now()}`,
    contractorId: payload.contractorId,
    customerId: payload.customerId,
    status: 'monitoring',
    ageYears: payload.ageYears || 0,
    energyUsage: {
      monthlyKwh: payload.monthlyKwh || 0,
      monthlyCost: payload.monthlyCost || 0
    },
    runtime: {
      todayHours: payload.todayHours || 0,
      normalHours: payload.normalHours || 0,
      efficiency: payload.efficiency || 0
    },
    temperature: {
      indoor: payload.indoorTemp || 70,
      outdoor: payload.outdoorTemp || 75,
      target: payload.targetTemp || 70,
      delta: payload.delta || 0
    },
    electrical: {
      ampDraw: payload.ampDraw || 0,
      ratedAmp: payload.ratedAmp || 0,
      ohms: payload.ohms || 0,
      targetOhms: payload.targetOhms || 0
    },
    ...payload,
    createdAt: new Date().toISOString()
  };

  systems.push(newSystem);

  return res.status(201).json({
    message: 'HVAC system created successfully',
    data: newSystem
  });
});

router.get('/:customerId/systems', (req, res) => {
  const customerSystems = systems.filter((item) => item.customerId === req.params.customerId);

  return res.json({ data: customerSystems });
});

router.post('/thermostat/pair', (req, res) => {
  const payload = req.body;

  const thermostat = {
    id: `t-${Date.now()}`,
    paired: true,
    connection: payload.connection || 'wifi',
    status: 'connected',
    brand: payload.brand || 'Nest',
    model: payload.model || 'Smart Thermostat',
    customerId: payload.customerId,
    contractorId: payload.contractorId,
    indoorTemp: payload.indoorTemp || 72,
    outdoorTemp: payload.outdoorTemp || 80,
    targetTemp: payload.targetTemp || 70,
    currentMode: payload.currentMode || 'cool',
    runtimeMinutes: payload.runtimeMinutes || 0,
    lastSeen: new Date().toISOString()
  };

  thermostatDevices.push(thermostat);

  return res.status(201).json({
    message: 'Thermostat paired successfully',
    data: thermostat
  });
});

export default router;
