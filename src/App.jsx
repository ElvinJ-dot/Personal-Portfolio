import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css'; // Include the custom CSS for Lexend font
import ProjectCard from './ProjectCard';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useForm, ValidationError } from '@formspree/react';
import IMAGES from './Images/Images';


const sections = ['Intro', 'Projects', 'About', 'Contact'];

export default function App() {
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState('Intro');

  // Handle scroll to update active section
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 3; // Adjusted threshold

    let currentSection = 'Intro'; // Default section

    sections.forEach((section) => {
      const el = document.getElementById(section.toLowerCase());
      if (el) {
        const { top, bottom } = el.getBoundingClientRect();

        // Update currentSection based on which section is in the viewport
        if (top <= scrollPosition && bottom >= scrollPosition) {
          currentSection = section;
        }
      }
    });

    setActiveSection(currentSection); // Update active section
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll on sidebar link click
  const handleSmoothScroll = (section) => {
    const el = document.getElementById(section.toLowerCase());
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(section); // Update active section on click
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CatImage = () => {
    const [message, setMessage] = useState('');
    const [fadeOut, setFadeOut] = useState(false);
  
    const handleClick = () => {
      setMessage('🐾Gotcha chief, you\'re a cat lover🐾');
      setFadeOut(false);
  
      // Set a timer to fade out the message after 3 seconds
      setTimeout(() => {
        setFadeOut(true); // Set fadeOut to true after 3 seconds to start fading
      }, 2000);
    };
    
  //added 1
    return (
      <div className="text-center">
        
          <img src={IMAGES.image1}
          alt="Cat walking"
          className="mx-auto h-50 w-50 cursor-pointer"
          onClick={handleClick}
        />
        {message && (
          <p
            className={`transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
          >
            {message}
          </p>
        )}
      </div>
    );
  };


  return (
    <div className="h-screen bg-black text-white relative overflow-x-hidden lexend-unique">
      {/* Fullscreen Intro Animation */}
      {!showContent && (
        <motion.div
          className="flex items-center justify-center h-screen w-full bg-black absolute z-50 text-8xl font-light pl-5"
          initial={{ y: 0 }}
          animate={{ y: '-100vh' }}
          transition={{ delay: 1.5, duration: .5 }}
          onAnimationComplete={() => setShowContent(true)}
        >
          <p>Elvin James</p>
        </motion.div>
      )}

      

      {/* Sidebar / Navbar */}
      {showContent && (
        <nav className="fixed md:left-10 md:w-20 md:h-full bg-black flex md:flex-col justify-around md:justify-center items-center space-y-0 md:space-y-6 md:space-x-0 px-4 md:px-0 py-2 z-10 mx-auto md:mx-0 w-[100%] max-w-[100%] min-h-[10%]">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleSmoothScroll(section)}
              className={`transition text-sm md:text-base ${
                activeSection === section
                  ? 'text-white font-bold'
                  : 'text-gray-500'
              }`}
            >
              {section}
            </button>
          ))}
        </nav>
      )}

      {/* Main Content */}
      {showContent && (
        <div className="w-full">
          {/* Sections */}
          <div
            id="intro"
            className="min-h-screen flex items-center justify-center bg-black"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 1 }}
            >
              <div className="text-center px-4 md:px-0">
                <h2 className="text-5xl">Hey👋, Chief!</h2>
                <p className="mt-10 text-3xl px-4 md:px-20 lg:px-40 md:ml-11 text-gray-400">
                  I'm a developer focused on blending technology and minimalism to create <b>impactful, functional solutions.</b>
                </p>
                <div className="text-center">
                <CatImage />
    </div>                
                
                </div>
              
            </motion.div>
          </div>
          <div
            id="projects"
            className="min-h-screen flex items-center justify-center bg-black text-white"
          >
            <div>
              <br></br>
              <h2 className="text-4xl font-bold text-center">Projects</h2>
              <div className="px-4 md:px-10 lg:px-20 xl:px-60 pt-10 space-y-10">
                    <ProjectCard 
                      name="Café Mobile Order System" 
                      description="A secure mobile ordering system for cafés with user authentication, food customization, and online payment. Protects user data with password hashing and prevents XSS attacks." 
                      techused="HTML, CSS, JavaScript, PHP, Apache" 
                      link="https://github.com/ElvinJ-dot/Mobile-Ordering-APP" 
                    />

                    <ProjectCard 
                      name="Minimalist Portfolio" 
                      description="A sleek, fast, and responsive portfolio showcasing my work with a focus on simplicity and performance." 
                      techused="React, Tailwind CSS, Vite, Framer Motion" 
                      link="#" 
                    />
                    <ProjectCard 
                      name="Tool Management System (School Project)" 
                      description="A comprehensive tool management system for efficiently tracking and managing tools in a school or workshop. The system leverages database integration for inventory tracking, tool checkout/check-in, and a dynamic user interface." 
                      techused="MySQL, PostgreSQL, SQL, PHP, HTML, CSS" 
                      link="https://github.com/ElvinJ-dot/toolmanagementsystem" 
                    />
                    <ProjectCard 
                    name="Bread Maker Ingredient Profiler (School Project)" 
                    description="A Java application that profiles and manages ingredients for bread making. Users can input and store ingredients, track their quantities, and create customized bread recipes using a simple Java Swing interface." 
                    techused="Java, Swing, MySQL" 
                    link="https://github.com/ElvinJ-dot/Bread-Maker-Ingredient-Profiler" 
                  />




              </div>
            </div>
          </div>
          <div
            id="about"
            className="min-h-screen flex items-center justify-center bg-black text-white"
          >
            <div className="text-center px-4 md:px-0 p-10">
              <h2 className="text-4xl font-bold">About Me</h2>
              <p className="mt-10 text-2xl px-4 md:px-20 lg:px-40 md:ml-11 text-gray-400">
                Ever wonder how things get built behind the scenes? 🤔 I’ve been tinkering with computers since I was 11—starting with fixing and modding PCs and phones 🔧, and now I’m all about creating cool digital experiences.
                <br />
                <br />
                I work with React, Tailwind, Linux 🐧, and Java ☕, but I’m always picking up something new. I love clean design and making things that just work. Every project is a chance to learn, and I’m always up for the next challenge! 🚀
              </p>
            </div>
          </div>
          <div className="w-[70%] mx-auto">
            <Carousel responsive={responsive} className="w-full">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="flex">
                  <img
                    src={`src/Public/pic${index + 1}.png`}
                    alt={`Image ${index + 1}`}
                    className="w-full h-[300px] object-cover"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          {/* Contact Form */}

  <div id="contact" className="min-h-screen flex justify-center bg-black text-white pt-50">
    <div className="text-center px-4 md:px-0 p-10 w-full md:w-2/3 lg:w-1/2"> {/* Added md:w-2/3 lg:w-1/2 */}
      <h2 className="text-4xl font-bold">Contact</h2>
      <p className="mt-4 text-gray-600 px-3 md:px-20 lg:px-20">

          Feel free to reach out! I'd love to hear from you.

        </p>

      <div className="mt-5 w-full">
        <form
          className="flex flex-col items-center w-full"
          action="https://formspree.io/f/movjdgeb"
          method="POST"
        >
          <div className="w-full md:w-2/3 lg:w-1/2"> {/* Added container div with responsive widths */}
            <label className="w-full">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="bg-gray-900 text-white py-1 px-2 mb-4 w-full rounded-md h-12 focus:outline-none"
                required
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                title="Please enter a valid email address"
              />
            </label>
            <label className="w-full">
              <textarea
                name="message"
                placeholder="Your Message"
                className="bg-gray-900 text-white py-1 px-2 mb-4 w-full rounded-md h-32 focus:outline-none"
                required
                minLength="10"
                title="Message must be at least 10 characters long"
              ></textarea>
            </label>

            <button
              type="submit"
              className="bg-white text-black py-3 px-6 rounded-full w-full md:w-auto text-center transition-shadow duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)]"
            >
              Give Me a Holla, Chief!
            </button>
          </div> {/* Close container div */}
        </form>


<div className="mt-18 flex justify-center space-x-6">
                <a href="https://github.com/ElvinJ-dot" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github text-5xl hover:text-gray-400"></i>
                </a>
                <a href="https://linkedin.com/in/elvin-james">
                  <i className="fab fa-linkedin text-5xl hover:text-gray-400"></i>
                </a>
                <a href="mailto:elvinjames2528@gmail.com" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-envelope text-5xl hover:text-gray-400"></i>
                </a>
              </div>
                

              </div>
        
      </div>
      
    </div>
    


            </div>
        
      )}
      {/* Floating "Contact Me" Button */}
      {showContent && activeSection !== 'Contact' && (
        <button
          onClick={() => handleSmoothScroll('Contact')}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-white text-black py-3 px-6 rounded-full font-semibold transition-shadow duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)]"
        >
          Get in Touch
        </button>
      )}

      {/* Footer */}
      {showContent && (
        <footer className="bg-black text-white py-6 mt-16">
          <div className="max-w-screen-xl mx-auto text-center">
            <p className="text-sm md:text-base text-gray-400">
              &copy; {new Date().getFullYear()} <span className="font-semibold">Elvin James</span>. All rights reserved.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}
