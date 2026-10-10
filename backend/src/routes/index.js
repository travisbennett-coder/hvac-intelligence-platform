import express from 'express';
import dashboardRouter from './dashboard.js';
import systemsRouter from './systems.js';
import thermostatsRouter from './thermostats.js';
import checklistRouter from './checklist.js';
import couponRouter from './coupons.js';
import rebatesRouter from './rebates.js';
import schedulingRouter from './scheduling.js';
import onboardingRouter from './onboarding.js';
import customerLifecycleRouter from './customerLifecycle.js';
import scorecardRouter from './scorecard.js';

const router = express.Router();

router.use('/dashboard', dashboardRouter);
router.use('/systems', systemsRouter);
router.use('/thermostats', thermostatsRouter);
router.use('/maintenance/checklists', checklistRouter);
router.use('/coupons', couponRouter);
router.use('/rebates', rebatesRouter);
router.use('/scheduling', schedulingRouter);
router.use('/onboarding', onboardingRouter);
router.use('/customers', customerLifecycleRouter);
router.use('/scorecard', scorecardRouter);

export default router;
