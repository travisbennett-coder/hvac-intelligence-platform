export class CustomerService {
  constructor(db) {
    this.db = db;
  }

  async registerCustomer(contractorId, customerData) {
    return {
      id: `u-${Date.now()}`,
      contractorId,
      ...customerData,
      systemCount: 0,
      alerts: 0,
      createdAt: new Date().toISOString()
    };
  }

  async getCustomerProfile(customerId) {
    return {
      id: customerId,
      name: 'Customer Name',
      email: 'customer@example.com',
      servicePlan: 'Premier Care',
      systems: [],
      appointments: []
    };
  }

  async getCustomerSystems(customerId) {
    return [
      {
        id: 's-5001',
        customerId,
        brand: 'Carrier',
        ageYears: 15,
        status: 'monitoring'
      }
    ];
  }

  async updateCustomerPreferences(customerId, preferences) {
    return {
      customerId,
      ...preferences,
      updatedAt: new Date().toISOString()
    };
  }
}
