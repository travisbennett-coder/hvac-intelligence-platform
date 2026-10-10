export const contractors = [
  {
    id: 'c-1001',
    name: 'Wendell Climate Solutions',
    serviceArea: 'Wendell, NC',
    brandColor: '#1c7c54',
    subscriptionTier: 'pro',
    timezone: 'America/New_York',
    whiteLabel: {
      appName: 'Wendell Comfort',
      primaryColor: '#1c7c54',
      secondaryColor: '#0b2b26'
    }
  },
  {
    id: 'c-1002',
    name: 'Bright Air & Heat',
    serviceArea: 'Raleigh / Clayton',
    brandColor: '#0f4c81',
    subscriptionTier: 'elite',
    timezone: 'America/New_York',
    whiteLabel: {
      appName: 'Bright Air',
      primaryColor: '#0f4c81',
      secondaryColor: '#0d1c2d'
    }
  }
];

export const customers = [
  {
    id: 'u-2001',
    contractorId: 'c-1001',
    name: 'Darlene Walker',
    homeAddress: '128 Town Center Dr',
    servicePlan: 'Premier Care',
    alerts: 3,
    preferredContact: 'sms'
  },
  {
    id: 'u-2002',
    contractorId: 'c-1001',
    name: 'Marcus Ellis',
    homeAddress: '49 Timberbrook Lane',
    servicePlan: 'Essential Care',
    alerts: 1,
    preferredContact: 'email'
  }
];

export const systems = [
  {
    id: 's-5001',
    customerId: 'u-2001',
    contractorId: 'c-1001',
    unitType: 'central-air',
    brand: 'Carrier',
    model: 'Performance 24ABC6',
    installDate: '2011-04-18',
    ageYears: 15,
    refrigerantType: 'R-410A',
    tonnage: 2.5,
    location: 'Main floor',
    status: 'monitoring',
    energyUsage: {
      monthlyKwh: 1480,
      monthlyCost: 218
    },
    runtime: {
      todayHours: 6.4,
      normalHours: 4.2,
      efficiency: 72
    },
    temperature: {
      indoor: 72,
      outdoor: 82,
      target: 70,
      delta: 2
    },
    electrical: {
      ampDraw: 18.2,
      ratedAmp: 16.0,
      ohms: 6.2,
      targetOhms: 5.8
    },
    maintenance: {
      lastService: '2025-07-14',
      technician: 'Caleb Smith'
    }
  },
  {
    id: 's-5002',
    customerId: 'u-2002',
    contractorId: 'c-1001',
    unitType: 'heat-pump',
    brand: 'Trane',
    model: 'XV20i',
    installDate: '2017-02-12',
    ageYears: 9,
    refrigerantType: 'R-410A',
    tonnage: 2.0,
    location: 'Upstairs bedroom zone',
    status: 'healthy',
    energyUsage: {
      monthlyKwh: 980,
      monthlyCost: 146
    },
    runtime: {
      todayHours: 4.1,
      normalHours: 4.3,
      efficiency: 95
    },
    temperature: {
      indoor: 71,
      outdoor: 79,
      target: 70,
      delta: 1
    },
    electrical: {
      ampDraw: 15.4,
      ratedAmp: 15.8,
      ohms: 5.9,
      targetOhms: 5.8
    },
    maintenance: {
      lastService: '2025-08-19',
      technician: 'Mia Reynolds'
    }
  }
];

export const maintenanceLogs = [
  {
    id: 'm-3001',
    systemId: 's-5001',
    checklistName: 'Spring Tune-Up',
    status: 'scheduled',
    refrigerantCheck: 'pass',
    ampCheck: 'warning',
    ohmCheck: 'warning',
    notes: 'System running above expected runtime for the given outdoor temp.'
  },
  {
    id: 'm-3002',
    systemId: 's-5002',
    checklistName: 'Fall Efficiency Review',
    status: 'completed',
    refrigerantCheck: 'pass',
    ampCheck: 'pass',
    ohmCheck: 'pass',
    notes: 'No abnormal readings. Unit within manufacturer operating range.'
  }
];

export const thermostatDevices = [
  {
    id: 't-7001',
    customerId: 'u-2001',
    contractorId: 'c-1001',
    brand: 'Nest',
    paired: true,
    connection: 'wifi',
    model: 'Nest Learning Thermostat',
    status: 'connected',
    indoorTemp: 72,
    outdoorTemp: 82,
    targetTemp: 70,
    currentMode: 'cool',
    runtimeMinutes: 384,
    lastSeen: '2026-10-10T09:15:00Z'
  },
  {
    id: 't-7002',
    customerId: 'u-2002',
    contractorId: 'c-1001',
    brand: 'Ecobee',
    paired: true,
    connection: 'wifi',
    model: 'Ecobee SmartThermostat',
    status: 'connected',
    indoorTemp: 71,
    outdoorTemp: 79,
    targetTemp: 70,
    currentMode: 'heat',
    runtimeMinutes: 246,
    lastSeen: '2026-10-10T09:20:00Z'
  }
];

export const coupons = [
  {
    id: 'cp-9001',
    businessName: 'Wendell Pizza & Grill',
    category: 'restaurant',
    offer: '20% off family meals',
    location: { city: 'Wendell', lat: 35.7839, lon: -78.3658 },
    qrCode: 'WPG-20-OFF',
    active: true
  },
  {
    id: 'cp-9002',
    businessName: 'Red Oak Brewhouse',
    category: 'bar',
    offer: 'Free appetizer with AC tune-up referral',
    location: { city: 'Wendell', lat: 35.7824, lon: -78.3679 },
    qrCode: 'ROB-FREE-APP',
    active: true
  },
  {
    id: 'cp-9003',
    businessName: 'Home & Yard Market',
    category: 'home-improvement',
    offer: '10% off spring outdoor items',
    location: { city: 'Wendell', lat: 35.7855, lon: -78.3604 },
    qrCode: 'HYM-SPRING',
    active: true
  }
];

export const rebates = [
  {
    id: 'rb-8001',
    provider: 'Duke Energy',
    title: 'High efficiency heat pump rebate',
    description: 'Rebate available for qualifying high-efficiency replacement systems.',
    amount: 750,
    eligibility: 'Energy Star certified systems',
    active: true
  },
  {
    id: 'rb-8002',
    provider: 'Carrier',
    title: 'Limited time equipment upgrade incentive',
    description: 'Manufacturer rebate for qualifying premium equipment upgrades.',
    amount: 500,
    eligibility: 'New installation and online registration',
    active: true
  }
];

export const appointments = [
  {
    id: 'ap-6001',
    customerId: 'u-2001',
    contractorId: 'c-1001',
    technicianId: 't-4001',
    serviceType: 'maintenance',
    date: '2026-10-15',
    time: '10:00 AM',
    status: 'confirmed'
  },
  {
    id: 'ap-6002',
    customerId: 'u-2002',
    contractorId: 'c-1001',
    technicianId: 't-4002',
    serviceType: 'diagnostic',
    date: '2026-10-16',
    time: '2:30 PM',
    status: 'pending'
  }
];
