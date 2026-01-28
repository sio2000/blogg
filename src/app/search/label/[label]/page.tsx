import Header from "@/components/sections/header";
import PostList from "@/components/sections/post-list";
import Sidebar from "@/components/sections/sidebar";
import Credits from "@/components/sections/credits";
import content from "@/lib/content.json";

export default async function LabelPage({ params }: { params: Promise<{ label: string }> }) {
  const { label } = await params;
  const decodedLabel = decodeURIComponent(label);
  const filteredPosts = content.posts.filter(post => 
    post.labels.includes(decodedLabel)
  );

  return (
    <div className="min-h-screen bg-[#E1E1E1]">
      <Header />
      
      <main className="container mx-auto max-w-[1280px] px-[15px] flex flex-col md:flex-row gap-[30px] mt-[20px]">
        <div className="flex-1 min-w-0">
          <div className="status-msg bg-[#F9F9F9] border border-[#DDDDDD] p-[15px] mb-[20px] text-[13px] text-[#666666]">
            Εμφάνιση αναρτήσεων με ετικέτα <span className="font-bold">{decodedLabel}</span>. 
            <a href="/" className="ml-1 text-[#0000FF] hover:underline">Εμφάνιση όλων των αναρτήσεων</a>
          </div>
          <PostList posts={filteredPosts} />
        </div>
        
        <Sidebar />
      </main>

      <Credits />
    </div>
  );
}
