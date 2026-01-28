"use client";
import React from 'react';

const FooterNavigation = () => {
  return (
    <div className="main-outer">
      <div className="region-inner main-inner">
        <div className="columns-inner">
          <div className="column-center-outer">
            <div className="column-center-inner">
              <div className="main section" id="main">
                <div className="widget Blog" id="Blog1">
                  <div className="blog-pager" id="blog-pager">
                    <div 
                      className="bg-white border border-[#DDDDDD] p-[15px] mt-[20px] mb-[10px] flex justify-between items-center"
                      style={{
                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                      }}
                    >
                      {/* Left: Home link */}
                        <span id="blog-pager-home-link" className="flex-1 text-center">
                          <Link 
                            className="home-link font-display text-[#0000FF] hover:underline" 
                            href="/"
                            style={{
                              fontSize: '14px',
                              fontFamily: '"Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif'
                            }}
                          >
                            Αρχική σελίδα
                          </Link>
                        </span>

                        {/* Right: Older posts link */}
                        <span id="blog-pager-older-link" className="flex-1 text-right">
                          <Link 
                            className="blog-pager-older-link font-display text-[#0000FF] hover:underline" 
                            href="/" 
                            id="Blog1_blog-pager-older-link" 
                            title="Παλαιότερες αναρτήσεις"
                            style={{
                              fontSize: '14px',
                              fontFamily: '"Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif'
                            }}
                          >
                            Παλαιότερες αναρτήσεις
                          </Link>
                        </span>

                    </div>
                  </div>
                  
                  {/* Subscription Link Section */}
                  <div className="feed-links mt-4 mb-8 text-center" style={{ fontSize: '13px' }}>
                    <span className="text-[#333333]">
                      Εγγραφή σε: 
                      <a 
                        className="feed-link ml-1 text-[#0000FF] hover:underline" 
                        href="https://diet-web.blogspot.com/feeds/posts/default" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Σχόλια (Atom)
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative vertical borders and shadows logic carried from the parent layout if needed, 
          but as a standalone section based on instructions, this handles the navigation box. */}
    </div>
  );
};

export default FooterNavigation;