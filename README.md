# En Vogue Grooming — Full-Stack Web Application (V1)

> **Status:** In active development (V1). Not yet deployed to production. Intended to become a production-ready replacement for an existing client website.

---

## Overview

**En Vogue Grooming** is a full-stack web application built as a custom replacement for a real pet grooming website that I originally created for a client using **Wix**.

The original Wix site met the client’s immediate needs, but introduced long-term limitations related to platform costs, customization, and control. This project rebuilds that site as a **custom software solution**, giving full ownership over features, data, integrations, and future growth.

This repository represents **Version 1 (V1)** of the application. V1 focuses on implementing core business functionality with clean architecture and a production-minded backend. The system is intentionally scoped so it can evolve into a fully deployed, client-ready product.

---

## Why This Project Exists

This project was built to:

* Replace a real client’s Wix website with a custom solution
* Eliminate dependency on third-party site builders
* Improve long-term maintainability and flexibility
* Enable features that are difficult or costly to implement on Wix
* Demonstrate real-world full-stack software engineering skills

Once completed, this application **could realistically take over as the client’s primary website**.

---

## Project Goals

* Build a realistic, production-minded **full-stack web application**
* Implement a functional appointment booking workflow
* Design server-side availability logic that prevents double booking
* Follow SDLC best practices from planning through implementation
* Produce clear documentation that explains system behavior and decisions

---

## Documentation (Starting Point)

This project was developed using a structured SDLC approach. The documentation below represents the **starting point** of the project and guided all design and implementation decisions:

* 📄 **Product Brief** – project purpose, scope, goals, and constraints
* 📐 **ERD (MongoDB)** – data model and relationships
* 🧩 **User Stories & Acceptance Criteria** – functional requirements
* 🧪 **Test Plan (V1)** – testing approach and scope
* ✅ **Test Cases (V1)** – detailed test scenarios
* 🐞 **Defect Log (V1)** – defect tracking and resolution

All documentation is located in the **`/docs`** directory.

---

## Features (V1 Scope)

### Customer-Facing

* View available grooming services
* View service details (price, duration, description)
* View **available appointment time slots** based on service duration and existing bookings
* Create a booking (auto-confirmed)
* Receive SMS confirmation after booking submission
* Submit contact messages
* View customer testimonials

### Admin (Protected)

* Admin authentication (JWT stored in HttpOnly cookies)
* View and manage bookings
* Create, update, and delete services
* Create, update, and delete testimonials
* View and delete customer messages

---

## Engineering Focus

This project emphasizes practical software engineering concerns, including:

* Clean separation of concerns (controllers, validators, services, utilities)
* Server-side input validation using **Joi**
* Defensive handling of edge cases (invalid input, time conflicts)
* Deterministic scheduling logic for appointment availability
* Consistent API response contracts
* Maintainable backend architecture suitable for future expansion

Supporting documentation and test artifacts are included to reflect an SDLC-aligned development process.

---

## Technology Stack

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* Joi (request validation)
* JSON Web Tokens (JWT)
* Twilio (SMS notifications)

### Frontend

* React

### Tooling & Practices

* Git / GitHub
* RESTful API design
* Environment-based configuration
* SDLC-aligned documentation

---

## Appointment Availability Logic (High-Level)

Appointment availability is calculated dynamically on the server based on:

* Business hours (9:00 AM – 6:00 PM)
* Selected service duration
* A fixed buffer between appointments
* Existing confirmed bookings

Time slots are generated in 10-minute increments and filtered using overlap detection to prevent scheduling conflicts.

This logic ensures consistent behavior and guards against invalid bookings regardless of client-side state.

---

## API Example

### Get Availability

```http
GET /api/bookings/availability?date=YYYY-MM-DD&serviceId=<ObjectId>
```

Example response:

```json
{
  "success": true,
  "data": {
    "date": "2026-01-20",
    "serviceId": "...",
    "availTimes": ["13:10", "13:20", "13:30"]
  }
}
```

---

## Current Status

* Core backend functionality implemented
* Booking and availability logic complete for V1
* Validation and error handling in place
* UI and advanced business features continuing in later iterations

---

## Future Enhancements

* Online payments
* Customer user accounts
* Advanced scheduling (multiple groomers, blackout dates)
* Automated reminders
* Reporting and analytics

---

## Author

**Robert L. Norwood**
Software Engineering Student | Freelance Full-Stack Developer

---

## Disclaimer

This project is under active development and is not yet deployed to a production environment. It is intended to become a production-ready system once feature completion and deployment steps are finalized.
