export class CouponService {
  constructor(db) {
    this.db = db;
  }

  async getNearbyOffers(latitude, longitude, radius = 5) {
    return [
      {
        id: 'cp-9001',
        businessName: 'Wendell Pizza & Grill',
        category: 'restaurant',
        offer: '20% off family meals',
        distance: 0.3,
        qrCode: 'WPG-20-OFF',
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 'cp-9002',
        businessName: 'Red Oak Brewhouse',
        category: 'bar',
        offer: 'Free appetizer with AC referral',
        distance: 0.4,
        qrCode: 'ROB-FREE-APP',
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
      }
    ];
  }

  async getSeasonalOffers(season = 'spring') {
    const seasonalOffers = {
      spring: [
        { businessName: 'Home & Yard Market', offer: '10% off spring items', category: 'home-improvement' },
        { businessName: 'Garden Center Plus', offer: '15% off patio furniture', category: 'outdoor' }
      ],
      summer: [
        { businessName: 'Wendell Ice Cream', offer: 'Free scoop for AC referral', category: 'dessert' }
      ],
      fall: [
        { businessName: 'Harvest Cafe', offer: '20% off autumn specials', category: 'restaurant' }
      ],
      winter: [
        { businessName: 'Holiday Shop', offer: '10% off all items', category: 'retail' }
      ]
    };

    return seasonalOffers[season] || [];
  }

  async redeemCoupon(customerId, couponId) {
    return {
      customerId,
      couponId,
      redeemedAt: new Date().toISOString(),
      status: 'active',
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    };
  }
}
