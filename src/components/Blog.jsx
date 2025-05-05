import '../styles/Blog.css';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "Understanding the Essence of Bhagavad Gita",
    excerpt: "Explore the timeless wisdom of Bhagavad Gita and how its teachings can transform your life in the modern world.",
    image: "https://images.unsplash.com/photo-1621507492977-2b9d7cd29da0?q=80&w=1000",
    author: "Swami Ramananda",
    date: "May 2, 2024",
    readTime: "8 min read",
    category: "Spiritual Wisdom"
  };
  
  const recentPosts = [
    {
      id: 2,
      title: "The Science of Mantra Meditation",
      excerpt: "Discover how mantra meditation works and its profound effects on consciousness and well-being.",
      image: "https://images.unsplash.com/photo-1621507492977-2b9d7cd29da0?q=80&w=1000",
      author: "Krishna Das",
      date: "April 25, 2024",
      readTime: "6 min read",
      category: "Meditation"
    },
    {
      id: 3,
      title: "Living a Balanced Life: Lessons from Bhagavad Gita",
      excerpt: "How the ancient wisdom of Bhagavad Gita can help us maintain balance in our hectic modern lives.",
      image: "https://images.unsplash.com/photo-1621507492977-2b9d7cd29da0?q=80&w=1000",
      author: "Radha Devi",
      date: "April 18, 2024",
      readTime: "5 min read",
      category: "Lifestyle"
    },
    {
      id: 4,
      title: "The Spiritual Significance of Prasadam",
      excerpt: "Understanding the deeper meaning and benefits of sanctified vegetarian food in spiritual practice.",
      image: "https://images.unsplash.com/photo-1621507492977-2b9d7cd29da0?q=80&w=1000",
      author: "Anand Gopal",
      date: "April 10, 2024",
      readTime: "4 min read",
      category: "Food & Spirituality"
    }
  ];
  
  const categories = [
    "Spiritual Wisdom",
    "Meditation",
    "Lifestyle",
    "Food & Spirituality",
    "Festivals",
    "Philosophy",
    "Community Service"
  ];

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 className="section-title">Spiritual Insights</h2>
        
        <div className="blog-content">
          <div className="blog-main">
            <div className="featured-post">
              <div className="featured-image">
                <img src={featuredPost.image} alt={featuredPost.title} />
                <div className="featured-category">{featuredPost.category}</div>
              </div>
              <div className="featured-details">
                <h3>{featuredPost.title}</h3>
                <p className="post-meta">
                  <span className="post-author">{featuredPost.author}</span>
                  <span className="post-date">{featuredPost.date}</span>
                  <span className="post-read-time">{featuredPost.readTime}</span>
                </p>
                <p className="post-excerpt">{featuredPost.excerpt}</p>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
            
            <div className="recent-posts">
              <h3 className="recent-posts-title">Recent Articles</h3>
              <div className="posts-grid">
                {recentPosts.map((post) => (
                  <div className="post-card" key={post.id}>
                    <div className="post-image">
                      <img src={post.image} alt={post.title} />
                      <div className="post-category">{post.category}</div>
                    </div>
                    <div className="post-details">
                      <h4>{post.title}</h4>
                      <p className="post-meta">
                        <span className="post-author">{post.author}</span>
                        <span className="post-date">{post.date}</span>
                      </p>
                      <p className="post-excerpt">{post.excerpt}</p>
                      <button className="read-more-btn small">Read More</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="blog-sidebar">
            <div className="sidebar-widget">
              <h3 className="widget-title">Categories</h3>
              <ul className="category-list">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a href="#" className="category-link">{category}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="sidebar-widget">
              <h3 className="widget-title">Subscribe</h3>
              <p>Stay updated with our latest articles and spiritual insights.</p>
              <form className="subscribe-form">
                <input type="email" placeholder="Your Email" required />
                <button type="submit" className="subscribe-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="blog-cta">
          <a href="#" className="view-all-btn">View All Articles</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
