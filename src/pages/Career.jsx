import React, { useState, useEffect } from 'react';
import '../styles/Career.css';
import { careerHistory } from '../data/careerData';

function Career() {
  const [showDetails, setShowDetails] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.querySelector('.timeline');
      if (timeline) {
        const timelineRect = timeline.getBoundingClientRect();
        const timelineCenter = timelineRect.top + timelineRect.height / 2;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
        // Check if each timeline item is in the viewport
        const updatedShowDetails = {};
        careerHistory.forEach((entry) => {
          const item = document.getElementById(`timeline-item-${entry.id}`);
          if (item) {
            const itemRect = item.getBoundingClientRect();
            const itemCenter = itemRect.top + itemRect.height / 2;
            updatedShowDetails[entry.id] = window.scrollY + windowHeight >= itemCenter;
          }
        });
        setShowDetails(updatedShowDetails);
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
        <button>View My Work</button>
      </section>

      {/* Timeline Section */}
      <section className="timeline">
        <div className="timeline-line"></div>
        {careerHistory.map((entry) => (
          <div className="timeline-item" key={entry.id} id={`timeline-item-${entry.id}`}>
            <div className="timeline-content">
              <img className={`logo ${showDetails[entry.id] ? 'show' : ''}`} src={entry.imgUrl} alt={entry.name} />
              {showDetails[entry.id] && (
                <div className="details">
                  <h2>{entry.name}</h2>
                  <p>{entry.title}</p>
                  <p>{entry.dates.start.toDateString()} - {entry.dates.end.toDateString()}</p>
                  {entry.description.map((desc, index) => (
                    <p key={index}>{desc}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Career;
