export class MarketplaceService {
  constructor() {
    this.categories = ['restaurant', 'bar', 'home-improvement', 'outdoor', 'retail'];
  }

  async getFeaturedOffers(location = 'Wendell') {
    return [
      {
        id: 'offer-1',
        vendor: 'Wendell Pizza & Grill',
        category: 'restaurant',
        title: '20% off family meals',
        city: location,
        active: true,
        qrCode: 'WPG-20-OFF'
      },
      {
        id: 'offer-2',
        vendor: 'Red Oak Brewhouse',
        category: 'bar',
        title: 'Free appetizer with referral',
        city: location,
        active: true,
        qrCode: 'ROB-APP'
      },
      {
        id: 'offer-3',
        vendor: 'Home & Yard Market',
        category: 'home-improvement',
        title: '10% off spring outdoor items',
        city: location,
        active: true,
        qrCode: 'HYM-SPRING'
      }
    ];
  }

  async createOffer(offerData) {
    return {
      id: `offer-${Date.now()}`,
      ...offerData,
      active: true,
      createdAt: new Date().toISOString()
    };
  }

  async redeemOffer(customerId, offerId) {
    return {
      customerId,
      offerId,
      status: 'redeemed',
      redeemedAt: new Date().toISOString()
    };
  }
}
