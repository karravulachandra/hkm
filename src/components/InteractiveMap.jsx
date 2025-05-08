import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/InteractiveMap.css';

const InteractiveMap = () => {
  const [activeTab, setActiveTab] = useState('map');
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapRef = useRef(null);

  // Guntur coordinates
  const latitude = 16.3067;
  const longitude = 80.4365;

  // Temple location (exact coordinates from Google Maps link)
  const templeLatitude = 16.3114;
  const templeLongitude = 80.4342;

  // Google Maps link for the temple
  const googleMapsLink = "https://maps.app.goo.gl/HBw5hdrhWd42b6vF6";

  useEffect(() => {
    // Load Google Maps API script
    const loadGoogleMapsAPI = () => {
      const googleMapsScript = document.createElement('script');
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      googleMapsScript.async = true;
      googleMapsScript.defer = true;
      window.initMap = initMap;
      document.head.appendChild(googleMapsScript);
    };

    // Initialize map
    const initMap = () => {
      if (!mapRef.current) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: templeLatitude, lng: templeLongitude },
        zoom: 15,
        styles: [
          {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#7c93a3"}, {"lightness": "-10"}]
          },
          {
            "featureType": "administrative.country",
            "elementType": "geometry",
            "stylers": [{"visibility": "on"}]
          },
          {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#a0a4a5"}]
          },
          {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#62838e"}]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#f1f6f8"}]
          },
          {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#f1f6f8"}, {"visibility": "on"}]
          },
          {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#dde2e3"}]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#c3e2ce"}]
          },
          {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#d9d9d9"}]
          },
          {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#b3b3b3"}]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#ffeba1"}]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#a3c7df"}]
          }
        ]
      });

      // Add marker for temple location
      const marker = new window.google.maps.Marker({
        position: { lat: templeLatitude, lng: templeLongitude },
        map: map,
        title: 'Hare Krishna Cultural Centre',
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF7F00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 21H21"></path>
              <path d="M5 21V7L12 3L19 7V21"></path>
              <path d="M9 21V15H15V21"></path>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(40, 40),
          anchor: new window.google.maps.Point(20, 40),
        }
      });

      // Add info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div class="map-info-window">
            <h3>Hare Krishna Cultural Centre</h3>
            <p>Opp. Orion Hotel, Near RTO Office, JKC College Road, Guntur, Andhra Pradesh</p>
            <p>Phone: 9849994873</p>
            <p><a href="${googleMapsLink}" target="_blank" rel="noopener noreferrer" style="color: #FF7F00; font-weight: bold;">View on Google Maps</a></p>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      // Open info window by default
      infoWindow.open(map, marker);

      setIsMapLoaded(true);
    };

    // For demo purposes, we'll use a placeholder instead of loading the actual Google Maps API
    // In a real application, uncomment the loadGoogleMapsAPI() call
    // loadGoogleMapsAPI();

    // Placeholder for demo
    setTimeout(() => {
      setIsMapLoaded(true);
    }, 1000);
  }, []);

  return (
    <div className="interactive-map-container">
      <div className="map-tabs">
        <button
          className={`map-tab ${activeTab === 'map' ? 'active' : ''}`}
          onClick={() => setActiveTab('map')}
        >
          Map View
          {activeTab === 'map' && (
            <motion.div
              className="active-tab-indicator"
              layoutId="activeMapTab"
              transition={{ type: 'spring', duration: 0.6 }}
            />
          )}
        </button>
        <button
          className={`map-tab ${activeTab === 'directions' ? 'active' : ''}`}
          onClick={() => setActiveTab('directions')}
        >
          Directions
          {activeTab === 'directions' && (
            <motion.div
              className="active-tab-indicator"
              layoutId="activeMapTab"
              transition={{ type: 'spring', duration: 0.6 }}
            />
          )}
        </button>
        <button
          className={`map-tab ${activeTab === 'street' ? 'active' : ''}`}
          onClick={() => setActiveTab('street')}
        >
          Street View
          {activeTab === 'street' && (
            <motion.div
              className="active-tab-indicator"
              layoutId="activeMapTab"
              transition={{ type: 'spring', duration: 0.6 }}
            />
          )}
        </button>
      </div>

      <div className="map-content">
        {activeTab === 'map' && (
          <div className="map-view">
            <div
              ref={mapRef}
              className={`map-container ${isMapLoaded ? 'loaded' : 'loading'}`}
            >
              {!isMapLoaded && (
                <div className="map-loading">
                  <div className="loading-spinner"></div>
                  <p>Loading map...</p>
                </div>
              )}

              {/* Placeholder map image for demo */}
              <div className="placeholder-map">
                <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="map-link">
                  <img src="https://i.imgur.com/Yd8MhUZ.png" alt="Map placeholder" />
                  <div className="map-marker">
                    <div className="marker-pin"></div>
                    <div className="marker-pulse"></div>
                  </div>
                  <div className="map-overlay">
                    <span>Click to open in Google Maps</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'directions' && (
          <div className="directions-view">
            <div className="directions-content">
              <h3>How to Reach Us</h3>

              <div className="get-directions-button">
                <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="directions-link">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M13 8L9 12L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Get Directions on Google Maps
                </a>
              </div>

              <div className="direction-item">
                <div className="direction-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 16L10.879 13.121C11.2726 12.7274 11.5 12.1863 11.5 11.6213C11.5 10.4462 10.5462 9.5 9.37131 9.5C8.19644 9.5 7.24265 10.4462 7.24265 11.6213C7.24265 12.1863 7.46996 12.7274 7.86357 13.121L10.7426 16" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 16L15.879 13.121C16.2726 12.7274 16.5 12.1863 16.5 11.6213C16.5 10.4462 15.5462 9.5 14.3713 9.5C13.1964 9.5 12.2426 10.4462 12.2426 11.6213C12.2426 12.1863 12.47 12.7274 12.8636 13.121L15.7426 16" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="direction-text">
                  <h4>By Car</h4>
                  <p>
                    Located on JKC College Road, opposite to Orion Hotel and near RTO Office.
                    Parking is available at the temple premises.
                  </p>
                </div>
              </div>

              <div className="direction-item">
                <div className="direction-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 11H20V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11Z" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16V16.01" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="direction-text">
                  <h4>By Public Transport</h4>
                  <p>
                    Take any city bus to JKC College stop. The temple is a short 5-minute walk from there.
                    Auto-rickshaws are also readily available from any part of Guntur.
                  </p>
                </div>
              </div>

              <div className="direction-item">
                <div className="direction-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="direction-text">
                  <h4>Temple Hours</h4>
                  <p>
                    <strong>Morning:</strong> 4:30 AM - 12:00 PM<br />
                    <strong>Evening:</strong> 4:00 PM - 8:30 PM<br />
                    <strong>Special Programs:</strong> Sunday 5:00 PM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'street' && (
          <div className="street-view">
            <div className="street-view-container">
              {/* Placeholder street view image with link to Google Maps */}
              <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="street-view-link">
                <img src="https://i.imgur.com/8NqKtJl.png" alt="Street view placeholder" className="street-view-image" />
                <div className="street-view-overlay">
                  <span>View Street View on Google Maps</span>
                </div>
              </a>
              <div className="street-view-controls">
                <button className="street-control left">←</button>
                <button className="street-control right">→</button>
                <button className="street-control zoom-in">+</button>
                <button className="street-control zoom-out">-</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveMap;
