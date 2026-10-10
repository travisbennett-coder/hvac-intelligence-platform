# HVAC Platform Database Schema

This document outlines the recommended data model for a multi-tenant HVAC SaaS platform serving multiple contractors and their customers.

## Core Principles

- Multi-tenant architecture with `contractor_id` on every major table
- Customer-specific systems and service records tied to individual contractors
- White-label branding stored in `contractors` table
- Real-time telemetry and maintenance logs stored as separate tables for analytics
- Local business coupons and partner offers stored with geolocation fields

## Primary Tables

### `contractors`
| Field | Type | Notes |
| --- | --- | --- |
| id | UUID | Primary key |
| name | VARCHAR | Contractor business name |
| legal_name | VARCHAR | Optional legal business name |
| email | VARCHAR | Business contact email |
| phone | VARCHAR | Primary phone |
| service_area | TEXT | Coverage area |
| status | ENUM | active, trial, suspended |
| subscription_tier | VARCHAR | pro, elite, enterprise |
| brand_colors | JSONB | White-label colors |
| app_name | VARCHAR | Customer-facing app name |
| created_at | TIMESTAMP | |

### `customers`
| Field | Type | Notes |
| --- | --- | --- |
| id | UUID | Primary key |
| contractor_id | UUID | FK to contractors |
| first_name | VARCHAR | |
| last_name | VARCHAR | |
| email | VARCHAR | |
| phone | VARCHAR | |
| address | TEXT | |
| preferred_contact | ENUM | sms, email, phone |
| created_at | TIMESTAMP | |

### `technicians`
| Field | Type | Notes |
| --- | --- | --- |
| id | UUID | Primary key |
| contractor_id | UUID | FK to contractors |
| first_name | VARCHAR | |
| last_name | VARCHAR | |
| certifications | JSONB | EPA, licensing, provider details |
| phone | VARCHAR | |
| is_active | BOOLEAN | |

### `hvac_systems`
| Field | Type | Notes |
| --- | --- | --- |
| id | UUID | Primary key |
| contractor_id | UUID | FK to contractors |
| customer_id | UUID | FK to customers |
| unit_type | VARCHAR | central-air, heat-pump, furnace |
| brand | VARCHAR | Carrier, Trane, etc. |
| model | VARCHAR | Manufacturer model |
| serial_number | VARCHAR | |
| install_date | DATE | |
| age_years | INTEGER | Calculated |
| refrigerant_type | VARCHAR | R-410A, etc. |
| tonnage | DECIMAL | |
| location | VARCHAR | Indoor/outdoor zone |
| status | VARCHAR | healthy, monitoring, attention-needed |
| created_at | TIMESTAMP | |

### `system_metrics`
| Field | Type | Notes |
| --- | --- | --- |
| id | UUID | Primary key |
| system_id | UUID | FK to hvac_systems |
| indoor_temp | DECIMAL | |
| outdoor_temp | DECIMAL | |
| target_temp | DECIMAL | |
| runtime_hours | DECIMAL | Daily runtime |
| amp_draw | DECIMAL | |
| rated_amp | DECIMAL | |
| ohms | DECIMAL | |
| target_ohms | DECIMAL | |
| monthly_kwh | DECIMAL | |
| monthly_cost | DECIMAL | |
| capture_time | TIMESTAMP | |

### `maintenance_checklists`
| Field | Type | Notes |
| --- | --- | --- |
| id | UUID | Primary key |
| contractor_id | UUID | FK to contractors |
| title | VARCHAR | e.g. Spring Tune-Up |
| description | TEXT | |
| is_active | BOOLEAN | |
| version | INTEGER | |

### `maintenance_logs`
| Field | Type | Notes |
| --- | --- | --- |
| id | UUID | Primary key |
| contractor_id | UUID | FK to contractors |
| system_id | UUID | FK to hvac_systems |
| technician_id | UUID | FK to technicians |
| checklist_id | UUID | FK to maintenance_checklists |
| refrigerant_check | ENUM | pass, warning, fail |
| amp_check | ENUM | pass, warning, fail |
| ohm_check | ENUM | pass, warning, fail |
| notes | TEXT | |
| created_at | TIMESTAMP | |

### `thermostats`
| Field | Type | Notes |
| --- | --- | --- |
| id | UUID | Primary key |
| contractor_id | UUID | FK to contractors |
| customer_id | UUID | FK to customers |
| brand | VARCHAR | Nest, Ecobee, Honeywell |
| model | VARCHAR | |
| status | ENUM | connected, disconnected, pairing |
| connection_type | VARCHAR | wifi, bluetooth |
| last_seen | TIMESTAMP | |

### `alerts`
| Field | Type | Notes |
| --- | --- | --- |
| id | UUID | Primary key |
| contractor_id | UUID | FK to contractors |
| system_id | UUID | FK to hvac_systems |
| code | VARCHAR | aging_system, amp_overdraw |
| severity | ENUM | low, medium, high |
| message | TEXT | |
| acknowledged | BOOLEAN | |
| created_at | TIMESTAMP | |

### `coupons`
| Field | Type | Notes |
| --- | --- | --- |
| id | UUID | Primary key |
| contractor_id | UUID | FK to contractors |
| business_name | VARCHAR | |
| category | VARCHAR | restaurant, bar, shop |
| offer | TEXT | |
| city | VARCHAR | |
| lat | DECIMAL | |
| lon | DECIMAL | |
| qr_code | VARCHAR | |
| active | BOOLEAN | |

### `rebates`
| Field | Type | Notes |
| --- | --- | --- |
| id | UUID | Primary key |
| contractor_id | UUID | FK to contractors |
| provider | VARCHAR | Utility, manufacturer |
| title | VARCHAR | |
| description | TEXT | |
| amount | DECIMAL | |
| eligibility | TEXT | |
| active | BOOLEAN | |

### `appointments`
| Field | Type | Notes |
| --- | --- | --- |
| id | UUID | Primary key |
| contractor_id | UUID | FK to contractors |
| customer_id | UUID | FK to customers |
| technician_id | UUID | FK to technicians |
| service_type | VARCHAR | maintenance, diagnostic, install |
| scheduled_for | TIMESTAMP | |
| status | VARCHAR | pending, confirmed, completed |

## Indexes

- `customers(contractor_id)`
- `hvac_systems(customer_id)`
- `system_metrics(system_id, capture_time)`
- `maintenance_logs(system_id, created_at)`
- `alerts(system_id, severity, acknowledged)`
- `coupons(city, active)`
- `appointments(customer_id, scheduled_for)`

## Future Tables

- `utility_accounts` for energy bill import
- `wifi_sensors` for additional smart monitoring devices
- `campaigns` for email and SMS offers
- `partner_affiliates` for Home Depot / Lowe's style promotions
- `marketing_clicks` for tracking QR redemptions and referral conversions
