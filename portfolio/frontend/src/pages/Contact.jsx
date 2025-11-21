import React from 'react';
import jellyVideo from '../assets/jelly2.mp4';  
import glassImg from '../assets/glass.png';

export default function Contact() {
  return (
    <div id="video-container">

      {/* VIDEO BACKGROUND */}
      <video
        id="background-video"
        autoPlay
        loop
        muted
        playsInline
        poster={glassImg}
      >
        <source src={jellyVideo} type="video/mp4" />
      </video>

      {/* GLASS OVERLAY */}
      <div
        id="glass-overlay"
        style={{ backgroundImage: `url(${glassImg})` }}
      ></div>

      {/* PAGE CONTENT */}
      <div id="content">
        <div
          id="contact"
          className="p-4 md:p-8 m-4 flex items-center justify-center min-h-screen"
        >
          <div
            className="
              container mx-auto flex flex-col items-center justify-center gap-6 
              max-w-lg p-6 rounded-xl 
              bg-white/10 backdrop-blur-md  /* <-- GLASS, NOT WHITE */
              shadow-2xl border border-white/30
            "
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center">
              Tap the Glass
            </h2>

            {/* Email */}
            <div className="w-full text-center mt-3">
              <p className="text-xl font-semibold mb-4 text-white">
                Let's connect!
              </p>
              <a
                href="mailto:annisacworks@gmail.com?subject=Inquiry%20from%20Portfolio"
                className="pill w-full text-base inline-flex items-center justify-center text-white"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.848 5.232a2 2 0 002.304 0L21 8m-8 13l-4-4m4 4l4-4m-4 4V5"
                  />
                </svg>
                Send me an Email
              </a>
            </div>

            {/* LinkedIn */}
            <div className="text-center mt-8">
              <p className="text-lg mb-2 text-white">
                You can also find me on:
              </p>
              <a
                href="https://linkedin.com/in/annisa-carter-341559145"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2 bg-blue-600 text-white font-bold rounded-full shadow-lg
                           hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out
                           text-lg"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.687v6.548z" />
                </svg>
                LinkedIn
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
