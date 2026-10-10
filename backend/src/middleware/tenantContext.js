export function getTenantContext(req, res, next) {
  const contractorId = req.headers['x-contractor-id'] || req.headers['x-contractor-id'] || req.headers['x-tenant-id'] || 'c-1001';

  req.tenant = {
    contractorId,
    brand: 'ComfortIQ',
    timezone: 'America/New_York',
    features: {
      thermostatIntegration: true,
      maintenanceChecklist: true,
      recommendationEngine: true,
      rebateMarketplace: true,
      partnerCoupons: true,
      alerting: true
    }
  };

  next();
}
