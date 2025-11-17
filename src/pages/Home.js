import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { featuredItems, menuItems, testimonials, cafeInfo } from '../mockData';
import { Coffee, MapPin, Phone, Clock, Star } from 'lucide-react';
import '../styles/cafe.css';

const Home = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="cafe-page">
      {/* Header */}
      <header className="cafe-header">
        <div className="header-content">
          <div className="logo-section">
            <Coffee className="logo-icon" />
            <span className="logo-text">{cafeInfo.name}</span>
          </div>
          <nav className="nav-links">
            <a href="#menu" className="nav-link">Menu</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#location" className="nav-link">Location</a>
            <Button 
              onClick={() => navigate('/book')} 
              className="btn-primary-cafe"
            >
              Book a Table
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section with SVG */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-announcement">
              <span className="announcement-dot"></span>
              <span>Authentic Indian Café Experience</span>
            </div>
            <h1 className="hero-title">{cafeInfo.tagline}</h1>
            <p className="hero-subtitle">
              Experience the warmth of Indian hospitality with every cup. 
              Traditional flavors, modern comfort.
            </p>
            <div className="hero-cta">
              <Button 
                onClick={() => navigate('/book')} 
                className="btn-primary-cafe btn-large"
              >
                Book a Table Now
              </Button>
              <Button 
                onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary-cafe btn-large"
              >
                View Menu
              </Button>
            </div>
          </div>
          
          {/* SVG Illustration */}
          <div className="hero-illustration">
            <svg viewBox="0 0 400 400" className="kulhad-svg">
              {/* Decorative background circle */}
              <circle cx="200" cy="200" r="160" fill="url(#bgGradient)" opacity="0.15" />
              
              <defs>
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FDBA3D" />
                  <stop offset="100%" stopColor="#C26A5A" />
                </linearGradient>
                <linearGradient id="cupGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#C26A5A" />
                  <stop offset="50%" stopColor="#A56B42" />
                  <stop offset="100%" stopColor="#C26A5A" />
                </linearGradient>
                <linearGradient id="chaiGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#D4885F" />
                  <stop offset="100%" stopColor="#A56B42" />
                </linearGradient>
                <filter id="shadow">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.2"/>
                </filter>
              </defs>
              
              {/* Modern steam waves */}
              <g opacity="0.6">
                <path 
                  d="M180,80 Q175,60 180,40 T180,20" 
                  stroke="url(#bgGradient)" 
                  strokeWidth="3" 
                  fill="none" 
                  strokeLinecap="round"
                  className="steam-line steam-1"
                />
                <path 
                  d="M200,85 Q195,65 200,45 T200,25" 
                  stroke="url(#bgGradient)" 
                  strokeWidth="3" 
                  fill="none" 
                  strokeLinecap="round"
                  className="steam-line steam-2"
                />
                <path 
                  d="M220,80 Q225,60 220,40 T220,20" 
                  stroke="url(#bgGradient)" 
                  strokeWidth="3" 
                  fill="none" 
                  strokeLinecap="round"
                  className="steam-line steam-3"
                />
              </g>
              
              {/* Modern minimalist kulhad */}
              <g filter="url(#shadow)">
                {/* Cup body with gradient */}
                <path 
                  d="M145,165 L155,270 Q155,285 200,285 Q245,285 245,270 L255,165 Z" 
                  fill="url(#cupGradient)"
                  stroke="none"
                />
                
                {/* Cup rim */}
                <ellipse cx="200" cy="165" rx="55" ry="12" fill="#C26A5A" />
                <ellipse cx="200" cy="163" rx="55" ry="10" fill="#D89877" />
                
                {/* Chai liquid with gradient */}
                <ellipse cx="200" cy="170" rx="50" ry="10" fill="url(#chaiGradient)" />
                
                {/* Subtle highlight */}
                <path 
                  d="M160,180 Q200,185 240,180" 
                  stroke="rgba(255,255,255,0.3)" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeLinecap="round"
                />
              </g>
              
              {/* Modern geometric saucer */}
              <g opacity="0.9">
                <ellipse cx="200" cy="295" rx="75" ry="10" fill="#F5E9D6" />
                <ellipse cx="200" cy="293" rx="70" ry="8" fill="#FAF8F4" />
              </g>
              
              {/* Decorative modern leaves */}
              <g opacity="0.7">
                <path 
                  d="M290,150 Q300,140 295,125 L290,130 Q285,140 290,150" 
                  fill="#8ED1A3"
                  className="floating-leaf leaf-1"
                />
                <circle cx="295" cy="130" r="8" fill="#8ED1A3" opacity="0.6" className="floating-leaf leaf-1" />
                
                <path 
                  d="M110,320 Q100,310 105,295 L110,300 Q115,310 110,320" 
                  fill="#8ED1A3"
                  className="floating-leaf leaf-2"
                />
                <circle cx="105" cy="300" r="8" fill="#8ED1A3" opacity="0.6" className="floating-leaf leaf-2" />
              </g>
              
              {/* Decorative spice elements - modern dots */}
              <circle cx="320" cy="250" r="4" fill="#FDBA3D" opacity="0.6" className="floating-leaf leaf-1" />
              <circle cx="330" cy="270" r="3" fill="#C26A5A" opacity="0.5" className="floating-leaf leaf-2" />
              <circle cx="80" cy="200" r="4" fill="#8ED1A3" opacity="0.6" className="floating-leaf leaf-1" />
              <circle cx="70" cy="220" r="3" fill="#FDBA3D" opacity="0.5" className="floating-leaf leaf-2" />
            </svg>
          </div>
        </div>
        
        {/* Decorative patterns */}
        <div className="hero-pattern hero-pattern-left"></div>
        <div className="hero-pattern hero-pattern-right"></div>
      </section>

      {/* Featured Items */}
      <section className="featured-section" id="featured">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Specialties</h2>
            <p className="section-subtitle">Handcrafted with love, served with warmth</p>
          </div>
          
          <div className="featured-grid">
            {featuredItems.map((item, index) => (
              <Card key={item.id} className="featured-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="featured-card-icon">
                  <Coffee size={40} strokeWidth={1.5} />
                </div>
                <h3 className="featured-card-title">{item.name}</h3>
                <p className="featured-card-description">{item.description}</p>
                <div className="featured-card-footer">
                  <span className="price">₹{item.price}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="section-container">
          <div className="about-content">
            <div className="about-illustration">
              <svg viewBox="0 0 300 300" className="storefront-svg">
                <defs>
                  <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FAF8F4" />
                    <stop offset="100%" stopColor="#F5E9D6" />
                  </linearGradient>
                  <linearGradient id="awningGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#C26A5A" />
                    <stop offset="100%" stopColor="#A56B42" />
                  </linearGradient>
                  <filter id="softShadow">
                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15"/>
                  </filter>
                </defs>
                
                {/* Background elements - clouds */}
                <circle cx="50" cy="40" r="20" fill="#FAF8F4" opacity="0.3" />
                <circle cx="250" cy="50" r="25" fill="#FAF8F4" opacity="0.3" />
                
                {/* Modern building */}
                <rect x="60" y="100" width="180" height="160" rx="8" fill="url(#buildingGradient)" filter="url(#softShadow)" />
                
                {/* Stylish awning */}
                <path 
                  d="M50,120 Q150,100 250,120 L240,140 Q150,120 60,140 Z" 
                  fill="url(#awningGradient)" 
                  opacity="0.9"
                />
                
                {/* Awning stripes - modern */}
                <path d="M80,122 L75,138" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
                <path d="M120,117 L115,133" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
                <path d="M160,115 L155,131" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
                <path d="M200,117 L195,133" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
                
                {/* Large window with frames */}
                <rect x="75" y="150" width="70" height="90" rx="4" fill="rgba(141, 237, 163, 0.2)" stroke="#8ED1A3" strokeWidth="2" />
                <line x1="110" y1="150" x2="110" y2="240" stroke="#8ED1A3" strokeWidth="2" />
                <line x1="75" y1="195" x2="145" y2="195" stroke="#8ED1A3" strokeWidth="2" />
                
                {/* Modern door */}
                <rect x="165" y="180" width="60" height="80" rx="4" fill="#A56B42" stroke="#3C2F28" strokeWidth="2" />
                <circle cx="210" cy="220" r="4" fill="#FDBA3D" />
                <rect x="175" y="190" width="15" height="25" rx="2" fill="rgba(255,255,255,0.2)" />
                
                {/* Decorative coffee sign */}
                <circle cx="220" cy="165" r="15" fill="#FDBA3D" opacity="0.9" />
                <text x="220" y="170" textAnchor="middle" fill="#3C2F28" fontSize="18" fontWeight="bold">☕</text>
                
                {/* Ground/sidewalk */}
                <rect x="40" y="260" width="220" height="8" fill="#F5E9D6" opacity="0.5" />
                
                {/* Decorative potted plants */}
                <ellipse cx="245" cy="250" rx="12" ry="8" fill="#C26A5A" />
                <path d="M240,235 Q245,225 250,235" fill="#8ED1A3" />
                <path d="M235,240 Q245,230 255,240" fill="#8ED1A3" opacity="0.7" />
                
                <ellipse cx="55" cy="250" rx="12" ry="8" fill="#C26A5A" />
                <path d="M50,235 Q55,225 60,235" fill="#8ED1A3" />
                <path d="M45,240 Q55,230 65,240" fill="#8ED1A3" opacity="0.7" />
              </svg>
            </div>
            
            <div className="about-text">
              <h2 className="section-title">Our Story</h2>
              <p className="about-paragraph">
                Born from a passion for authentic Indian flavors and warm hospitality, 
                Chai & Soul brings together the best of traditional café culture with 
                modern comfort.
              </p>
              <p className="about-paragraph">
                Every cup of chai is brewed with hand-picked spices, every snack is 
                prepared fresh, and every guest is treated like family. We believe in 
                the power of good food and great conversations.
              </p>
              <p className="about-paragraph">
                Located in the heart of Thane, we're your neighborhood spot for 
                catching up with friends, working remotely, or simply enjoying a 
                peaceful moment with your favorite beverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="menu-section" id="menu">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Full Menu</h2>
            <p className="section-subtitle">Explore our complete selection</p>
          </div>
          
          <div className="menu-categories">
            <div className="menu-category">
              <h3 className="category-title">Beverages</h3>
              <div className="menu-grid">
                {menuItems.filter(item => item.category === 'beverages').map(item => (
                  <div key={item.id} className="menu-item">
                    <div className="menu-item-header">
                      <h4 className="menu-item-name">{item.name}</h4>
                      <span className="menu-item-price">₹{item.price}</span>
                    </div>
                    <p className="menu-item-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="menu-category">
              <h3 className="category-title">Snacks</h3>
              <div className="menu-grid">
                {menuItems.filter(item => item.category === 'snacks').map(item => (
                  <div key={item.id} className="menu-item">
                    <div className="menu-item-header">
                      <h4 className="menu-item-name">{item.name}</h4>
                      <span className="menu-item-price">₹{item.price}</span>
                    </div>
                    <p className="menu-item-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="menu-category">
              <h3 className="category-title">Desserts</h3>
              <div className="menu-grid">
                {menuItems.filter(item => item.category === 'desserts').map(item => (
                  <div key={item.id} className="menu-item">
                    <div className="menu-item-header">
                      <h4 className="menu-item-name">{item.name}</h4>
                      <span className="menu-item-price">₹{item.price}</span>
                    </div>
                    <p className="menu-item-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">What Our Guests Say</h2>
            <p className="section-subtitle">Real experiences from our café family</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="testimonial-card" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#FDBA3D" stroke="#FDBA3D" />
                  ))}
                </div>
                <p className="testimonial-review">"{testimonial.review}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                  <div>
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-location">{testimonial.location}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="location-section" id="location">
        <div className="section-container">
          <div className="location-content">
            <div className="location-info">
              <h2 className="section-title">Visit Us</h2>
              <div className="info-items">
                <div className="info-item">
                  <MapPin className="info-icon" />
                  <div>
                    <div className="info-label">Address</div>
                    <div className="info-value">{cafeInfo.address}</div>
                    <div className="info-landmark">{cafeInfo.landmark}</div>
                  </div>
                </div>
                <div className="info-item">
                  <Phone className="info-icon" />
                  <div>
                    <div className="info-label">Phone</div>
                    <div className="info-value">{cafeInfo.phone}</div>
                  </div>
                </div>
                <div className="info-item">
                  <Clock className="info-icon" />
                  <div>
                    <div className="info-label">Hours</div>
                    <div className="info-value">{cafeInfo.hours}</div>
                  </div>
                </div>
              </div>
              <Button className="btn-primary-cafe btn-large" style={{ marginTop: '2rem' }}>
                Get Directions
              </Button>
            </div>
            
            <div className="location-map">
              <div className="map-placeholder">
                <MapPin size={60} strokeWidth={1.5} className="map-pin" />
                <p>Thane, Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="cafe-footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Coffee size={24} />
              <span>{cafeInfo.name}</span>
            </div>
            <p className="footer-tagline">Brewed Fresh. Served With Heart.</p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <a href="#menu" className="footer-link">Menu</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#location" className="footer-link">Location</a>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-text">{cafeInfo.phone}</p>
            <p className="footer-text">{cafeInfo.email}</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Chai & Soul. Crafted with love in Thane.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
