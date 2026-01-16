# User Stories & Acceptance Criteria

## A. Customer-Facing (Public)

### US-01 --- View Services List

As a pet owner, I want to view available grooming services so that I can
choose the right service.

### Acceptance Criteria

Given I navigate to the Services page, when the page loads, then I see a
list of services.

Each service shows at minimum: name, price, and duration.

If there are no services available, then I see a user-friendly message
(e.g., "No services available at this time.").

If the services request fails, then I see an error message and a way to
retry.

### US-02 --- View Service Details

As a pet owner, I want to view details for a specific service so that I
can understand what's included.

### Acceptance Criteria

Given I select a service, when the service details page loads, then I
see the service's name, description, price, and duration.

If the service cannot be found (invalid or removed), then I see a "Not
Found" message.

### US-03 --- View Available Time Slots

As a pet owner, I want to see available time slots so that I can choose
an appointment time.

### Acceptance Criteria

Given I am on the Booking page, when I select a date, then I see a list
of time slots for that date.

Booked time slots are not selectable (or are shown as unavailable, or
not shown at all).

If no slots are available for the selected date, then I see a message
indicating no availability.

Note: "Available time slots" are based on business-defined time slots
and existing bookings.

### US-04 --- Book an Appointment (Auto-Confirmed)

As a pet owner, I want to book an appointment so that I can schedule
grooming services without calling.

### Acceptance Criteria

Required fields include: service, date, time, customer name, phone
number (for SMS confirmation), message (optional).

Client-side validation prevents submission when required fields are
missing or invalid.

Server-side validation enforces the same rules and rejects invalid
submissions.

Given valid booking information, when I submit the form, then:

the appointment is saved successfully, and

the booking is auto-confirmed, and

I see a confirmation message on-screen.

### US-05 --- Receive SMS Confirmation After Booking

As a pet owner, I want to receive a text confirmation so that I know my
appointment was confirmed.

### Acceptance Criteria

Given I submit a valid booking, when the booking is created
successfully, then an SMS confirmation is triggered to the phone number
provided.

If SMS sending fails, the booking remains confirmed, and the system
records/logs the SMS failure for admin visibility (or system logs), and
the user sees a non-blocking message (e.g., "Booking confirmed. SMS
confirmation may be delayed.").

### US-06 --- Send a Message (Contact Form)

As a pet owner, I want to send a message so that I can ask questions or
request more information.

### Acceptance Criteria

Required fields include: name, contact method (phone or email), and
message content.

Client-side validation prevents submission when required fields are
missing.

Server-side validation rejects invalid submissions.

Given valid information, when I submit the contact form, then the
message is saved and I see a success confirmation.

### US-07 --- View Testimonials

As a pet owner, I want to read testimonials so that I can feel confident
in the business.

### Acceptance Criteria

Given I navigate to the testimonials section/page, when it loads, then I
see a list of testimonials.

Each testimonial shows at minimum: customer name (or initials) and
testimonial text.

If no testimonials exist, the UI displays a user-friendly empty state.

## B. Admin (Protected)

### US-08 --- Admin Login

As an admin, I want to log in so that I can manage the website content
and appointments.

### Acceptance Criteria

Given I enter valid credentials, when I log in, then I am authenticated
and can access admin features.

Given I enter invalid credentials, then I see an error message and
remain unauthenticated.

Authentication uses JWT stored in an HttpOnly cookie.

### US-09 --- Admin Logout

As an admin, I want to log out so that the admin area is protected when
I'm finished.

### Acceptance Criteria

When I log out, my authentication session is cleared and I can no longer
access protected routes.

### US-10 --- Admin Manage Services (CRUD)

As an admin, I want to create, update, and delete services so that the
public site stays accurate.

### Acceptance Criteria

Given I am logged in, I can:

create a service with required fields (name, price, duration,
description),

update an existing service,

delete a service.

Invalid inputs are rejected with clear feedback (server-side
validation).

### US-11 --- Admin View Bookings

As an admin, I want to view confirmed bookings so that I can manage
appointments.

### Acceptance Criteria

Given I am logged in, when I open the bookings list, then I see all
bookings with service, date/time, and customer contact.

Bookings are stored as confirmed upon creation (auto-confirmed
workflow).

### US-12 --- Admin Create / Update / Delete Bookings

As an admin, I want to create, update, or delete bookings so that I can
accommodate non-tech-savvy customers, walk-ins, booking changes, or
cancellations.

### Acceptance Criteria

Given I am logged in, I can create a new booking by providing all
required fields:

service, date, time, customer name, phone, and email.

Admin-created bookings are auto-confirmed upon creation (same as client
created bookings).

The system prevents creating a booking for a date/time slot that is
already booked.

Given I am logged in, I can update booking details (as allowed).

Given I am logged in, I can delete a booking.

If a booking is deleted, the associated time slot becomes available
again.

When an admin creates a booking, an SMS confirmation is sent to the
customer (or document if you choose no-SMS --- but based on earlier, SMS
sends).

### US-13 --- Admin Manage Testimonials (CRUD)

As an admin, I want to create, update, and delete testimonials so that
the site reflects current customer feedback.

### Acceptance Criteria

Given I am logged in, I can create, update, and delete testimonials.

Invalid testimonial submissions are rejected by server-side validation.

### US-14 --- Admin View/Delete Messages

As an admin, I want to view and delete messages so that I can manage
customer inquiries.

### Acceptance Criteria

Given I am logged in, I can view a list of submitted messages.

Given I am logged in, I can delete messages.

## C. Non-Functional (Quality)

### US-15 --- Basic Reliability and Error Handling

As a user/admin, I want clear error handling so that I understand what
happened if something fails.

### Acceptance Criteria

Errors return user-friendly messages (frontend) and appropriate status
codes (backend).

Validation errors are specific and actionable (e.g., "Phone number is
required.").

Protected admin routes return unauthorized responses when not
authenticated.