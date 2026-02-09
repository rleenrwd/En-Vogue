# En Vogue

# Product Brief

## 1.  Who is this for?

This application is intended for pet owners who want a professional
grooming service and a convenient way to view services, book
appointments, and contact the business. It also supports the business
owner by providing an administrative dashboard to manage website content
and customer requests.

## 2.  What problem are we solving?

This project is a custom web application inspired by an existing pet grooming website that I previously built using Wix for a real client. The goal is to recreate and improve that site as a custom-built application that can replace the Wix version when done. The client expressed concerns with Wix’s limitations and wants more control over the site.

By rebuilding the site using a full-stack approach, the project provides
greater flexibility, maintainability, and control over features such as
bookings, services, testimonials, and customer communication, while also
serving as a practical application of Software Development Life Cycle
(SDLC) principles.

## 3.  In Scope (V1)

Customer-facing functionality:

View available grooming services

Book an appointment

Receive a text message confirmation after submitting a booking

Contact the business through a contact form

View customer testimonials

Administrative functionality:

Admin login and logout

View booking requests

Create, update, and delete services

Create, Update and delete booking requests

Create, update, and delete testimonials

View and delete customer messages

## 4.  Out of Scope (V1)

Online payments or billing

Customer user accounts

Advanced scheduling logic (multiple groomers, capacity management,
blackout dates)

Automated reminder or follow-up notifications

Reporting or analytics dashboards

These features may be considered for future iterations.

## 5.  Security (MVP Scope)

The application implements security controls appropriate for an MVP that
could be extended for production use:

Admin authentication using JSON Web Tokens (JWT)

JWTs stored in HttpOnly cookies to reduce client-side exposure

Passwords securely hashed using industry-standard hashing

Client-side form validation to guide users and reduce invalid
submissions

Server-side input validation using Joi to enforce rules and prevent
malformed or malicious data from being processed

Sensitive configuration values managed through environment variables

Additional production-level security measures may be implemented after deployment, if needed.

## 6.  Constraints

The project prioritizes core functionality for v1.

Development and testing are performed in a local environment.

The system focuses on correctness, maintainability, and clarity rather
than feature completeness.

Testing includes manual test scripts and basic automated API tests to
support SDLC practices.

## 7.  Success Criteria

The project is considered successful when:

Users can view services, book appointments, receive a confirmation
message, and contact the business without errors.

The business owner can securely manage services, bookings, testimonials,
and messages through the admin dashboard.

The project demonstrates a structured SDLC approach with supporting
documentation and test artifacts.

The system's evolution from an existing Wix implementation satifies the client expectations.