export class ThermostatService {
  constructor(db) {
    this.db = db;
  }

  async pairThermostat(customerId, thermostatData) {
    return {
      id: `t-${Date.now()}`,
      customerId,
      paired: true,
      connection: 'wifi',
      status: 'connected',
      ...thermostatData,
      pairedAt: new Date().toISOString()
    };
  }

  async getThermostatData(thermostatId) {
    return {
      id: thermostatId,
      brand: 'Nest',
      status: 'connected',
      indoorTemp: 72,
      outdoorTemp: 82,
      targetTemp: 70,
      currentMode: 'cool',
      runtimeMinutes: 384,
      efficiency: 87,
      lastSeen: new Date().toISOString()
    };
  }

  async getHistoricalData(thermostatId, days = 7) {
    return {
      thermostatId,
      period: `Last ${days} days`,
      averageIndoorTemp: 71.2,
      averageOutdoorTemp: 78.5,
      totalRuntimeHours: 42.3,
      averageDailyRuntime: (42.3 / days).toFixed(1),
      data: []
    };
  }

  async updateThermostatReading(thermostatId, reading) {
    return {
      thermostatId,
      ...reading,
      recordedAt: new Date().toISOString()
    };
  }
}
