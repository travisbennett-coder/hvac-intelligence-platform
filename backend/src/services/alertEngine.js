import { systems } from '../data/mockDb.js';

export function evaluateSystemHealth(system) {
  const alerts = [];

  if (system.ageYears >= 15) {
    alerts.push({
      code: 'AGING_SYSTEM',
      severity: 'high',
      message: 'Unit is over 15 years old and may be nearing the end of its expected service life.'
    });
  }

  if (system.runtime.todayHours > system.runtime.normalHours * 1.35) {
    alerts.push({
      code: 'LONG_RUNTIME',
      severity: 'medium',
      message: 'System is running longer than normal. May indicate reduced efficiency or a problem with airflow or refrigerant.'
    });
  }

  if (system.electrical.ampDraw > system.electrical.ratedAmp) {
    alerts.push({
      code: 'AMP_OVERDRAW',
      severity: 'high',
      message: 'Electrical draw exceeds manufacturer-rated amps and should be checked immediately.'
    });
  }

  if (system.electrical.ohms > system.electrical.targetOhms) {
    alerts.push({
      code: 'OHMS_OUT_OF_SPEC',
      severity: 'medium',
      message: 'Resistance is outside the expected range and may indicate wear or failing components.'
    });
  }

  if (system.temperature.indoor - system.temperature.target > 2) {
    alerts.push({
      code: 'TEMP_GAP',
      severity: 'medium',
      message: 'Indoor temperature is drifting above the setpoint and may be struggling to maintain comfort.'
    });
  }

  return {
    systemId: system.id,
    healthScore: Math.max(0, 100 - alerts.length * 17),
    alerts,
    status: alerts.length === 0 ? 'healthy' : alerts.some((alert) => alert.severity === 'high') ? 'attention-needed' : 'monitoring'
  };
}

export function evaluateReplacementRecommendation(system, repairCost = 0) {
  const ageFactor = system.ageYears >= 15 ? 1 : system.ageYears >= 12 ? 0.6 : 0.2;
  const runtimeFactor = system.runtime.todayHours > system.runtime.normalHours ? 0.4 : 0.1;
  const repairRatio = repairCost > 0 ? repairCost / 5000 : 0;

  const score = ageFactor * 45 + runtimeFactor * 25 + repairRatio * 30;

  if (score >= 0.8) {
    return {
      recommendation: 'replace',
      reason: 'The system is older, underperforming, and repair costs may not be the best long-term value.',
      confidence: 'high'
    };
  }

  if (score >= 0.45) {
    return {
      recommendation: 'repair-or-monitor',
      reason: 'The unit is aging but may still provide value if the issue is minor and cost remains reasonable.',
      confidence: 'medium'
    };
  }

  return {
    recommendation: 'repair',
    reason: 'The system is within normal operating parameters and appears to be serviceable.',
    confidence: 'high'
  };
}

export function getSystemSummary() {
  return systems.map((system) => ({
    systemId: system.id,
    brand: system.brand,
    ageYears: system.ageYears,
    health: evaluateSystemHealth(system),
    recommendation: evaluateReplacementRecommendation(system, 900)
  }));
}
