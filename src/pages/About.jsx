import React from 'react';
import '../styles/Home.css'

// Import any additional components you might have created for these sections
// import ProjectCard from './ProjectCard';
// import Testimonial from './Testimonial';
// import BlogPreview from './BlogPreview';
// ... etc

function About() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero">
        <h1>About Me</h1>
        <p>I'm Michael a Product Marketing Manager and Part-Time Coder</p>
        <button>View My Work</button>
      </section>

      {/* About Me Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>[Your bio...]</p>
        <button>Learn More</button>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <h2>My Work</h2>
        <div className="portfolio-container">
          {/* Map through your projects and display them as cards */}
          {/* {projects.map(project => <ProjectCard key={project.id} project={project} />)} */}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog">
        <h2>Latest Articles</h2>
        <div className="blog-container">
          {/* Map through blog posts and display them */}
          {/* {blogPosts.map(post => <BlogPreview key={post.id} post={post} />)} */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
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

export default About;
