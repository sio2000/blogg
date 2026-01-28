const fs = require('fs');

const postsData = JSON.parse(fs.readFileSync('posts.json', 'utf8'));
const pagesData = JSON.parse(fs.readFileSync('pages.json', 'utf8'));

const extractPost = (entry) => {
  return {
    id: entry.id.$t,
    published: entry.published.$t,
    updated: entry.updated.$t,
    title: entry.title.$t,
    content: entry.content.$t,
    labels: entry.category ? entry.category.map(c => c.term.trim()) : [],
    link: entry.link.find(l => l.rel === 'alternate').href,
    author: entry.author[0].name.$t
  };
};

const posts = postsData.feed.entry.map(extractPost);
const pages = pagesData.feed.entry.map(extractPost);

const allContent = {
  posts,
  pages
};

fs.writeFileSync('src/lib/content.json', JSON.stringify(allContent, null, 2));
console.log('Processed content saved to src/lib/content.json');
