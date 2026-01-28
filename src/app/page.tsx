import Header from "@/components/sections/header";
import PostList from "@/components/sections/post-list";
import Sidebar from "@/components/sections/sidebar";
import Credits from "@/components/sections/credits";
import content from "@/lib/content.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E1E1E1]">
      <Header />
      
      <main className="container mx-auto max-w-[1280px] px-[15px] flex flex-col md:flex-row gap-[30px] mt-[20px]">
        <div className="flex-1 min-w-0">
          <PostList posts={content.posts} />
        </div>
        
        <Sidebar />
      </main>

      <Credits />
    </div>
  );
}
