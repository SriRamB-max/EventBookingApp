import React, { useState } from "react";

const EventBookingApp = () => {
  const [events] = useState([
    {
      id: 1,
      title: "Tech Conference 2025",
      date: "2025-09-15",
      time: "09:00 AM",
      location: "Convention Center",
      price: 2999,
      description:
        "Join industry leaders for the latest in technology trends and innovations.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop",
      availableSeats: 150,
      category: "Technology",
    },
    {
      id: 2,
      title: "Music Festival",
      date: "2025-10-22",
      time: "06:00 PM",
      location: "City Park",
      price: 5999,
      description:
        "Experience amazing live performances from top artists in a beautiful outdoor setting.",
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=200&fit=crop",
      availableSeats: 2000,
      category: "Music",
    },
    {
      id: 3,
      title: "Business Workshop",
      date: "2025-08-30",
      time: "10:00 AM",
      location: "Downtown Hotel",
      price: 1999,
      description:
        "Learn essential business skills and networking strategies from expert mentors.",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=200&fit=crop",
      availableSeats: 50,
      category: "Business",
    },
    {
      id: 4,
      title: "Art Exhibition",
      date: "2025-11-10",
      time: "02:00 PM",
      location: "Art Gallery",
      price: 2500,
      description:
        "Discover contemporary artworks from emerging and established artists.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
      availableSeats: 100,
      category: "Art",
    },
    {
      id: 5,
      title: "Tech Conference 2025",
      date: "2025-09-15",
      time: "09:00 AM",
      location: "Convention Center, Chennai",
      price: 2899,
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Join industry leaders for cutting-edge tech discussions and networking.",
      availableSeats: 500,
    },
    {
      id: 6,
      title: "Music Festival",
      date: "2025-10-20",
      time: "06:00 PM",
      location: "Marina Beach, Chennai",
      price: 4799,
      category: "Music",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Three days of amazing music performances by top artists.",
      availableSeats: 500,
    },
    {
      id: 7,
      title: "Food & Wine Expo",
      date: "2025-11-05",
      time: "12:00 PM",
      location: "Hotel Taj, Chennai",
      price: 3199,
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Discover culinary delights from renowned chefs and wine experts.",
      availableSeats: 100,
    },
    {
      id: 8,
      title: "Business Summit",
      date: "2025-12-10",
      time: "10:00 AM",
      location: "ITC Grand Chola, Chennai",
      price: 4000,
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Strategic insights and networking for business professionals.",
      availableSeats: 200,
    },
  ]);

  const [bookings, setBookings] = useState([]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentView, setCurrentView] = useState("events");

  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    tickets: 1,
  });

  const categories = ["All", "Technology", "Music", "Business", "Art"];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBookNow = (event) => {
    setSelectedEvent(event);
    setShowBookingModal(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      id: Date.now(),
      eventId: selectedEvent.id,
      eventTitle: selectedEvent.title,
      eventDate: selectedEvent.date,
      eventTime: selectedEvent.time,
      eventLocation: selectedEvent.location,
      ...bookingForm,
      bookingDate: new Date().toLocaleDateString(),
      totalPrice: selectedEvent.price * bookingForm.tickets,
    };

    setBookings([...bookings, newBooking]);
    setShowBookingModal(false);
    setBookingForm({ name: "", email: "", phone: "", tickets: 1 });
    alert("Booking confirmed successfully!");
  };

  const handleInputChange = (e) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value,
    });
  };

  const EventCard = ({ event }) => (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={event.image}
          className="card-img-top"
          alt={event.title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title">{event.title}</h5>
            <span className="badge bg-primary">{event.category}</span>
          </div>
          <p className="card-text text-muted small mb-2">{event.description}</p>
          <div className="mt-auto">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <small className="text-muted">
                <i className="bi bi-calendar me-1"></i>
                {event.date}
              </small>
              <small className="text-muted">
                <i className="bi bi-clock me-1"></i>
                {event.time}
              </small>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <small className="text-muted">
                <i className="bi bi-geo-alt me-1"></i>
                {event.location}
              </small>
              <small className="text-success">
                {event.availableSeats} seats left
              </small>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="h5 text-primary mb-0">₹{event.price}</span>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => handleBookNow(event)}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const BookingModal = () => (
    <div
      className={`modal fade ${showBookingModal ? "show d-block" : ""}`}
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Book Event: {selectedEvent?.title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowBookingModal(false)}
            ></button>
          </div>
          <div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={bookingForm.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={bookingForm.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={bookingForm.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Number of Tickets</label>
                <select
                  className="form-select"
                  name="tickets"
                  value={bookingForm.tickets}
                  onChange={handleInputChange}
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <div className="alert alert-info">
                <strong>
                  Total: ₹
                  {selectedEvent
                    ? selectedEvent.price * bookingForm.tickets
                    : 0}
                </strong>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowBookingModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleBookingSubmit}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const MyBookings = () => (
    <div>
      <h2 className="mb-4">My Bookings</h2>
      {bookings.length === 0 ? (
        <div className="alert alert-info">
          <h4>No bookings yet</h4>
          <p>
            You haven't made any bookings. Browse events and book your
            favorites!
          </p>
          <button
            className="btn btn-primary"
            onClick={() => setCurrentView("events")}
          >
            Browse Events
          </button>
        </div>
      ) : (
        <div className="row">
          {bookings.map((booking) => (
            <div key={booking.id} className="col-md-6 mb-4">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <h6 className="mb-0">{booking.eventTitle}</h6>
                  <span className="badge bg-success">Confirmed</span>
                </div>
                <div className="card-body">
                  <p>
                    <strong>Date:</strong> {booking.eventDate}
                  </p>
                  <p>
                    <strong>Time:</strong> {booking.eventTime}
                  </p>
                  <p>
                    <strong>Location:</strong> {booking.eventLocation}
                  </p>
                  <p>
                    <strong>Tickets:</strong> {booking.tickets}
                  </p>
                  <p>
                    <strong>Total Paid:</strong> ${booking.totalPrice}
                  </p>
                  <p>
                    <strong>Booked on:</strong> {booking.bookingDate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Bootstrap CSS CDN */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
        rel="stylesheet"
      />

      <div className="container-fluid">
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
          <div className="container">
            <a className="navbar-brand fw-bold" href="#">
              <i className="bi bi-calendar-event me-2"></i>EventHub
            </a>
            <div className="navbar-nav ms-auto">
              <button
                className={`btn ${
                  currentView === "events" ? "btn-light" : "btn-outline-light"
                } me-2`}
                onClick={() => setCurrentView("events")}
              >
                <i className="bi bi-calendar3 me-1"></i>Events
              </button>
              <button
                className={`btn ${
                  currentView === "bookings" ? "btn-light" : "btn-outline-light"
                }`}
                onClick={() => setCurrentView("bookings")}
              >
                <i className="bi bi-ticket-perforated me-1"></i>My Bookings (
                {bookings.length})
              </button>
            </div>
          </div>
        </nav>

        <div className="container">
          {currentView === "events" ? (
            <>
              
              {/* Hero Section */}
              <div className="bg-primary text-white py-5">
                <div className="container text-center">
                  <h1 className="display-4 fw-bold mb-3">
                    Discover Amazing Events
                  </h1>
                  <p className="lead mb-4">
                    Book tickets for the best events in Chennai and beyond
                  </p>
                </div>
              </div>
              
              {/* Stats Section */}
              <div className="bg-white py-4">
                <div className="container">
                  <div className="row text-center">
                    <div className="col-md-3 col-sm-6 mb-3">
                      <div className="border-end">
                        <h3 className="text-primary fw-bold">
                          {events.length}+
                        </h3>
                        <p className="text-muted mb-0">Events Available</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3">
                      <div className="border-end">
                        <h3 className="text-primary fw-bold">
                          {bookings.length}
                        </h3>
                        <p className="text-muted mb-0">Bookings Made</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3">
                      <div className="border-end">
                        <h3 className="text-primary fw-bold">4.9★</h3>
                        <p className="text-muted mb-0">Customer Rating</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3">
                      <h3 className="text-primary fw-bold">24/7</h3>
                      <p className="text-muted mb-0">Support Available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search and Filter */}
              <div className="row my-4">
                <div className="col-md-8">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-search"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search events or locations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === "All" ? "All Categories" : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Events Header */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Upcoming Events</h2>
                <span className="text-muted">
                  {filteredEvents.length} events found
                </span>
              </div>

              {/* Events Grid */}
              <div className="row">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>

              {filteredEvents.length === 0 && (
                <div className="alert alert-warning text-center">
                  <h4>No events found</h4>
                  <p>Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </>
          ) : (
            <MyBookings />
          )}
        </div>

        {/* Booking Modal */}
        {showBookingModal && <BookingModal />}
      </div>

      {/* Bootstrap JS CDN */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default EventBookingApp;
