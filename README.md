# En Vogue Grooming --- Full-Stack Web Application (V1)

> **Status:** In active development (V1). This application is being
> built as a custom replacement for an existing client website and is
> planned for production deployment.

------------------------------------------------------------------------

## Overview

**En Vogue Grooming** is a full-stack web application developed as a
custom replacement for a real pet grooming website that I originally
created for a client using **Wix**.

The original Wix site met the client's immediate needs but introduced
long-term limitations related to platform costs, customization, data
control, and feature flexibility. This project rebuilds that site as a
fully custom software solution, giving the business full ownership over
functionality, integrations, and future growth.

This repository represents **Version 1 (V1)** of the platform. V1
focuses on delivering the core operational functionality required to
support real day-to-day business workflows with a clean, maintainable,
and production-minded backend architecture.

This system is being developed based on direct client requirements and
is intended to replace the existing Wix implementation as the business's
primary website and operational platform.

------------------------------------------------------------------------

## Why This Project Exists

This project was built to:

-   Replace a real client's Wix website with a custom full-stack
    platform
-   Eliminate dependency on third-party drag and drop site builders
-   Improve long-term maintainability and flexibility
-   Provide full control over features, data, and integrations
-   Support real operational workflows including scheduling, services
    management, and customer communication

Once V1 is complete and deployed, this application will replace the
client's existing Wix site and support ongoing business operations.

------------------------------------------------------------------------

## Project Goals

-   Build a production-oriented full-stack application based on real
    business requirements
-   Implement a reliable appointment booking workflow
-   Design server-side availability logic that prevents double booking
-   Follow SDLC best practices from planning through implementation
-   Deliver a maintainable backend foundation that can evolve as the
    business grows

------------------------------------------------------------------------

## Documentation (Starting Point)

This project was developed using a structured SDLC approach. The
documentation below represents the foundation used to guide design
decisions, feature scope, and implementation:

-   📄 **Product Brief** -- project purpose, scope, goals, and
    constraints
-   📐 **ERD (MongoDB)** -- data model and relationships
-   🧩 **User Stories & Acceptance Criteria** -- functional
    requirements
-   🧪 **Test Plan (V1)** -- testing approach and scope
-   ✅ **Test Cases (V1)** -- detailed test scenarios
-   🐞 **Defect Log (V1)** -- defect tracking and resolution

All documentation is located in the **`/docs`** directory.

------------------------------------------------------------------------

## Features (V1 Scope)

### Customer-Facing

-   View available grooming services
-   View service details (price, duration, description)
-   View **available appointment time slots** based on service duration
    and existing bookings
-   Create a booking (auto-confirmed)
-   Receive SMS confirmation after booking submission
-   Submit contact messages
-   View customer testimonials

### Admin (Protected)

-   Admin authentication (JWT stored in HttpOnly cookies)
-   View and manage bookings
-   Create, update, and delete services
-   Create, update, and delete testimonials
-   View and delete customer messages

------------------------------------------------------------------------

## Engineering Focus

This project emphasizes practical software engineering concerns that
support a real business environment, including:

-   Clean separation of concerns (controllers, validators, services,
    utilities)
-   Server-side input validation using **Joi**
-   Defensive handling of edge cases (invalid input, time conflicts)
-   Deterministic scheduling logic for appointment availability
-   Consistent API response contracts
-   Maintainable backend architecture suitable for future expansion

Supporting documentation and test artifacts are included to reflect an
SDLC-aligned development process.

------------------------------------------------------------------------

## Technology Stack

### Backend

-   Node.js
-   Express.js
-   MongoDB (Mongoose)
-   Joi (request validation)
-   JSON Web Tokens (JWT)
-   Twilio (SMS notifications)

### Frontend

-   React

### Tooling & Practices

-   Git / GitHub
-   RESTful API design
-   Environment-based configuration
-   SDLC-aligned documentation

------------------------------------------------------------------------

## Appointment Availability Logic (High-Level)

Appointment availability is calculated dynamically on the server based
on:

-   Business hours (9:00 AM -- 6:00 PM)
-   Selected service duration
-   A fixed buffer between appointments
-   Existing confirmed bookings

Time slots are generated in 10-minute increments and filtered using
overlap detection to prevent scheduling conflicts.

This logic ensures consistent behavior and guards against invalid
bookings regardless of client-side state.

------------------------------------------------------------------------

## API Example

### Get Availability

``` http
GET /api/bookings/availability?date=YYYY-MM-DD&serviceId=<ObjectId>
```

Example response:

``` json
{
  "success": true,
  "data": {
    "date": "2026-01-20",
    "serviceId": "...",
    "availTimes": ["13:10", "13:20", "13:30"]
  }
}
```

------------------------------------------------------------------------

## Current Status

-   Core backend functionality implemented
-   Booking and availability logic complete for V1
-   Validation and error handling in place
-   Admin workflows implemented for services, bookings, testimonials,
    and messages
-   Frontend development and deployment preparation ongoing

------------------------------------------------------------------------

## Future Enhancements

-   Online payments
-   Customer user accounts
-   Advanced scheduling (multiple groomers, blackout dates)
-   Automated reminders
-   Reporting and analytics

------------------------------------------------------------------------

## Author

**Robert L. Norwood**

Software Engineering Student | Freelance Full-Stack Developer
