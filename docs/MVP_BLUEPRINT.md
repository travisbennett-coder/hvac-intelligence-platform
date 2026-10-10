# HVAC Intelligence Platform - MVP Blueprint

## 1. Product Vision

HVAC Intelligence is a white-label SaaS platform for HVAC contractors. It helps customers understand how their system is performing, catch aging equipment before failure, simplify maintenance tracking, and discover savings through local coupons and rebates.

The platform is designed to work for one HVAC company or many contractor brands at once.

## 2. MVP Goals

The MVP should prove the core platform value:
- customers can register and manage their HVAC systems
- service and maintenance data can be collected consistently
- system health is scored based on age, runtime, amps, ohms, and temperature behavior
- the app can recommend repair vs. replacement
- the app can show rebate and local deal opportunities
- a contractor can manage customers, alerts, scheduling, and service records

## 3. MVP Users

- HVAC contractor owner / admin
- field technician
- customer / homeowner
- local partner business

## 4. MVP Features

### A. Contractor onboarding & white-label setup
- contractor creates account
- sets brand name and app colors
- chooses service area
- configures features and pricing
- creates custom support details

### B. Customer account and system setup
- customer signs up
- adds home address
- adds HVAC system details
- sets system age, brand, model, install date, warranty info
- links thermostat when available

### C. Smart system monitoring
- indoor temp
- outdoor temp
- target temp
- runtime hours
- amps
- ohms
- refrigerant status
- maintenance date and technician

### D. Maintenance checklist
- technician visits system
- measures real values
- marks system as pass/warning/fail
- stores notes and photos
- checks refrigerant, amp draw, and ohm values

### E. Health scoring and alerts
- system age alert
- runtime above expected alert
- amp over rating alert
- resistance out of range alert
- temperature drift alert
- maintenance due alert

### F. Recommendation engine
- determine if repair or replacement is better
- show yearly cost impact and likely savings
- surface high-value rebate options
- explain recommendation clearly to customer

### G. Local offers and savings
- nearby restaurant/bar/shop offers
- QR-based redemption
- promotional offers classified by category
- seasonal offers and local campaigns

### H. Scheduling and technician visibility
- book appointment
- assign technician
- show technician photo and profile
- show arrival time and status

## 5. MVP User Flow

### Customer journey
1. Sign up
2. Add home and HVAC system
3. Link thermostat if connected
4. Review system health and alerts
5. See annual energy and maintenance trends
6. Complete maintenance checklist or book service
7. View rebate and local savings offers
8. Schedule service and track technician arrival

### Technician journey
1. View assigned service call
2. Open checklist
3. Record measurements
4. Upload note or photo
5. Submit service status
6. Sync results to customer system record

### Contractor journey
1. Onboard brand
2. Add technicians
3. Review customers and systems
4. See alerts and maintenance insights
5. Manage offers and partner businesses
6. Track service performance and retention

## 6. MVP Data Model

### contractors
- id
- name
- app_name
- primary_color
- secondary_color
- service_area
- subscription_tier
- created_at

### customers
- id
- contractor_id
- first_name
- last_name
- email
- phone
- address
- created_at

### technicians
- id
- contractor_id
- first_name
- last_name
- photo_url
- certifications
- active

### hvac_systems
- id
- contractor_id
- customer_id
- brand
- model
- serial_number
- install_date
- age_years
- unit_type
- warranty_status
- status
- created_at

### thermostat_connections
- id
- system_id
- customer_id
- contractor_id
- brand
- model
- paired
- connection_type
- last_seen

### system_metrics
- id
- system_id
- indoor_temp
- outdoor_temp
- target_temp
- runtime_hours
- amp_draw
- rated_amp
- ohms
- target_ohms
- refrigerant_status
- recorded_at

### maintenance_logs
- id
- system_id
- contractor_id
- technician_id
- refrigerant_check
- amp_check
- ohm_check
- notes
- photos
- created_at

### alerts
- id
- system_id
- contractor_id
- code
- severity
- message
- acknowledged
- created_at

### recommendations
- id
- system_id
- contractor_id
- action
- score
- message
- created_at

### coupons
- id
- contractor_id
- business_name
- category
- offer
- city
- qr_code
- active
- expires_at

### appointments
- id
- customer_id
- contractor_id
- technician_id
- service_type
- scheduled_date
- scheduled_time
- status

## 7. MVP API Routes

### Contractor routes
- POST /api/contractors/onboard
- GET /api/contractors/:id
- PUT /api/contractors/:id/branding

### Customer routes
- POST /api/customers/register
- GET /api/customers/:id
- GET /api/customers/:id/systems

### System routes
- POST /api/systems/register
- GET /api/systems/:id
- GET /api/systems/:id/metrics
- GET /api/systems/:id/alerts
- GET /api/systems/:id/recommendations

### Thermostat routes
- POST /api/thermostats/pair
- GET /api/thermostats/:id/data
- GET /api/thermostats/:id/history

### Maintenance routes
- GET /api/maintenance/checklists
- POST /api/maintenance/evaluate
- POST /api/maintenance/logs

### Recommendation routes
- GET /api/recommendations/:systemId
- POST /api/recommendations/generate

### Local offers routes
- GET /api/coupons/nearby
- POST /api/coupons/redeem
- GET /api/rebates/:systemId

### Scheduling routes
- GET /api/scheduling/availability
- POST /api/scheduling/book
- GET /api/scheduling/:customerId

## 8. MVP Acceptance Criteria

### Contractor onboarding
- a contractor can create an account and configure branding
- the system returns their app configuration
- the brand can be used across customer views

### Customer registration
- a customer can sign up successfully
- the customer can add one or more HVAC systems
- the customer sees the system on the home dashboard

### Monitoring
- thermostat or system readings can be stored
- indoor, outdoor, runtime, amp, ohm, and refrigerant info is visible
- system health updates when new data arrives

### Maintenance
- technician can log measured readings
- app evaluates whether readings are within safe range
- system can be marked as pass or warning/fail

### Alerts / recommendations
- app warns when system age or performance exceeds thresholds
- app offers a clear recommendation for repair vs replacement
- app surfaces relevant rebates

### Savings / marketplace
- nearby offers are returned based on location
- coupon can be redeemed via QR or code
- customer sees seasonal and local offers

### Scheduling
- customer can schedule service
- technician can be assigned and shown to customer
- appointment status is tracked

## 9. MVP Platform Design

### Frontend
- mobile app for customers and technicians
- dashboard for contractors

### Backend
- REST API with service layer
- health scoring engine
- recommendation engine
- alert engine
- analytics and field service logic

### Database
- PostgreSQL for relational data
- object storage for photos
- optional cache/queue for real-time events

## 10. MVP Timeline

### Sprint 1: Foundation
- contractor onboarding
- customer profile
- HVAC system registration
- maintenance checklist schema and data model
- app shell UI

### Sprint 2: Diagnostics & alerts
- reading capture
- health score engine
- system alert logic
- recommendation engine

### Sprint 3: Customer experience
- dashboard UI
- thermostat pairing
- service scheduling
- local offers and QR redemption

### Sprint 4: Contractor dashboard
- customer management
- alerts overview
- maintenance list
- local partnership management
- subscription and brand settings

## 11. MVP Success Metrics

- number of active contractor accounts
- number of active customer accounts
- number of systems tracked
- maintenance checklist completion rate
- percentage of customers with alerts reviewed
- repair vs replace recommendation engagement
- number of coupon redemptions
- service scheduling conversion rate

## 12. Strategic Summary

This MVP is designed to prove the most important value proposition: a contractor can turn their HVAC service into a proactive, data-driven, digital customer experience that helps customers save money, understand their equipment, and stay on a maintenance plan instead of waiting for breakdowns.

At scale, this becomes a platform for many HVAC companies, not just one.
