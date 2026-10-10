export function buildRebateMatch(system) {
  const match = [
    {
      provider: 'Duke Energy',
      program: 'High efficiency heat pump rebate',
      amount: 750,
      relevance: system.unitType === 'heat-pump' || system.brand === 'Trane' ? 'high' : 'medium'
    },
    {
      provider: 'Carrier',
      program: 'Equipment upgrade incentive',
      amount: 500,
      relevance: system.brand === 'Carrier' ? 'high' : 'low'
    }
  ];

  return match;
}
