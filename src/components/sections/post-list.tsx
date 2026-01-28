"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Post {
  id: string;
  published: string;
  title: string;
  content: string;
  author: string;
  labels: string[];
}

interface PostListProps {
  posts: Post[];
}

const PostItem = ({ post }: { post: Post }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const date = new Date(post.published);
  const formattedDate = mounted ? date.toLocaleDateString('el-GR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }) : '';

  const formattedTime = mounted ? date.toLocaleTimeString('el-GR', {
    hour: 'numeric',
    minute: '2-digit'
  }) : '';


  return (
    <div className="date-outer mb-[30px]">
      <div className="date-header py-[10px] border-b border-[#EEEEEE] mb-[15px]">
        <h2 className="text-[12px] text-[#666666] font-sans">
          <span>{formattedDate}</span>
        </h2>
      </div>
      
      <article className="post hentry px-[15px] pb-[15px]">
        <h3 className="post-title text-[22px] font-sans text-[#000080] leading-[1.4] mb-[10px]">
          <Link href={`/post/${post.id.split('-').pop()}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>

        <div 
          className="post-body font-serif text-[16px] text-[#333333] leading-[1.5]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="post-footer mt-[20px] pt-[10px] border-t border-[#EEEEEE] flex flex-col gap-[15px]">
          <div className="flex justify-between items-center">
            <div className="post-labels text-[11px] text-[#666666]">
              Ετικέτες: {post.labels.map((label, i) => (
                <React.Fragment key={label}>
                  <Link href={`/search/label/${label}`} className="text-[#2244BB] hover:underline">
                    {label}
                  </Link>
                  {i < post.labels.length - 1 && ', '}
                </React.Fragment>
              ))}
            </div>
            <div className="post-author text-[12px] text-[#666666] italic">
              Αναρτήθηκε από <span className="underline">{post.author}</span> στις {formattedTime}
            </div>
          </div>
          
          <div className="flex gap-[10px] items-center">
            <button 
              onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.origin + '/post/' + post.id.split('-').pop())}&text=${encodeURIComponent(post.title)}`, '_blank')}
              className="w-[20px] h-[20px] bg-[#00acee] flex items-center justify-center rounded-sm text-white"
              title="Share to Twitter"
            >
              <svg className="w-[12px] h-[12px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </button>
            <button 
              onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + '/post/' + post.id.split('-').pop())}`, '_blank')}
              className="w-[20px] h-[20px] bg-[#3b5998] flex items-center justify-center rounded-sm text-white"
              title="Share to Facebook"
            >
              <svg className="w-[12px] h-[12px]" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-2.221c0-.822.112-1.117 1.054-1.117h2.304v-4.662c-.442-.059-1.37-.159-2.606-.159-2.564 0-4.394 1.536-4.394 4.609v2.55h-3z"/></svg>
            </button>
            <button 
              onClick={() => window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.origin + '/post/' + post.id.split('-').pop())}&description=${encodeURIComponent(post.title)}`, '_blank')}
              className="w-[20px] h-[20px] bg-[#bd081c] flex items-center justify-center rounded-sm text-white"
              title="Share to Pinterest"
            >
              <svg className="w-[12px] h-[12px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.091.379-.293 1.196-.333 1.357-.053.211-.174.255-.402.149-1.503-.699-2.443-2.895-2.443-4.659 0-3.793 2.757-7.276 7.946-7.276 4.173 0 7.413 2.973 7.413 6.944 0 4.144-2.613 7.48-6.237 7.48-1.218 0-2.365-.632-2.757-1.379 0 0-.603 2.296-.749 2.857-.272 1.04-.997 2.345-1.484 3.137 1.124.346 2.316.533 3.551.533 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
            </button>
            <Link 
              href={`/post/${post.id.split('-').pop()}`}
              className="ml-auto text-[12px] text-[#2244BB] font-bold hover:underline"
            >
              Διαβάστε περισσότερα »
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
};

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="main-inner flex flex-col gap-[20px]">
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
