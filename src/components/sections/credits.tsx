"use client";
import React from 'react';

/**
 * Credits Component
 * 
 * This component represents the final footer credits section of the website.
 * It includes the attribution text "Θέμα Φανταστικό Α.Ε.. Από το Blogger." 
 * and the specific layout styling found at the very bottom of the page.
 */

const Credits: React.FC = () => {
  return (
    <footer className="w-full mt-auto py-8">
      <div className="container mx-auto max-w-[1280px] px-[15px]">
        {/* The footer section with attribution text */}
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          
          {/* Social styling based on the post-footer area if applicable, 
              but the specific request focuses on the final credits line */}
          
          <div className="credits-text py-10">
            <p 
              className="text-[#666666] font-display text-[13px] leading-[1.5]"
              style={{ fontFamily: '"Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif' }}
            >
              Θέμα Φανταστικό Α.Ε.. Από το{' '}
              <a 
                href="https://www.blogger.com" 
                className="text-[#0000FF] hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Blogger
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Internal styling for the credit text based on the blogspot's specific font and color tokens */}
      <style jsx global>{`
        .credits-text a {
          color: #0000FF;
          text-decoration: none;
        }
        .credits-text a:hover {
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
};

export default Credits;