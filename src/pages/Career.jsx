import React from 'react';
import '../styles/Career.css'

// Import any additional components you might have created for these sections
// import ProjectCard from './ProjectCard';
// import Testimonial from './Testimonial';
// import BlogPreview from './BlogPreview';
// ... etc

function Career() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero">
        <h1>Timeline Of My Career</h1>
        <p>I'm Michael a Product Marketing Manager and Part-Time Coder</p>
        <button>View My Work</button>
      </section>

      {/* About Me Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>[Your bio...]</p>
        <button>Learn More</button>
      </section>

      {/* Footer */}
      <footer>
        <p>Connect with me on social media.</p>
        <div className="social-media-links">
          {/* Links to your social media profiles */}
        </div>
      </footer>
    </main>
  );
}

export default Career;
