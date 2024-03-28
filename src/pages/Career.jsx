import React, { useState, useEffect } from 'react';
import '../styles/Career.css'
import { careerHistory } from '../data/careerData';

function Career() {
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const timeline = document.querySelector('.timeline');
          if (timeline) {
            const timelineRect = timeline.getBoundingClientRect();
            const timelineCenter = timelineRect.top + timelineRect.height / 2;
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
            // Show details when the timeline center is approximately in the middle of the viewport
            setShowDetails(window.scrollY + windowHeight >= timelineCenter);
          }
        };
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Clean up event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
      <main>
        {/* Hero Section */}
        <section className="hero">
          <h1>Timeline Of My Career</h1>
          <p>I'm Michael a Product Marketing Manager and Part-Time Coder</p>
          <button>See My Journey</button>
        </section>
  
        {/* Timeline Section */}
         {/* Timeline Section */}
      <section className="timeline">
        {careerHistory.map((entry) => (
          <div className="timeline-item" key={entry.id}>
            <div className="timeline-content">
              <img className={`logo ${showDetails ? 'show' : ''}`} src={entry.imgUrl} alt={entry.name} />
              {showDetails && (
                <>
                  <h2>{entry.name}</h2>
                  <p>{entry.title}</p>
                  <p>{entry.dates.start.toDateString()} - {entry.dates.end.toDateString()}</p>
                  <p>{entry.description}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </section>
      </main>
    );
  }
  
  export default Career;
