import { Calendar, ChevronRight, FolderOpen, Tag } from "lucide-react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GradientCircularProgress from "./Loader";
import { useEffect } from "react";
import axios from "axios";
import { server } from "./main";

// Helper function to capitalize words
const capitalizeWords = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

// Sample data for categories
const categories = [
  { name: "technology", count: 12 },
  { name: "web development", count: 18 },
  { name: "frontend", count: 15 },
  { name: "backend", count: 8 },
  { name: "css", count: 10 },
  { name: "design", count: 6 },
];

// Sample data for tags
const tags = [
  "react",
  "javascript",
  "css",
  "html",
  "nodejs",
  "mongodb",
  "express",
  "tailwind",
  "typescript",
  "hooks",
  "components",
  "api",
];

// Sample data for recent blogs
const recentBlogs = [
  {
    id: "665d35f981f91c1e23f4f7d4",
    title: "Getting Started with TypeScript in React",
    createdAt: "2025-06-12T10:15:00Z",
    image: {
      url: "https://via.placeholder.com/100x100/06b6d4/ffffff?text=TS",
    },
  },
  {
    id: "665d35f981f91c1e23f4f7d5",
    title: "CSS Grid vs Flexbox: When to Use Which",
    createdAt: "2025-06-10T14:20:00Z",
    image: {
      url: "https://via.placeholder.com/100x100/10b981/ffffff?text=CSS",
    },
  },
  {
    id: "665d35f981f91c1e23f4f7d6",
    title: "Building RESTful APIs with Node.js",
    createdAt: "2025-06-08T09:45:00Z",
    image: {
      url: "https://via.placeholder.com/100x100/f59e0b/ffffff?text=API",
    },
  },
  {
    id: "665d35f981f91c1e23f4f7d7",
    title: "Modern JavaScript ES6+ Features",
    createdAt: "2025-06-05T11:30:00Z",
    image: {
      url: "https://via.placeholder.com/100x100/ef4444/ffffff?text=JS",
    },
  },
];

const SingleBlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentBlogPost, setCurrentBlogPost] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const { data: blogData } = await axios.get(
          `${server}/api/v1/blog/details/${params.name}`
        );
        setCurrentBlogPost(blogData.blog);

        const { data: recentData } = await axios.get(
          `${server}/api/v1/blog/recent`
        );
        const filtered = recentData.blogs.filter(
          (blog) => blog._id !== blogData.blog._id
        );
        setRecentBlogs(filtered);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [params.name]);

  const handleCategoryClick = (categoryName) => {
    navigate(`/blogs?category=${encodeURIComponent(categoryName)}`);
  };

  const handleTagClick = (tag) => {
    navigate(`/blogs?tag=${encodeURIComponent(tag)}`);
  };

  const handleRecentBlogClick = (slug) => {
    navigate(`/blogs/${slug}`);
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return loading || !currentBlogPost ? (
    <GradientCircularProgress />
  ) : (
    <div className="min-h-screen py-8 px-4">
      <div className="md:max-w-[75vw] mx-auto">
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <span
              className="hover:text-blue-600 transition-colors cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>
            <ChevronRight className="w-4 h-4" />
            <span
              className="hover:text-blue-600 transition-colors cursor-pointer"
              onClick={() => navigate("/blogs")}
            >
              Blog
            </span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-bold text-blue-800">Current Post</span>
          </nav>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-3/4">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={currentBlogPost.image.url}
                  alt={currentBlogPost.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {currentBlogPost.title}
                </h1>

                <div className="flex items-center text-gray-600 mb-6">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{formatDate(currentBlogPost.createdAt)}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {currentBlogPost.categories.map((category) => (
                    <span
                      key={category}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 cursor-pointer transition-colors"
                      onClick={() => handleCategoryClick(category)}
                    >
                      {capitalizeWords(category)}
                    </span>
                  ))}
                </div>

                <div className="prose prose-lg max-w-none">
                  {currentBlogPost.content.map((section, index) => (
                    <div key={index} className="mb-6">
                      {section.heading && (
                        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
                          {section.heading}
                        </h2>
                      )}
                      <div
                        className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: section.body }}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Tag className="w-5 h-5" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentBlogPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors"
                        onClick={() => handleTagClick(tag)}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </main>

          <aside className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FolderOpen className="w-5 h-5" />
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <button
                      className={`w-full text-left px-3 py-2 rounded flex justify-between items-center transition-colors ${
                        selectedCategory === category.name
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => handleCategoryClick(category.name)}
                    >
                      <span>{capitalizeWords(category.name)}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800 transition-colors"
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Recent Posts
              </h3>
              <div className="space-y-4">
                {recentBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group"
                    onClick={() => handleRecentBlogClick(blog.slug)}
                  >
                    <img
                      src={blog.image.url}
                      alt={blog.title}
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-800 text-sm leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(blog.createdAt)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
