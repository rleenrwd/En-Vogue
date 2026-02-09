# En Vogue - Test Plan (V1)

## Version: V1 \| Owner: Robert Norwood \|

## 1.  Purpose

Define the testing approach, scope, resources, and success criteria for
Version 1 of the En Vogue application.

## 2.  Project Summary

En Vogue Grooming is a full-stack web application built as a custom replacement for a real pet grooming website that I originally created for a client using Wix. V1 supports public browsing of services, booking auto‑confirmed appointments with SMS confirmation, submitting contact messages, viewing testimonials, and admin management of services, bookings, testimonials, and messages.

## 3.  Test Objectives

Verify core user and admin workflows function correctly end‑to‑end.

Verify admin can create confirmed bookings and that double booking
prevention applies.

Validate required field rules (client-side) and Joi validation rules
(server-side).

Verify authentication/authorization protects admin routes using JWT
stored in HttpOnly cookies.

Verify bookings are auto‑confirmed and prevent double booking for a
date/time slot.

Verify SMS confirmation triggers after successful booking creation and
failures are handled gracefully.

Document results using test cases and a defect log.

## 4.  Test Scope

In Scope: Services browsing, booking creation (auto‑confirmed), time
slot availability (predefined slots), contact messages, testimonials
display, admin login/logout, admin CRUD operations for
services/testimonials, admin booking create (walk-ins/manual
bookings)/update/delete, admin message view/delete.

Out of Scope: payments, customer accounts, advanced scheduling engine,
reminder notifications, analytics/reporting, MFA.

## 5.  Test Types

Manual Functional Testing (UI + API)

API Testing (basic automated) for key endpoints (auth, services,
bookings, messages)

Validation Testing (client-side + server-side)

Security Smoke Testing (auth required, cookie behavior, unauthorized
access)

## 6.  Test Environment

Local development environment (Windows)

Frontend: React (client-side validation)

Backend: Node.js + Express

Database: MongoDB (local or Atlas dev)

SMS: Twilio (dev credentials) or stubbed SMS provider for local testing

Tools: VS Code, Postman/Thunder Client, MongoDB Compass (optional), SSMS
(for SQL sample only)

## 7.  Test Data

Seeded services (minimum 3 services with required
images/prices/durations).

Admin test account (email/password) stored with hashed password.

Bookings using valid dates and predefined time slots; include boundary
times (first/last slot).

Messages with required phone + email + message.

Testimonials with required name + message.

Admin-created booking test data (walk-in scenario).

## 8.  Entry Criteria

Product Brief, User Stories, and ERD are finalized.

Core API routes implemented for Services, Bookings, Messages,
Testimonials, and Auth.

MongoDB connection configured and running.

Admin login works (JWT cookie issued on success).

## 9.  Exit Criteria

All Critical and High severity test cases pass.

No open Critical defects; High defects have documented workaround or fix
plan.

Core flows demo successfully: view services → book appointment → SMS
confirmation attempt → admin manages data.

Test artifacts updated: test plan, test cases, defect log.

## 10. Roles & Responsibilities

Tester/Developer (Robert Norwood): write test cases, execute tests, log
defects, fix defects, re-test.

Optional Reviewer: peer/mentor reviews artifacts and spot-checks key
flows.

## 11. Defect Management

Defects are logged with: ID, summary, steps, expected vs actual,
severity, status, environment, and evidence (screenshots/logs).

Statuses: New → In Progress → Fixed → Retest → Closed.

## 12. Risks & Mitigations

SMS integration (Twilio) may fail due to credentials/phone verification
→ Mitigate by supporting a 'stub SMS' mode and logging failures without
blocking bookings.

Time constraints → Focus on must-have flows; run regression smoke tests
daily.

Environment differences between dev and demo → Use consistent .env
configuration and document setup steps.

## 13. Deliverables

Test_Plan_V1.docx

Test_Cases_V1.xlsx

Defect_Log.xlsx

Screenshots/logs as evidence for key tests (optional)