# HVAC Platform Architecture

## Overview

The HVAC Intelligence Platform is a multi-tenant SaaS application built to serve many HVAC contractors with a shared technology layer while keeping each company's data, branding, and workflows isolated.

## Core Design Goals

1. White-label architecture for each contractor.
2. Customer-friendly mobile experience for service visibility and alerts.
3. Technician-first maintenance workflow for capture of real field data.
4. AI-informed scorecards for repair-vs-replace recommendations.
5. Marketplace capabilities for local coupons and partner offers.
6. Scalable integration layer for smart thermostats and future IoT hardware.

## High-Level System Layers

### 1. Client Applications
- Customer mobile app (iOS/Android)
- Technician mobile app (tablet/phone)
- Contractor admin dashboard (web)

### 2. API Gateway
- Authentication and authorization
- Request routing
- Tenant validation
- Rate limiting

### 3. Business Services
- Contractor management
- Customer and system management
- Maintenance checklist logic
- Alert engine
- Recommendation engine
- Coupon and rebate services
- Scheduling service

### 4. Data Layer
- PostgreSQL for business records and relational data
- Redis for cache and queue operations
- S3-compatible storage for photos, service documents, and QR assets

### 5. Integration Layer
- Nest thermostat APIs
- Ecobee APIs
- Honeywell APIs
- HouseCall Pro scheduling sync
- Utility/rebate feeds
- Local business partner portal

## Multi-Tenant Model

Each table that stores customer or business data should include `contractor_id`.

This allows:
- Shared infrastructure
- Separate brand look and feel
- Independent customer data access
- Separate billing, plan settings, and performance dashboards

## Alert Engine Strategy

The app should evaluate the following when generating alerts:
- system age
- runtime above expected baseline
- amp draw exceeding rating
- ohms outside manufacturer expected range
- indoor vs target temperature delta
- maintenance gaps and missed service windows

These signals feed into both customer notifications and contractor dashboards.

## Repair vs. Replace Recommendation Model

The recommendation engine should consider:
- age of system
- repair cost
- maintenance history
- performance degradation
- energy usage trends
- current unit efficiency

This is not a final diagnosis but a decision-support tool to help the contractor and customer make an informed choice.

## Future IoT Vision

The platform is intentionally built to support future sensor integration, including:
- smart condensers and evaporators
- refrigerant pressure sensors
- airflow sensors
- occupancy and humidity sensors
- Bluetooth diagnostic clamps and probes

## Security & Compliance

- Role-based access control
- Contractor data isolation
- Encrypted storage for customer addresses and service records
- Audit logs for edits and maintenance notes
- Secure API tokens for third-party integrations

## Suggested API Pattern

- `GET /api/systems/:id` for system details
- `GET /api/systems/:id/alerts` for system-specific alerts
- `GET /api/systems/:id/recommendation` for repair vs replace guidance
- `GET /api/thermostats/:id/data` for live thermostat data
- `GET /api/coupons/nearby` for local offers
- `POST /api/scheduling/book` for appointment creation

## Why This Architecture Works

It keeps the platform flexible enough to onboard many HVAC businesses while still giving each company its own branded experience, customer relationships, and operational workflows. That is the right foundation for a scalable HVAC SaaS product.
