# HVAC Intelligence Platform

A comprehensive multi-tenant SaaS platform designed for HVAC contractors to deliver exceptional customer service, data-driven maintenance insights, and intelligent cost analysis for heating and cooling systems.

## Platform Overview

**HVAC Intelligence** is a unified ecosystem connecting customers, technicians, and business owners with real-time HVAC system monitoring, predictive maintenance, energy cost analysis, and local business partnerships.

### Who This Is For
- **HVAC Contractors**: Manage customers, track service history, deliver white-labeled apps
- **End Customers**: Monitor system health, understand energy costs, get repair vs. replace recommendations
- **Technicians**: Log maintenance data, capture equipment readings, access checklists
- **Local Businesses**: Offer location-based coupons and seasonal promotions

---

## Core Features

### 🏠 Customer Mobile App (iOS/Android)
- System health dashboard with real-time status
- Smart thermostat integration (Nest, Ecobee, Honeywell Home)
- Energy bill analyzer & cost insights
- Repair vs. Replace cost-benefit calculator
- Maintenance history & service records
- Automated alerts (age-based, performance-based, seasonal)
- Local business coupons with QR codes
- Technician profiles & arrival tracking
- Service scheduling via HouseCall Pro integration
- Push notifications for critical alerts

### 👨‍🔧 Technician App (Tablet/Mobile)
- Digital maintenance checklists
- Equipment data capture (refrigerant, amps, ohms)
- Bluetooth device integration (diagnostic probes, clamps, etc.)
- Photo documentation & before/after gallery
- Service notes & time tracking
- Offline mode support
- Real-time sync with contractor backend

### 📊 Contractor Admin Dashboard
- Customer roster & system inventory
- Service history & performance metrics
- Technician management & scheduling
- White-label branding customization
- Local partner business management
- Coupon & rebate campaign creation
- Performance analytics & revenue insights
- Lead generation tools

### 🏪 Local Marketplace
- Restaurant, bar, and shop partnerships
- Location-based coupon discovery
- Seasonal events & promotions
- QR code redemption tracking
- Partner business onboarding dashboard
- Affiliate commission management

### 🔌 Smart Device Integration
- Nest Thermostat data sync
- Ecobee integration
- Honeywell Home compatibility
- Bluetooth diagnostic tool support
- WiFi-enabled sensor pairing
- Real-time temperature & runtime monitoring

### 💡 Energy & Cost Intelligence
- HVAC energy consumption analysis
- Bill impact breakdown
- Seasonal efficiency tracking
- Manufacturer rebate database
- Utility company incentive matching
- ROI calculator for equipment replacement
- Predictive maintenance scheduling

---

## Project Structure

```
hvac-intelligence-platform/
├── backend/                          # Node.js API & services
│   ├── src/
│   │   ├── auth/                    # Authentication & JWT
│   │   ├── contractors/             # Contractor/company management
│   │   ├── customers/               # Customer profiles & systems
│   │   ├── technicians/             # Technician management
│   │   ├── hvac-systems/            # HVAC system data & specs
│   │   ├── maintenance/             # Maintenance checklists & logs
│   │   ├── thermostat/              # Smart thermostat integration
│   │   ├── alerts/                  # Alert engine & notifications
│   │   ├── analytics/               # Energy & cost analysis
│   │   ├── coupons/                 # Local business coupons
│   │   ├── rebates/                 # Manufacturer rebate integration
│   │   ├── scheduling/              # Service scheduling
│   │   ├── marketplace/             # Local business marketplace
│   │   ├── payments/                # Stripe subscription management
│   │   ├── integrations/            # HouseCall Pro, smart home APIs
│   │   └── shared/                  # Utils, middleware, helpers
│   ├── database/
│   │   ├── migrations/              # Database migrations
│   │   └── seeders/                 # Test data
│   ├── tests/
│   ├── .env.example
│   ├── docker-compose.yml
│   └── package.json
│
├── mobile-app/                      # React Native (iOS/Android)
│   ├── src/
│   │   ├── screens/
│   │   │   ├── auth/                # Login/signup
│   │   │   ├── customer/            # Customer app screens
│   │   │   ├── technician/          # Technician app screens
│   │   │   └── shared/              # Shared screens
│   │   ├── components/              # Reusable React Native components
│   │   ├── navigation/              # Navigation stacks
│   │   ├── services/                # API service calls
│   │   ├── redux/                   # State management
│   │   ├── hooks/                   # Custom hooks
│   │   └── utils/
│   ├── app.json
│   └── package.json
│
├── admin-dashboard/                 # React web app
│   ├── src/
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   ├── contractor/          # Contractor admin pages
│   │   │   ├── customers/
│   │   │   ├── technicians/
│   │   │   ├── analytics/
│   │   │   ├── coupons/
│   │   │   └── settings/
│   │   ├── components/
│   │   ├── services/
│   │   ├── redux/
│   │   └── App.jsx
│   ├── public/
│   └── package.json
│
├── docs/                            # Documentation
│   ├── API.md                       # API documentation
│   ├── DATABASE_SCHEMA.md           # Database design
│   ├── ARCHITECTURE.md              # System architecture
│   ├── INTEGRATION_GUIDE.md         # Third-party integrations
│   └── DEPLOYMENT.md                # Deployment guide
│
└── .github/
    ├── workflows/                   # CI/CD pipelines
    └── CONTRIBUTING.md
```

---

## Tech Stack

### Backend
- **Runtime**: Node.js (v18+)
- **Framework**: NestJS or Express.js
- **Database**: PostgreSQL
- **Cache**: Redis (sessions, alerts, real-time data)
- **Authentication**: JWT + Firebase Auth
- **Payment**: Stripe API
- **Real-time**: Socket.io or Firebase Cloud Messaging

### Mobile (React Native)
- **Framework**: React Native (Expo or bare)
- **State**: Redux Toolkit
- **Navigation**: React Navigation
- **HTTP**: Axios
- **Bluetooth**: react-native-ble-plx
- **Maps**: react-native-maps
- **Push**: Firebase Cloud Messaging

### Admin Dashboard
- **Framework**: React 18+
- **Styling**: Tailwind CSS
- **State**: Redux Toolkit
- **Charts**: Chart.js or Recharts
- **Forms**: React Hook Form
- **UI Library**: Material-UI or shadcn/ui

### DevOps & Infrastructure
- **Containerization**: Docker
- **Orchestration**: Docker Compose (dev), Kubernetes (prod)
- **CI/CD**: GitHub Actions
- **Hosting**: AWS, DigitalOcean, or Heroku
- **Database**: PostgreSQL on managed service
- **Storage**: AWS S3 for photos/documents
- **Monitoring**: Sentry, DataDog, or New Relic

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Docker & Docker Compose
- PostgreSQL 14+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/travisbennett-coder/hvac-intelligence-platform.git
   cd hvac-intelligence-platform
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your config
   npm run db:migrate
   npm run dev
   ```

3. **Setup Mobile App**
   ```bash
   cd mobile-app
   npm install
   npm run start
   # Scan QR code for Expo Go, or build native
   ```

4. **Setup Admin Dashboard**
   ```bash
   cd admin-dashboard
   npm install
   npm run dev
   ```

---

## API Endpoints (Overview)

### Authentication
- `POST /api/auth/register` - Register contractor
- `POST /api/auth/login` - Login
- `POST /api/auth/refresh` - Refresh JWT token
- `POST /api/auth/logout` - Logout

### Contractors
- `GET /api/contractors/:id` - Get contractor details
- `PUT /api/contractors/:id` - Update branding & settings
- `POST /api/contractors/invite` - Invite technician/customer

### Customers
- `POST /api/customers/register` - Customer signup
- `GET /api/customers/:id` - Customer profile
- `GET /api/customers/:id/systems` - Customer's HVAC systems
- `GET /api/customers/:id/alerts` - Customer's alerts

### HVAC Systems
- `POST /api/systems` - Register new HVAC system
- `GET /api/systems/:id` - System details & health
- `PUT /api/systems/:id` - Update system info
- `GET /api/systems/:id/history` - Service history

### Maintenance
- `GET /api/maintenance/checklists` - Available checklists
- `POST /api/maintenance/logs` - Log maintenance visit
- `GET /api/maintenance/logs/:systemId` - System maintenance history

### Thermostat Integration
- `POST /api/thermostat/pair` - Pair smart thermostat
- `GET /api/thermostat/:id/data` - Real-time temp/runtime
- `GET /api/thermostat/:id/history` - Historical data

### Alerts
- `GET /api/alerts/:customerId` - Customer alerts
- `PUT /api/alerts/:id/acknowledge` - Mark alert as seen

### Analytics
- `GET /api/analytics/energy/:systemId` - Energy consumption data
- `GET /api/analytics/repair-vs-replace/:systemId` - Cost analysis

### Coupons & Marketplace
- `GET /api/coupons/nearby` - Location-based coupons
- `GET /api/coupons/:id/redeem` - Redeem coupon
- `POST /api/businesses` - Register local business
- `GET /api/businesses/nearby` - Nearby businesses & events

### Rebates
- `GET /api/rebates/search` - Search available rebates
- `POST /api/rebates/apply` - Apply for rebate

### Scheduling
- `POST /api/scheduling/available-slots` - Get available times
- `POST /api/scheduling/book` - Book service call
- `GET /api/scheduling/appointments/:customerId` - Customer appointments

---

## Database Schema (Overview)

Key tables:
- `contractors` - HVAC company accounts
- `customers` - End users
- `technicians` - Field service staff
- `hvac_systems` - Equipment records
- `maintenance_logs` - Service history
- `maintenance_checklists` - Predefined checklists
- `thermostat_integrations` - Paired smart devices
- `alerts` - System alerts
- `coupons` - Local business offers
- `businesses` - Partner restaurants/shops
- `rebates` - Manufacturer/utility incentives
- `appointments` - Service scheduling
- `subscription_plans` - Contractor billing

---

## Development Roadmap

### Phase 1: MVP (Months 1-2)
- [ ] Backend API with multi-tenant auth
- [ ] Contractor onboarding & white-label setup
- [ ] Customer registration & HVAC system input
- [ ] Basic maintenance checklist
- [ ] Nest thermostat integration
- [ ] Mobile app UI/UX (customer & technician)
- [ ] Service scheduling with HouseCall Pro
- [ ] Basic alerts (age-based, temperature)
- [ ] Local coupons (manual upload)

### Phase 2: Intelligent Features (Months 3-4)
- [ ] Energy bill analyzer
- [ ] Repair vs. replace calculator
- [ ] Manufacturer rebate database
- [ ] Bluetooth device integration
- [ ] Advanced alert rules
- [ ] Technician profiles & ratings
- [ ] Service history visualization

### Phase 3: Growth Features (Months 5-6)
- [ ] Affiliate partnerships (Home Depot, Lowes)
- [ ] Contractor business intelligence
- [ ] Customer retention tools
- [ ] Advanced analytics dashboard
- [ ] Multi-device Bluetooth support
- [ ] Loyalty rewards program

### Phase 4: Scale & Ecosystem (Ongoing)
- [ ] AR diagnostics
- [ ] AI predictive maintenance
- [ ] Marketplace for third-party integrations
- [ ] IoT sensor SDK for developers
- [ ] Lead generation platform
- [ ] White-label API for partners

---

## Contributing

See `CONTRIBUTING.md` for guidelines on contributing to this project.

---

## License

MIT License - See LICENSE file for details

---

## Support & Contact

- **GitHub Issues**: Report bugs or request features
- **Documentation**: See `/docs` folder
- **Email**: support@hvac-intelligence.platform

---

## Vision

HVAC Intelligence is building the infrastructure for the modern HVAC industry. We're empowering contractors to deliver smarter service, helping customers make informed decisions, and creating a marketplace where trust, transparency, and technology drive better outcomes.

Our mission: **Make HVAC maintenance predictable, affordable, and transparent for everyone.**

---

**Status**: 🚀 Active Development

Last updated: October 2026
