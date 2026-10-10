# HVAC Intelligence Platform - Integration Guide

## Smart Thermostat Integration

### Supported Devices
- **Nest Learning Thermostat** - OAuth 2.0 + REST API
- **Ecobee SmartThermostat** - API token + REST API
- **Honeywell Home** - OAuth 2.0 + REST API

### Thermostat Data Sync

Each connected thermostat sends real-time data:
- Indoor temperature
- Outdoor temperature (when available)
- Setpoint temperature
- Current runtime (in minutes)
- Operating mode (heating, cooling, idle)
- Humidity level

**Frequency**: Every 5 minutes (or on-change)

### Integration Flow

1. Customer initiates thermostat pairing in app
2. Platform redirects to device provider OAuth
3. Customer authorizes data access
4. Platform receives and stores authorization token
5. Platform polls device API every 5 minutes
6. Data is stored in `thermostat_readings` table
7. Alert engine evaluates readings in real-time

---

## HouseCall Pro Integration

### Scheduling Sync

Bidirectional sync with HouseCall Pro:
- New appointments in HVAC Intelligence sync to HouseCall Pro
- HouseCall Pro appointments visible in customer app
- Service completion status syncs back

### API Endpoints
- `POST /housecallpro/webhooks/appointment` - New appointment created
- `PUT /housecallpro/webhooks/appointment/:id` - Appointment status updated

---

## Manufacturer Rebate Integration

### Rebate Data Feed

Rebate programs are pulled from manufacturer APIs and utility company feeds:

- Duke Energy (utility incentives)
- Carrier (equipment rebates)
- Trane (HVAC incentives)
- Lennox (seasonal promotions)
- Rheem (rebate programs)

### Rebate Matching Logic

When a system is registered, the recommendation engine automatically matches available rebates based on:
- System brand and model
- Customer location
- System age
- Upgrade eligibility

---

## Bluetooth Device Integration

### Supported Diagnostic Tools

- **Refrigerant Clamps**: Measure pressure and temperature
- **Amp Clamps**: Capture electrical current draw
- **Ohm Meters**: Resistance readings
- **Airflow Probes**: Temperature split measurements

### Integration Method

Technician app connects via BLE to diagnostic device:

1. Technician opens maintenance checklist
2. App discovers nearby Bluetooth devices
3. Technician selects device to pair
4. Device sends reading to app
5. Reading is stored with maintenance log
6. Data is analyzed against system specs

---

## Energy Utility Integration

### Future: Bill Import

Planned integration with utility companies:
- Customer uploads electric bill PDF
- Platform extracts usage and cost data
- Analyzes HVAC's percentage of total consumption
- Calculates potential savings from upgrades

### Supported Utilities
- Duke Energy (NC)
- North Carolina Electric Cooperative
- Municipal utilities

---

## Local Business Partner Portal

### For Local Businesses

Partners can manage their offers via dashboard:
1. Create coupon/seasonal offer
2. Set expiration date and redemption limit
3. Generate QR code
4. View redemption analytics
5. Adjust offer in real-time

### For Contractors

Contractors can invite local businesses:
1. Invite partner via email
2. Partner creates account and coupon
3. Coupon appears in customer app
4. Contractor earns commission on referrals (future)

---

## API Gateway Patterns

### Multi-Tenant Request Header

All API requests include contractor context:

```
GET /api/customers/:customerId
Authorization: Bearer {jwt_token}
X-Contractor-ID: c-1001
X-Tenant-ID: c-1001
```

Backend middleware validates contractor access.

### Rate Limiting

- Standard: 1000 requests/hour per contractor
- Premium: 5000 requests/hour
- Enterprise: Unlimited

---

## Webhook Events

### Events Sent to Contractors

- `system.alert` - New system alert generated
- `system.health_change` - System health score updated
- `appointment.confirmed` - Service appointment confirmed
- `maintenance.completed` - Maintenance visit completed
- `thermostat.disconnected` - Device lost connection
- `rebate.available` - New rebate matching system

### Example Webhook Payload

```json
{
  "event": "system.alert",
  "systemId": "s-5001",
  "customerId": "u-2001",
  "alert": {
    "code": "AGING_SYSTEM",
    "severity": "high",
    "message": "System is 15 years old and nearing end of service life"
  },
  "timestamp": "2026-10-10T14:30:00Z"
}
```

---

## Third-Party SDK Integration

### For HVAC Companies Building on the Platform

Future SDK documentation will enable:
- Custom maintenance checklists
- Custom alert rules
- Custom recommendation logic
- Custom coupon categories
- Custom reporting dashboards

---

## Security & Compliance

- All data encrypted in transit (TLS 1.3)
- All data encrypted at rest (AES-256)
- API tokens rotated every 90 days
- PII fields masked in logs
- HIPAA-compliant audit trail (future)
- SOC 2 certification (target)

