import Header from "@/components/sections/header";
import Sidebar from "@/components/sections/sidebar";
import Credits from "@/components/sections/credits";
import content from "@/lib/content.json";
import { notFound } from "next/navigation";

export default async function StaticPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Find page by title or slug-like comparison
  const page = content.pages.find(p => 
    p.title.toLowerCase().replace(/\s+/g, '-') === slug ||
    slug === 'sensitiv-imago' && p.title === 'SENSITIV IMAGO'
  );

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#E1E1E1]">
      <Header />
      
      <main className="container mx-auto max-w-[1280px] px-[15px] flex flex-col md:flex-row gap-[30px] mt-[20px]">
        <div className="flex-1 min-w-0">
          <div className="bg-white p-[15px] border border-[#DDDDDD]">
            <article className="post hentry px-[15px] pb-[15px]">
              <h3 className="post-title text-[22px] font-sans text-[#000080] leading-[1.4] mb-[20px]">
                {page.title}
              </h3>
              <div 
                className="post-body font-serif text-[16px] text-[#333333] leading-[1.5]"
                dangerouslySetInnerHTML={{ __html: page.content }}
              />
            </article>
          </div>
        </div>
        
        <Sidebar />
      </main>

      <Credits />
    </div>
  );
}
