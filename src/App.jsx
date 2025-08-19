

import React, { useState } from 'react';

const EventBookingApp = () => {
  const [events] = useState([
    {
      id: 1,
      title: "Tech Conference 2025",
      date: "2025-09-15",
      time: "09:00 AM",
      location: "Convention Center",
      price: 999,
      description: "Join industry leaders for the latest in technology trends and innovations.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop",
      availableSeats: 150,
      category: "Technology",
      venue: {
        sections: [
          { name: "VIP", rows: 3, seatsPerRow: 10, priceMultiplier: 2.0, color: "gold" },
          { name: "Premium", rows: 5, seatsPerRow: 12, priceMultiplier: 1.5, color: "silver" },
          { name: "Standard", rows: 8, seatsPerRow: 15, priceMultiplier: 1.0, color: "lightblue" }
        ]
      }
    },
    {
      id: 2,
      title: "Music Festival",
      date: "2025-10-22",
      time: "06:00 PM",
      location: "City Park",
      price: 899,
      description: "Experience amazing live performances from top artists in a beautiful outdoor setting.",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=200&fit=crop",
      availableSeats: 2000,
      category: "Music",
      venue: {
        sections: [
          { name: "Front Stage", rows: 4, seatsPerRow: 20, priceMultiplier: 2.5, color: "gold" },
          { name: "General", rows: 15, seatsPerRow: 25, priceMultiplier: 1.0, color: "lightgreen" },
          { name: "Lawn", rows: 10, seatsPerRow: 30, priceMultiplier: 0.7, color: "lightgray" }
        ]
      }
    },
    {
      id: 3,
      title: "Business Workshop",
      date: "2025-08-30",
      time: "10:00 AM",
      location: "Downtown Hotel",
      price: 799,
      description: "Learn essential business skills and networking strategies from expert mentors.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=200&fit=crop",
      availableSeats: 50,
      category: "Business",
      venue: {
        sections: [
          { name: "Executive", rows: 2, seatsPerRow: 8, priceMultiplier: 1.8, color: "gold" },
          { name: "Standard", rows: 4, seatsPerRow: 10, priceMultiplier: 1.0, color: "lightblue" }
        ]
      }
    },
    {
      id: 4,
      title: "Art Exhibition",
      date: "2025-11-10",
      time: "02:00 PM",
      location: "Art Gallery",
      price: 599,
      description: "Discover contemporary artworks from emerging and established artists.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
      availableSeats: 100,
      category: "Art",
      venue: {
        sections: [
          { name: "Gallery Floor", rows: 8, seatsPerRow: 12, priceMultiplier: 1.0, color: "lightcoral" }
        ]
      }
    },
    {
      id: 5,
      title: "Tech Conference 2025",
      date: "2025-09-15",
      time: "09:00 AM",
      location: "Convention Center, Chennai",
      price: 1299,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Join industry leaders for cutting-edge tech discussions and networking.",
      availableSeats: 150,
      venue: {
        sections: [
          { name: "VIP", rows: 3, seatsPerRow: 10, priceMultiplier: 2.0, color: "gold" },
          { name: "Premium", rows: 5, seatsPerRow: 12, priceMultiplier: 1.5, color: "silver" },
          { name: "Standard", rows: 8, seatsPerRow: 15, priceMultiplier: 1.0, color: "lightblue" }
        ]
      }
    },
    {
      id: 6,
      title: "Music Festival",
      date: "2025-10-20",
      time: "06:00 PM",
      location: "Marina Beach, Chennai",
      price: 1599,
      category: "Music",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Three days of amazing music performances by top artists.",
      availableSeats: 500,
      venue: {
        sections: [
          { name: "Front Stage", rows: 4, seatsPerRow: 20, priceMultiplier: 2.5, color: "gold" },
          { name: "General", rows: 15, seatsPerRow: 25, priceMultiplier: 1.0, color: "lightgreen" },
          { name: "Lawn", rows: 10, seatsPerRow: 30, priceMultiplier: 0.7, color: "lightgray" }
        ]
      }
    },
    
    {
      id: 7,
      title: "Business Summit",
      date: "2025-12-10",
      time: "10:00 AM",
      location: "ITC Grand Chola, Chennai",
      price: 99,
      category: "Business",
      image: "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Strategic insights and networking for business professionals.",
      availableSeats: 200,
      venue: {
        sections: [
          { name: "Executive", rows: 2, seatsPerRow: 8, priceMultiplier: 1.8, color: "gold" },
          { name: "Standard", rows: 4, seatsPerRow: 10, priceMultiplier: 1.0, color: "lightblue" }
        ]
      }
    }
  ]);

  const [bookings, setBookings] = useState([]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showSeatSelection, setShowSeatSelection] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentView, setCurrentView] = useState('events');

  // Seat selection state
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState({});

  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    tickets: 1
  });

  const categories = ['All', 'Technology', 'Music', 'Business', 'Art'];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Generate QR Code data (simple implementation)
  const generateQRData = (booking) => {
    const qrData = {
      bookingId: booking.id,
      eventId: booking.eventId,
      eventTitle: booking.eventTitle,
      customerName: booking.name,
      seats: booking.selectedSeats,
      date: booking.eventDate,
      time: booking.eventTime
    };
    return btoa(JSON.stringify(qrData));
  };

  // Generate QR Code SVG
  const generateQRCode = (data) => {
    // Simple QR-like pattern for demonstration
    const size = 200;
    const modules = 21;
    const moduleSize = size / modules;
    
    let pattern = '';
    for (let i = 0; i < modules; i++) {
      for (let j = 0; j < modules; j++) {
        // Create a pseudo-random pattern based on data
        const hash = (data.charCodeAt((i * modules + j) % data.length) + i + j) % 3;
        if (hash === 0) {
          pattern += `<rect x="${j * moduleSize}" y="${i * moduleSize}" width="${moduleSize}" height="${moduleSize}" fill="#000"/>`;
        }
      }
    }

    return `
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        <rect width="${size}" height="${size}" fill="#fff"/>
        ${pattern}
        <!-- Corner squares -->
        <rect x="0" y="0" width="${moduleSize * 7}" height="${moduleSize * 7}" fill="#000"/>
        <rect x="${moduleSize}" y="${moduleSize}" width="${moduleSize * 5}" height="${moduleSize * 5}" fill="#fff"/>
        <rect x="${moduleSize * 2}" y="${moduleSize * 2}" width="${moduleSize * 3}" height="${moduleSize * 3}" fill="#000"/>
        
        <rect x="${size - moduleSize * 7}" y="0" width="${moduleSize * 7}" height="${moduleSize * 7}" fill="#000"/>
        <rect x="${size - moduleSize * 6}" y="${moduleSize}" width="${moduleSize * 5}" height="${moduleSize * 5}" fill="#fff"/>
        <rect x="${size - moduleSize * 5}" y="${moduleSize * 2}" width="${moduleSize * 3}" height="${moduleSize * 3}" fill="#000"/>
        
        <rect x="0" y="${size - moduleSize * 7}" width="${moduleSize * 7}" height="${moduleSize * 7}" fill="#000"/>
        <rect x="${moduleSize}" y="${size - moduleSize * 6}" width="${moduleSize * 5}" height="${moduleSize * 5}" fill="#fff"/>
        <rect x="${moduleSize * 2}" y="${size - moduleSize * 5}" width="${moduleSize * 3}" height="${moduleSize * 3}" fill="#000"/>
      </svg>
    `;
  };

  const handleBookNow = (event) => {
    setSelectedEvent(event);
    setSelectedSeats([]);
    setShowSeatSelection(true);
  };

  const proceedToBooking = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat');
      return;
    }
    setShowSeatSelection(false);
    setShowBookingModal(true);
  };

  const handleSeatClick = (sectionName, rowIndex, seatIndex) => {
    const seatId = `${sectionName}-${rowIndex}-${seatIndex}`;
    const eventId = selectedEvent.id;
    
    // Check if seat is already booked
    if (bookedSeats[eventId] && bookedSeats[eventId].includes(seatId)) {
      return;
    }

    if (selectedSeats.find(seat => seat.id === seatId)) {
      // Remove seat if already selected
      setSelectedSeats(selectedSeats.filter(seat => seat.id !== seatId));
    } else {
      // Add seat if not selected
      const section = selectedEvent.venue.sections.find(s => s.name === sectionName);
      const seatPrice = selectedEvent.price * section.priceMultiplier;
      
      setSelectedSeats([...selectedSeats, {
        id: seatId,
        section: sectionName,
        row: rowIndex + 1,
        seat: seatIndex + 1,
        price: seatPrice
      }]);
    }
  };

  const getTotalPrice = () => {
    return selectedSeats.reduce((total, seat) => total + seat.price, 0);
  };

  const handleBookingSubmit = () => {
    if (!bookingForm.name || !bookingForm.email || !bookingForm.phone) {
      alert('Please fill in all required fields');
      return;
    }
    
    const newBooking = {
      id: Date.now(),
      eventId: selectedEvent.id,
      eventTitle: selectedEvent.title,
      eventDate: selectedEvent.date,
      eventTime: selectedEvent.time,
      eventLocation: selectedEvent.location,
      selectedSeats: selectedSeats,
      ...bookingForm,
      bookingDate: new Date().toLocaleDateString(),
      totalPrice: getTotalPrice(),
      qrCode: null // Will be generated after booking
    };

    // Generate QR code
    newBooking.qrCode = generateQRData(newBooking);

    // Mark seats as booked
    const eventId = selectedEvent.id;
    const seatIds = selectedSeats.map(seat => seat.id);
    setBookedSeats(prev => ({
      ...prev,
      [eventId]: [...(prev[eventId] || []), ...seatIds]
    }));

    setBookings([...bookings, newBooking]);
    setShowBookingModal(false);
    setBookingForm({ name: '', email: '', phone: '', tickets: 1 });
    setSelectedSeats([]);
    alert('Booking confirmed successfully! Your QR code has been generated.');
  };

  const handleInputChange = (e) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value
    });
  };

  const showQRCode = (booking) => {
    setSelectedBooking(booking);
    setShowQRModal(true);
  };

  const SeatMap = ({ event }) => (
    <div className="seat-map">
      <div className="text-center mb-4">
        <h5>Select Your Seats</h5>
        <div className="stage bg-dark text-white p-2 rounded mb-4">
          <i className="bi bi-display"></i> STAGE / FRONT
        </div>
      </div>

      {event.venue.sections.map((section) => (
        <div key={section.name} className="section mb-4">
          <h6 className="text-center mb-3">
            {section.name} Section - ₹{(event.price * section.priceMultiplier).toFixed(2)} per seat
          </h6>
          <div className="rows">
            {Array.from({ length: section.rows }, (_, rowIndex) => (
              <div key={rowIndex} className="row-seats d-flex justify-content-center mb-2">
                <span className="row-label me-2 fw-bold">{String.fromCharCode(65 + rowIndex)}</span>
                {Array.from({ length: section.seatsPerRow }, (_, seatIndex) => {
                  const seatId = `${section.name}-${rowIndex}-${seatIndex}`;
                  const isSelected = selectedSeats.find(seat => seat.id === seatId);
                  const isBooked = bookedSeats[event.id] && bookedSeats[event.id].includes(seatId);
                  
                  return (
                    <button
                      key={seatIndex}
                      className={`seat btn btn-sm m-1 ${
                        isBooked ? 'btn-danger' : 
                        isSelected ? 'btn-success' : 'btn-outline-primary'
                      }`}
                      style={{ 
                        width: '30px', 
                        height: '30px',
                        backgroundColor: isBooked ? '#dc3545' : 
                                       isSelected ? '#198754' : section.color,
                        border: isSelected ? '2px solid #198754' : '1px solid #ccc'
                      }}
                      onClick={() => handleSeatClick(section.name, rowIndex, seatIndex)}
                      disabled={isBooked}
                      title={`${section.name} ${String.fromCharCode(65 + rowIndex)}${seatIndex + 1} - $${(event.price * section.priceMultiplier).toFixed(2)}`}
                    >
                      {seatIndex + 1}
                    </button>
                  );
                })}
                <span className="row-label ms-2 fw-bold">{String.fromCharCode(65 + rowIndex)}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="legend d-flex justify-content-center mt-4">
        <div className="me-3">
          <button className="btn btn-sm me-1" style={{ backgroundColor: 'lightblue' }}></button>
          Available
        </div>
        <div className="me-3">
          <button className="btn btn-success btn-sm me-1"></button>
          Selected
        </div>
        <div>
          <button className="btn btn-danger btn-sm me-1"></button>
          Booked
        </div>
      </div>

      <div className="selected-seats-summary mt-4 p-3 bg-light rounded">
        <h6>Selected Seats: {selectedSeats.length}</h6>
        {selectedSeats.map((seat) => (
          <div key={seat.id} className="d-flex justify-content-between">
            <span>{seat.section} {String.fromCharCode(64 + seat.row)}{seat.seat}</span>
            <span>${seat.price.toFixed(2)}</span>
          </div>
        ))}
        <hr />
        <div className="d-flex justify-content-between fw-bold">
          <span>Total:</span>
          <span>${getTotalPrice().toFixed(2)}</span>
        </div>
      </div>
    </div>
  );

  const EventCard = ({ event }) => (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={event.image} className="card-img-top" alt={event.title} style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title">{event.title}</h5>
            <span className="badge bg-primary">{event.category}</span>
          </div>
          <p className="card-text text-muted small mb-2">{event.description}</p>
          <div className="mt-auto">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <small className="text-muted">
                <i className="bi bi-calendar me-1"></i>{event.date}
              </small>
              <small className="text-muted">
                <i className="bi bi-clock me-1"></i>{event.time}
              </small>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <small className="text-muted">
                <i className="bi bi-geo-alt me-1"></i>{event.location}
              </small>
              <small className="text-success">
                {event.availableSeats} seats left
              </small>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="h6 text-primary mb-0">From ₹{event.price}</span>
              <button 
                className="btn btn-primary btn-sm"
                onClick={() => handleBookNow(event)}
              >
                <i className="bi bi-ticket me-1"></i>Select Seats
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SeatSelectionModal = () => (
    <div className={`modal fade ${showSeatSelection ? 'show d-block' : ''}`} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <i className="bi bi-ticket-perforated me-2"></i>
              Select Seats - {selectedEvent?.title}
            </h5>
            <button 
              type="button" 
              className="btn-close"
              onClick={() => setShowSeatSelection(false)}
            ></button>
          </div>
          <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
            {selectedEvent && <SeatMap event={selectedEvent} />}
          </div>
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => setShowSeatSelection(false)}
            >
              Cancel
            </button>
            <button 
              type="button"
              className="btn btn-primary"
              onClick={proceedToBooking}
              disabled={selectedSeats.length === 0}
            >
              Proceed to Booking ({selectedSeats.length} seats)
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const BookingModal = () => {
    if (!showBookingModal) return null;
    
    return (
      <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Complete Booking: {selectedEvent?.title}</h5>
              <button 
                type="button" 
                className="btn-close"
                onClick={() => setShowBookingModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <div className="alert alert-info">
                <h6>Selected Seats:</h6>
                {selectedSeats.map((seat) => (
                  <div key={seat.id}>
                    {seat.section} Section - Row {String.fromCharCode(64 + seat.row)} Seat {seat.seat} (₹{seat.price.toFixed(2)})
                  </div>
                ))}
                <hr />
                <strong>Total: ₹{getTotalPrice().toFixed(2)}</strong>
              </div>
              
              <div className="mb-3">
                <label htmlFor="customerName" className="form-label">Full Name *</label>
                <input
                  id="customerName"
                  type="text"
                  className="form-control"
                  name="name"
                  value={bookingForm.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="customerEmail" className="form-label">Email *</label>
                <input
                  id="customerEmail"
                  type="email"
                  className="form-control"
                  name="email"
                  value={bookingForm.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  autoComplete="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="customerPhone" className="form-label">Phone *</label>
                <input
                  id="customerPhone"
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={bookingForm.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  autoComplete="tel"
                />
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
                disabled={!bookingForm.name || !bookingForm.email || !bookingForm.phone}
              >
                <i className="bi bi-credit-card me-1"></i>
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const QRModal = () => (
    <div className={`modal fade ${showQRModal ? 'show d-block' : ''}`} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <i className="bi bi-qr-code me-2"></i>
              Entry QR Code
            </h5>
            <button 
              type="button" 
              className="btn-close"
              onClick={() => setShowQRModal(false)}
            ></button>
          </div>
          <div className="modal-body text-center">
            {selectedBooking && (
              <>
                <div className="mb-3">
                  <h6>{selectedBooking.eventTitle}</h6>
                  <p className="text-muted">{selectedBooking.eventDate} at {selectedBooking.eventTime}</p>
                </div>
                
                <div className="qr-code-container d-flex justify-content-center mb-3">
                  <div dangerouslySetInnerHTML={{ 
                    __html: generateQRCode(selectedBooking.qrCode) 
                  }} />
                </div>
                
                <div className="booking-details text-start">
                  <h6>Booking Details:</h6>
                  <p><strong>Booking ID:</strong> {selectedBooking.id}</p>
                  <p><strong>Customer:</strong> {selectedBooking.name}</p>
                  <p><strong>Seats:</strong></p>
                  {selectedBooking.selectedSeats.map((seat) => (
                    <div key={seat.id} className="ms-3">
                      {seat.section} - Row {String.fromCharCode(64 + seat.row)} Seat {seat.seat}
                    </div>
                  ))}
                </div>
                
                <div className="alert alert-warning">
                  <i className="bi bi-info-circle me-2"></i>
                  Show this QR code at the venue entrance for quick check-in
                </div>
              </>
            )}
          </div>
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => setShowQRModal(false)}
            >
              Close
            </button>
            <button 
              type="button"
              className="btn btn-primary"
              onClick={() => window.print()}
            >
              <i className="bi bi-printer me-1"></i>
              Print Ticket
            </button>
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
          <p>You haven't made any bookings. Browse events and book your favorites!</p>
          <button 
            className="btn btn-primary"
            onClick={() => setCurrentView('events')}
          >
            Browse Events
          </button>
        </div>
      ) : (
        <div className="row">
          {bookings.map(booking => (
            <div key={booking.id} className="col-md-6 mb-4">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <h6 className="mb-0">{booking.eventTitle}</h6>
                  <span className="badge bg-success">Confirmed</span>
                </div>
                <div className="card-body">
                  <p><strong>Date:</strong> {booking.eventDate}</p>
                  <p><strong>Time:</strong> {booking.eventTime}</p>
                  <p><strong>Location:</strong> {booking.eventLocation}</p>
                  
                  <div className="mb-2">
                    <strong>Seats ({booking.selectedSeats.length}):</strong>
                    {booking.selectedSeats.map((seat) => (
                      <div key={seat.id} className="ms-3 small">
                        {seat.section} - Row {String.fromCharCode(64 + seat.row)} Seat {seat.seat}
                      </div>
                    ))}
                  </div>
                  
                  <p><strong>Total Paid:</strong> ${booking.totalPrice.toFixed(2)}</p>
                  <p><strong>Booked on:</strong> {booking.bookingDate}</p>
                  
                  <div className="d-flex gap-2">
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => showQRCode(booking)}
                    >
                      <i className="bi bi-qr-code me-1"></i>
                      Show QR Code
                    </button>
                    <button 
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => window.print()}
                    >
                      <i className="bi bi-printer me-1"></i>
                      Print
                    </button>
                  </div>
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
              <i className="bi bi-calendar-event me-2"></i>EventHub Pro
            </a>
            <div className="navbar-nav ms-auto">
              <button
                className={`btn ${currentView === 'events' ? 'btn-light' : 'btn-outline-light'} me-2`}
                onClick={() => setCurrentView('events')}
              >
                <i className="bi bi-calendar3 me-1"></i>Events
              </button>
              <button
                className={`btn ${currentView === 'bookings' ? 'btn-light' : 'btn-outline-light'}`}
                onClick={() => setCurrentView('bookings')}
              >
                <i className="bi bi-ticket-perforated me-1"></i>My Tickets ({bookings.length})
              </button>
            </div>
          </div>
        </nav>

        <div className="container">
          {currentView === 'events' ? (
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
                <span className="text-muted">{filteredEvents.length} events found</span>
              </div>

              {/* Events Grid */}
              <div className="row">
                {filteredEvents.map(event => (
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

        {/* Modals */}
        {showSeatSelection && <SeatSelectionModal />}
        {showBookingModal && <BookingModal />}
        {showQRModal && <QRModal />}
      </div>

      {/* Bootstrap JS CDN */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default EventBookingApp;