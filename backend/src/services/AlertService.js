export class AlertService {
  constructor(db) {
    this.db = db;
  }

  generateAlerts(system) {
    const alerts = [];

    if (system.ageYears >= 15) {
      alerts.push({
        code: 'AGING_SYSTEM',
        severity: 'high',
        message: `Your ${system.brand} system is ${system.ageYears} years old. Most HVAC systems have a 15-20 year lifespan.`,
        actionUrl: '/repair-vs-replace'
      });
    } else if (system.ageYears >= 12) {
      alerts.push({
        code: 'AGING_WARNING',
        severity: 'medium',
        message: `Your system is ${system.ageYears} years old. Consider planning for eventual replacement.`,
        actionUrl: '/schedule-inspection'
      });
    }

    if (system.runtime.todayHours > system.runtime.normalHours * 1.4) {
      alerts.push({
        code: 'EXTENDED_RUNTIME',
        severity: 'high',
        message: 'System ran 40% longer than normal today. This may indicate reduced efficiency or a refrigerant issue.',
        actionUrl: '/schedule-service'
      });
    }

    if (system.electrical.ampDraw > system.electrical.ratedAmp * 1.05) {
      alerts.push({
        code: 'AMP_OVERDRAW',
        severity: 'high',
        message: 'Electrical current draw is above rated specification. Schedule immediate inspection.',
        actionUrl: '/contact-technician'
      });
    }

    if (system.electrical.ohms > system.electrical.targetOhms * 1.1) {
      alerts.push({
        code: 'OHMS_HIGH',
        severity: 'medium',
        message: 'Electrical resistance is trending higher than normal. May indicate component wear.',
        actionUrl: '/schedule-inspection'
      });
    }

    if (system.temperature.indoor - system.temperature.target > 3) {
      alerts.push({
        code: 'TEMP_PERFORMANCE',
        severity: 'medium',
        message: 'System is struggling to reach your set temperature. This could indicate low refrigerant.',
        actionUrl: '/schedule-service'
      });
    }

    return alerts;
  }

  async getSystemAlerts(systemId, system) {
    return {
      systemId,
      alerts: this.generateAlerts(system),
      generatedAt: new Date().toISOString()
    };
  }

  async notifyCustomer(customerId, alert) {
    return {
      customerId,
      alertCode: alert.code,
      notificationSent: true,
      timestamp: new Date().toISOString()
    };
  }
}
