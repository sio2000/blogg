"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Αρχική σελίδα', href: '/' },
    { name: 'SENSITIV IMAGO', href: '/p/sensitiv-imago' },
    { name: 'Clinical Nutrition', href: '/search/label/Clinical Nutrition' },
    { name: 'Diet Coaching', href: '/search/label/Diet Coaching' },
    { name: 'Healthy Life Style', href: '/search/label/Healthy Life Style' },
    { name: 'Συνταγές Δύναμης', href: '/search/label/Συνταγές Δύναμης' },
    { name: 'Ολιστική Εφαρμογή', href: '/search/label/Ολιστική Εφαρμογή' },
  ];

  return (
    <header className="w-full">
      {/* Top Banner Area */}
      <div className="header-outer bg-white border-x border-[#DDDDDD]">
        <div className="header-cap-top h-0"></div>
        <div className="region-inner header-inner flex justify-center py-0">
          <div className="header section w-full max-w-[1280px]" id="header">
            <div className="widget Header" id="Header1">
              <div id="header-inner" className="flex justify-center">
                <Link href="/" className="block">
                  <Image
                    alt="Diet Web"
                    height={308}
                    width={1278}
                    id="Header1_headerimg"
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d22d1fc9-067a-4c79-9954-b33dd595b3db-diet-web-blogspot-com/assets/images/newA-1.jpg"
                    className="max-w-full h-auto block"
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="header-cap-bottom h-0"></div>
      </div>

      {/* Main Navigation Tabs */}
      <div className="tabs-outer bg-[#F9F9F9] border-y border-[#CCCCCC]">
        <div className="region-inner tabs-inner max-w-[1280px] mx-auto">
          <div className="tabs section" id="crosscol">
            <div className="widget PageList" id="PageList1">
              <h2 className="sr-only">SENSITIV IMAGO</h2>
              <div className="widget-content">
                <ul className="flex flex-wrap list-none p-0 m-0">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href || 
                                   (item.href !== '/' && pathname.startsWith(item.href)) ||
                                   (item.href !== '/' && decodeURIComponent(pathname).startsWith(item.href));
                    
                    return (
                      <li key={item.href} className={`${isActive ? 'bg-[#888888]' : ''} border-r border-[#DDDDDD]`}>
                        <Link 
                          href={item.href} 
                          className={`inline-block px-[20px] py-[10px] text-[13px] font-bold ${isActive ? 'text-white' : 'text-[#666666]'} font-sans hover:bg-[#888888] hover:text-white transition-colors`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="clear-both"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .header-outer {
          max-width: 1280px;
          margin: 0 auto;
        }
        .tabs-outer {
          margin-bottom: 0px;
        }
        .widget.PageList li {
          transition: background-color 0.1s ease;
        }
      `}} />
    </header>
  );
};

export default Header;
