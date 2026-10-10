export class HealthScoreService {
  constructor() {
    this.rules = {
      ageWeight: 0.35,
      runtimeWeight: 0.25,
      ampWeight: 0.2,
      tempWeight: 0.1,
      maintenanceWeight: 0.1
    };
  }

  calculate(system) {
    const ageScore = Math.max(0, 100 - system.ageYears * 5);
    const runtimeScore = Math.max(0, 100 - ((system.runtime.todayHours - system.runtime.normalHours) / Math.max(system.runtime.normalHours, 1)) * 100);
    const ampScore = Math.max(0, 100 - ((system.electrical.ampDraw - system.electrical.ratedAmp) / Math.max(system.electrical.ratedAmp, 1)) * 180);
    const tempScore = Math.max(0, 100 - (system.temperature.indoor - system.temperature.target) * 20);
    const maintenanceScore = system.maintenance?.lastService ? 90 : 60;

    const weightedScore =
      ageScore * this.rules.ageWeight +
      runtimeScore * this.rules.runtimeWeight +
      ampScore * this.rules.ampWeight +
      tempScore * this.rules.tempWeight +
      maintenanceScore * this.rules.maintenanceWeight;

    const score = Math.max(0, Math.min(100, Math.round(weightedScore)));

    return {
      score,
      grade: score >= 85 ? 'A' : score >= 70 ? 'B' : score >= 55 ? 'C' : 'D',
      summary: score >= 80 ? 'Healthy and efficient' : score >= 60 ? 'Needs monitoring' : 'Needs service attention',
      generatedAt: new Date().toISOString()
    };
  }
}
