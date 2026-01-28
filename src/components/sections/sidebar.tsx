"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import content from '@/lib/content.json';

const Sidebar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Get popular posts (taking top 5 for simplicity)
  const popularPosts = content.posts.slice(0, 5);

  // Group posts by year/month for archive
  const archive = React.useMemo(() => {
    const data: { [year: string]: { [month: string]: any[] } } = {};
    const monthNames = [
      'Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου',
      'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου'
    ];

    content.posts.forEach(post => {
      const date = new Date(post.published);
      const year = date.getFullYear().toString();
      const monthIdx = date.getMonth();
      const monthName = monthNames[monthIdx];
      
      if (!data[year]) data[year] = {};
      if (!data[year][monthName]) data[year][monthName] = [];
      data[year][monthName].push(post);
    });
    return data;
  }, []);

  return (
    <aside className="w-[316px] flex flex-col gap-[30px] font-sans">
      {/* Search Widget */}
      <section className="bg-white border border-[#DDDDDD] p-[15px]">
        <h2 className="text-[14px] font-bold text-[#666666] uppercase mb-[12px] font-display border-b border-[#DDDDDD] pb-[5px]">
          Αναζήτηση σε αυτό το ιστολόγιο
        </h2>
        <form onSubmit={handleSearch} className="flex gap-2">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 border border-[#DDDDDD] px-2 py-1 text-[13px] outline-none"
            placeholder="Αναζήτηση..."
          />
          <button 
            type="submit"
            className="bg-[#F9F9F9] border border-[#DDDDDD] px-3 py-1 text-[13px] hover:bg-[#EEEEEE]"
          >
            Αναζήτηση
          </button>
        </form>
      </section>

      {/* Contact Info Widget */}
      <section className="bg-white border border-[#DDDDDD] p-[15px]">
        <div className="text-center">
          <h2 className="text-[14px] font-bold text-[#666666] uppercase mb-[15px] font-display">
            ΟΛΙΣΤΙΚΟΣ ΕΛΕΓΧΟΣ<br />
            ΜΕ ΤΗΝ ΜΕΘΟΔΟ SENSITIV IMAGO
          </h2>
          <div className="text-[13px] leading-[1.5] text-[#333333]">
            <p className="font-bold text-[#000080]">Κατερίνα Μηστριώτη</p>
            <p>Σύμβουλος Κλινικής Διατροφολογίας<br />& Ολιστικών Εφαρμογών</p>
            <p>Εθνικό & Καποδιστριακό Πανεπιστήμιο Αθηνών<br />Natural Health Science College Manchester<br />Metropolitan University</p>
            <div className="mt-[15px]">
              <p>Τηλ. <span className="font-bold">6975 30 1223</span></p>
              <p>e-mail: <a href="mailto:k.mistrioti@yahoo.gr" className="text-[#0000FF] hover:underline">k.mistrioti@yahoo.gr</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Information Widget */}
      <section className="bg-white border border-[#DDDDDD] p-[15px]">
        <h2 className="text-[14px] font-bold text-[#666666] uppercase mb-[12px] font-display border-b border-[#DDDDDD] pb-[5px]">
          Πληροφορίες
        </h2>
        <div className="text-[12px] text-[#333333]">
          <div className="flex items-center gap-[6px] mb-[8px]">
            <div className="w-[16px] h-[16px] relative">
              <svg className="w-full h-full text-[#ed7602]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
              </svg>
            </div>
            <a href="mailto:mistrioti@gmail.com" className="text-[#2244BB] text-[11px] font-sans">Katerina Mistrioti mistrioti@gmail.com</a>
          </div>
          <a href="#" className="text-[#0000FF] text-[12px] hover:underline">Προβολή πλήρους προφίλ</a>
        </div>
      </section>

      {/* Blog Archive List */}
      <section className="bg-white border border-[#DDDDDD] p-[15px]">
        <h2 className="text-[14px] font-bold text-[#666666] uppercase mb-[12px] font-display border-b border-[#DDDDDD] pb-[5px]">
          Αρχειοθήκη ιστολογίου
        </h2>
        <div className="text-[13px] text-[#333333]">
          <div className="flex flex-col gap-1">
            {Object.keys(archive).sort().reverse().map(year => (
              <div key={year} className="flex flex-col gap-1">
                <div className="flex items-start gap-1">
                  <span className="text-[10px] mt-1 text-[#999999]">▼</span>
                  <span className="font-bold">{year}</span>
                  <span className="text-[#999999] ml-1">({Object.values(archive[year]).reduce((acc, val) => acc + val.length, 0)})</span>
                </div>
                <div className="pl-4 flex flex-col gap-1">
                  {Object.keys(archive[year]).sort().reverse().map(month => (
                    <div key={month} className="flex flex-col gap-1">
                      <div className="flex items-start gap-1">
                        <span className="text-[10px] mt-1 text-[#999999]">▼</span>
                        <span className="font-bold">{month}</span>
                        <span className="text-[#999999] ml-1">({archive[year][month].length})</span>
                      </div>
                      <div className="pl-4">
                        {archive[year][month].map(post => (
                          <div key={post.id} className="mb-1">
                            <Link href={`/post/${post.id.split('-').pop()}`} className="text-[#0000FF] hover:underline text-[12px]">
                              {post.title}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Posts */}
      <section className="bg-white border border-[#DDDDDD] p-[15px]">
        <h2 className="text-[14px] font-bold text-[#666666] uppercase mb-[12px] font-display border-b border-[#DDDDDD] pb-[5px]">
          Δημοφιλείς αναρτήσεις
        </h2>
        <div className="flex flex-col gap-[15px]">
          {popularPosts.map(post => {
            const imgMatch = post.content.match(/<img.*?src="(.*?)"/);
            const imgSrc = imgMatch ? imgMatch[1] : null;
            return (
              <div key={post.id} className="flex gap-[10px] items-start">
                {imgSrc && (
                  <div className="flex-shrink-0 w-[72px] h-[72px] relative border border-[#DDDDDD] overflow-hidden bg-gray-50">
                    <img 
                      src={imgSrc}
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-1">
                  <Link href={`/post/${post.id.split('-').pop()}`} className="text-[13px] text-[#0000FF] font-bold hover:underline leading-tight">
                    {post.title}
                  </Link>
                  <p className="text-[11px] text-[#444444] leading-snug line-clamp-3" 
                    dangerouslySetInnerHTML={{ __html: post.content.replace(/<[^>]*>/g, '').substring(0, 100) + '...' }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
