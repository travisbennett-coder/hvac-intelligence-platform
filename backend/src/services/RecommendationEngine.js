export class RecommendationEngine {
  constructor(db) {
    this.db = db;
  }

  calculateRepairVsReplaceScore(system, repairCost = 0) {
    let score = 0;

    const ageFactor = Math.min(50, (system.ageYears / 20) * 50);
    score += ageFactor;

    const runtimeOverage = Math.max(0, (system.runtime.todayHours - system.runtime.normalHours) / system.runtime.normalHours);
    const performanceFactor = Math.min(30, runtimeOverage * 100);
    score += performanceFactor;

    const ampOverage = Math.max(0, (system.electrical.ampDraw - system.electrical.ratedAmp) / system.electrical.ratedAmp);
    const electricalFactor = Math.min(20, ampOverage * 50);
    score += electricalFactor;

    if (repairCost > 0) {
      const repairRatio = Math.min(1, repairCost / (system.ageYears < 10 ? 3000 : 2000));
      const repairCostFactor = repairRatio * 40;
      score += repairCostFactor;
    }

    return Math.min(100, score);
  }

  getRecommendation(system, repairCost = 0) {
    const score = this.calculateRepairVsReplaceScore(system, repairCost);

    let recommendation = {};

    if (score >= 75) {
      recommendation = {
        action: 'replace',
        confidence: 'high',
        message: `Your ${system.brand} system is aging and showing efficiency issues. Replacement would likely be the best long-term value.`,
        rationale: 'System age, performance degradation, and repair costs suggest replacement is more economical than continued repairs.',
        estimatedROI: `Potential savings: $${Math.round(system.energyUsage.monthlyCost * 0.25 * 12)} per year in energy costs`
      };
    } else if (score >= 50) {
      recommendation = {
        action: 'repair-or-replace',
        confidence: 'medium',
        message: `Your system is showing age but may still provide value with continued maintenance. Decision depends on repair cost and your priorities.`,
        rationale: 'System is in the middle range. Monitor closely and consider replacement if repair costs exceed 50% of new unit price.',
        estimatedROI: `Monitor repair costs; replacement may be justified if repairs exceed $${Math.round(5000 * 0.5)}`
      };
    } else {
      recommendation = {
        action: 'repair',
        confidence: 'high',
        message: `Your ${system.brand} system is still within its effective service life. Continue maintenance and plan for eventual replacement.`,
        rationale: 'System is performing reasonably. Regular maintenance will extend lifespan and maintain efficiency.',
        estimatedROI: `Continue preventive maintenance to avoid costly emergency repairs.`
      };
    }

    return {
      systemId: system.id,
      score: Math.round(score),
      ...recommendation,
      generatedAt: new Date().toISOString()
    };
  }

  getAvailableRebates(system) {
    const rebates = [];

    if (system.ageYears >= 12 && (system.brand === 'Carrier' || system.brand === 'Trane')) {
      rebates.push({
        provider: 'Duke Energy',
        title: 'High Efficiency Equipment Rebate',
        amount: 750,
        eligibility: 'Energy Star certified replacement systems',
        relevance: 'high'
      });
    }

    if (system.unitType === 'heat-pump') {
      rebates.push({
        provider: 'North Carolina Clean Energy Coalition',
        title: 'Heat Pump Upgrade Incentive',
        amount: 500,
        eligibility: 'New heat pump installation',
        relevance: 'high'
      });
    }

    rebates.push({
      provider: system.brand,
      title: `${system.brand} Equipment Upgrade Incentive`,
      amount: 300,
      eligibility: 'Direct manufacturer rebate for qualifying upgrades',
      relevance: 'medium'
    });

    return rebates;
  }
}
