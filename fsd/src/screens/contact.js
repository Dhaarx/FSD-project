import React, { useRef, useEffect } from 'react';
import '../screens_css/contact.css';

const Contact = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const googleScript = document.createElement('script');
    googleScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDouSDXuZs-C61VHt6eJiIgP4ndfv41pDU&callback=initMap';
    googleScript.async = true;
    window.initMap = initMap;
    document.body.appendChild(googleScript);

    return () => {
      document.body.removeChild(googleScript);
    };
  }, []);

  const initMap = () => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 10.828863916539307, lng: 77.06039464970944 },
      zoom: 15,
    });

    new window.google.maps.Marker({
      position: { lat: 10.828863916539307, lng: 77.06039464970944 },
      map,
      title: 'Company Location',
    });
  };

  return (
    <div className="location-page">
        <br/>
      <h1>Location </h1>
      <div id="map" ref={mapRef}></div>
      <div className="location-info">
        <div className="info-container">
          <div className="info-card">
            <h2>Email us</h2>
            <p>motohub@gmail.com</p>
          </div>
          <div className="info-card">
            <h2>Call us</h2>
            <p>9314677565</p>
          </div>
          <div className="info-card">
            <h2>Address</h2>
            <p>Sri Eshwar college of Eng..,kondampatty,vadasithur</p>
          </div>
          <div className="info-card">
            <h2>Opening Hours</h2>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          </div>
          <div className="info-card full-width">
            <h2>Send Message</h2>
            <form className="message-form">
              <div className="input-container">
                <input type="text" id="name" placeholder="Your Name" />
                <input type="email" id="email" placeholder="Your Email" />
              </div>
              <input type="text" id="subject" placeholder="Subject" />
              <textarea id="message" placeholder="Your Message"></textarea>
              <center>
                <button type="submit">Send Message</button>
              </center>
              
            </form>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
