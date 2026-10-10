import express from 'express';

import { appointments } from '../data/mockDb.js';

const router = express.Router();

router.get('/availability', (req, res) => {
  const { date } = req.query;

  const filtered = appointments.filter((item) => item.date === date);

  return res.json({
    data: {
      date: date || '2026-10-15',
      openSlots: [
        '9:00 AM',
        '11:30 AM',
        '1:00 PM',
        '3:45 PM'
      ],
      bookedSlots: filtered.map((item) => item.time)
    }
  });
});

router.get('/appointments/:customerId', (req, res) => {
  const bookingList = appointments.filter((item) => item.customerId === req.params.customerId);

  return res.json({ data: bookingList });
});

router.post('/book', (req, res) => {
  const payload = req.body;

  const newBooking = {
    id: `ap-${Date.now()}`,
    status: 'pending',
    ...payload
  };

  appointments.push(newBooking);

  return res.status(201).json({
    message: 'Service appointment booked',
    data: newBooking
  });
});

export default router;
