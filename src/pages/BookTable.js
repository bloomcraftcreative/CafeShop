import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Calendar } from '../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { Coffee, CalendarIcon, Check } from 'lucide-react';
import { cafeInfo } from '../mockData';
import '../styles/cafe.css';
import { format } from 'date-fns';

const BookTable = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: null,
    time: '',
    guests: '2'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDateSelect = (date) => {
    setFormData({
      ...formData,
      date: date
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - save to browser storage
    const bookings = JSON.parse(localStorage.getItem('cafeBookings') || '[]');
    const newBooking = {
      ...formData,
      id: Date.now(),
      date: formData.date ? format(formData.date, 'PPP') : '',
      createdAt: new Date().toISOString()
    };
    bookings.push(newBooking);
    localStorage.setItem('cafeBookings', JSON.stringify(bookings));
    
    setIsSubmitted(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'
  ];

  if (isSubmitted) {
    return (
      <div className="book-page">
        <div className="success-container">
          <Card className="success-card">
            <div className="success-icon">
              <Check size={60} strokeWidth={2} />
            </div>
            <h2 className="success-title">Booking Confirmed!</h2>
            <p className="success-message">
              Thank you, {formData.name}! Your table for {formData.guests} guests has been reserved.
            </p>
            <p className="success-details">
              We'll see you on {formData.date ? format(formData.date, 'PPP') : ''} at {formData.time}
            </p>
            <p className="success-note">
              We've sent a confirmation to your phone number.
            </p>
            <div className="success-animation">
              <svg viewBox="0 0 100 100" className="celebration-svg">
                <circle cx="50" cy="50" r="3" fill="#FDBA3D" className="confetti c1" />
                <circle cx="50" cy="50" r="3" fill="#C26A5A" className="confetti c2" />
                <circle cx="50" cy="50" r="3" fill="#8ED1A3" className="confetti c3" />
                <circle cx="50" cy="50" r="3" fill="#FDBA3D" className="confetti c4" />
                <circle cx="50" cy="50" r="3" fill="#C26A5A" className="confetti c5" />
              </svg>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="book-page">
      {/* Header */}
      <header className="cafe-header">
        <div className="header-content">
          <div className="logo-section" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <Coffee className="logo-icon" />
            <span className="logo-text">{cafeInfo.name}</span>
          </div>
          <Button onClick={() => navigate('/')} className="btn-secondary-cafe">
            Back to Home
          </Button>
        </div>
      </header>

      <div className="book-container">
        <div className="book-content">
          <div className="book-header">
            <h1 className="book-title">Reserve Your Table</h1>
            <p className="book-subtitle">
              Join us for an authentic Indian café experience. We can't wait to serve you!
            </p>
          </div>

          <Card className="book-form-card">
            <form onSubmit={handleSubmit} className="book-form">
              <div className="form-group">
                <Label htmlFor="name" className="form-label">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <Label htmlFor="phone" className="form-label">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <Label className="form-label">Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        type="button"
                        className="date-picker-button"
                      >
                        <CalendarIcon size={18} />
                        {formData.date ? format(formData.date, 'PPP') : 'Pick a date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="calendar-popover">
                      <Calendar
                        mode="single"
                        selected={formData.date}
                        onSelect={handleDateSelect}
                        disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="form-group">
                  <Label htmlFor="time" className="form-label">Time</Label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="form-select"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <Label htmlFor="guests" className="form-label">Number of Guests</Label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  required
                  className="form-select"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              <Button type="submit" className="btn-primary-cafe btn-large btn-full">
                Confirm Reservation
              </Button>
            </form>
          </Card>

          <div className="book-info">
            <p className="book-info-text">
              For reservations of more than 8 guests or special requests, 
              please call us at <strong>{cafeInfo.phone}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
