import Header from "@/components/sections/header";
import Sidebar from "@/components/sections/sidebar";
import Credits from "@/components/sections/credits";
import content from "@/lib/content.json";
import { notFound } from "next/navigation";

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = content.posts.find(p => p.id.endsWith(id));

  if (!post) {
    notFound();
  }

  const date = new Date(post.published);
  const formattedDate = date.toLocaleDateString('el-GR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const formattedTime = date.toLocaleTimeString('el-GR', {
    hour: 'numeric',
    minute: '2-digit'
  });

  return (
    <div className="min-h-screen bg-[#E1E1E1]">
      <Header />
      
      <main className="container mx-auto max-w-[1280px] px-[15px] flex flex-col md:flex-row gap-[30px] mt-[20px]">
        <div className="flex-1 min-w-0">
          <div className="date-outer mb-[30px]">
            <div className="date-header py-[10px] border-b border-[#EEEEEE] mb-[15px]">
              <h2 className="text-[12px] text-[#666666] font-sans">
                <span>{formattedDate}</span>
              </h2>
            </div>
            
            <article className="post hentry px-[15px] pb-[15px]">
              <h3 className="post-title text-[22px] font-sans text-[#000080] leading-[1.4] mb-[10px]">
                {post.title}
              </h3>

              <div 
                className="post-body font-serif text-[16px] text-[#333333] leading-[1.5]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <footer className="post-footer mt-[20px] pt-[10px] border-t border-[#EEEEEE] flex justify-between items-center">
                <div className="post-labels text-[11px] text-[#666666]">
                  Ετικέτες: {post.labels.join(', ')}
                </div>
                <div className="post-author text-[12px] text-[#666666] italic">
                  Αναρτήθηκε από <span className="underline">{post.author}</span> στις {formattedTime}
                </div>
              </footer>
            </article>
          </div>
        </div>
        
        <Sidebar />
      </main>

      <Credits />
    </div>
  );
}
