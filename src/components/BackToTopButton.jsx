import React, { useState, useEffect } from 'react';
import './BackToTopButton.css';  // CSS

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <button
          className="btn btn-primary back-to-top"
          onClick={scrollToTop}
        >
          ↑ Back to Top
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
