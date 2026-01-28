import Header from "@/components/sections/header";
import PostList from "@/components/sections/post-list";
import Sidebar from "@/components/sections/sidebar";
import Credits from "@/components/sections/credits";
import content from "@/lib/content.json";

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q: string }> }) {
  const { q } = await searchParams;
  const query = q?.toLowerCase() || '';
  const filteredPosts = content.posts.filter(post => 
    post.title.toLowerCase().includes(query) || 
    post.content.toLowerCase().includes(query)
  );

  return (
    <div className="min-h-screen bg-[#E1E1E1]">
      <Header />
      
      <main className="container mx-auto max-w-[1280px] px-[15px] flex flex-col md:flex-row gap-[30px] mt-[20px]">
        <div className="flex-1 min-w-0">
          <div className="status-msg bg-white border border-[#DDDDDD] p-[15px] mb-[20px] text-[13px] text-[#666666]">
            Αποτελέσματα αναζήτησης για <span className="font-bold">{query}</span>
          </div>
          {filteredPosts.length > 0 ? (
            <PostList posts={filteredPosts} />
          ) : (
            <div className="bg-white p-[15px] border border-[#DDDDDD] text-[#666666]">
              Δεν βρέθηκαν αποτελέσματα για την αναζήτησή σας.
            </div>
          )}
        </div>
        
        <Sidebar />
      </main>

      <Credits />
    </div>
  );
}
