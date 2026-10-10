import express from 'express';

import contractorRoutes from './routes/contractors.js';
import customerRoutes from './routes/customers.js';
import maintenanceRoutes from './routes/maintenance.js';
import analyticsRoutes from './routes/analytics.js';

const router = express.Router();

router.use('/contractors', contractorRoutes);
router.use('/customers', customerRoutes);
router.use('/maintenance', maintenanceRoutes);
router.use('/analytics', analyticsRoutes);

export default router;
