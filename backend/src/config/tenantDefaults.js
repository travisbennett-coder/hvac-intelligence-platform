export const tenantDefaults = {
  appName: 'ComfortIQ',
  primaryColor: '#1c7c54',
  secondaryColor: '#0b2b26',
  welcomeMessage: 'Your comfort, your savings, your peace of mind.',
  supportEmail: 'support@comfortiq.com',
  serviceArea: 'Regional service',
  timezone: 'America/New_York',
  featureFlags: {
    thermostatIntegration: true,
    maintenanceChecklist: true,
    repairVsReplace: true,
    localCoupons: true,
    rebateMatching: true,
    technicianProfiles: true,
    dynamicAlerts: true
  }
};

export function resolveTenantBrand(contractor = {}) {
  return {
    appName: contractor.whiteLabel?.appName || contractor.name || tenantDefaults.appName,
    primaryColor: contractor.whiteLabel?.primaryColor || contractor.brandColor || tenantDefaults.primaryColor,
    secondaryColor: contractor.whiteLabel?.secondaryColor || tenantDefaults.secondaryColor,
    supportEmail: contractor.supportEmail || tenantDefaults.supportEmail,
    serviceArea: contractor.serviceArea || tenantDefaults.serviceArea,
    timezone: contractor.timezone || tenantDefaults.timezone,
    featureFlags: {
      ...tenantDefaults.featureFlags,
      ...(contractor.featureFlags || {})
    }
  };
}
