export class SystemService {
  constructor(db) {
    this.db = db;
  }

  async registerHvacSystem(systemData) {
    const installDate = new Date(systemData.installDate);
    const today = new Date();
    const ageYears = Math.floor((today - installDate) / (1000 * 60 * 60 * 24 * 365));

    return {
      id: `s-${Date.now()}`,
      ...systemData,
      ageYears,
      status: 'monitoring',
      createdAt: new Date().toISOString()
    };
  }

  async getSystemDetails(systemId) {
    return {
      id: systemId,
      brand: 'Carrier',
      model: 'Performance 24ABC6',
      ageYears: 15,
      status: 'monitoring',
      lastUpdated: new Date().toISOString()
    };
  }

  async updateSystemMetrics(systemId, metrics) {
    return {
      systemId,
      ...metrics,
      updatedAt: new Date().toISOString()
    };
  }

  async getSystemMaintenanceHistory(systemId) {
    return [
      {
        id: 'm-3001',
        systemId,
        date: '2025-07-14',
        type: 'maintenance',
        technician: 'Caleb Smith',
        status: 'completed'
      }
    ];
  }
}
