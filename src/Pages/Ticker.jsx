import React, { useEffect, useState } from 'react';
import './Ticker.css'; //CSS file

const Ticker = () => {
    const [location, setLocation] = useState('');
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        // Get current date and time
        const updateDateTime = () => {
            const now = new Date();
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit', 
                hour12: true 
            };
            setDateTime(now.toLocaleDateString('en-US', options));
        };
        
        updateDateTime();
        const timer = setInterval(updateDateTime, 1000); // Update every second

        return () => clearInterval(timer); // Clean up the interval on unmount
    }, []);

    useEffect(() => {
        // Get user location
        const success = (position) => {
            const { latitude, longitude } = position.coords;
            setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
        };

        const error = () => {
            setLocation("Location access denied.");
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            setLocation("Geolocation is not supported by this browser.");
        }
    }, []);

    return (
        <div className="ticker">
            <div className="ticker-content">
                <span>{dateTime} | {location}</span>
            </div>
        </div>
    );
};

export default Ticker;
