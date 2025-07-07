import { Calendar, ChevronRight, FolderOpen, Tag } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GradientCircularProgress from "./Loader";
import axios from "axios";
import { server } from "./main";
import { Box } from "@mui/material";
import { useBlogStore } from "../store/blogStore";
import SubscribeNewsletter from "./SubscribeNewsletter";

// Helper function to capitalize words
const capitalizeWords = (str) => {
  if (!str) return "";
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

const SingleBlogPage = () => {
  const [currentBlogPost, setCurrentBlogPost] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  // Use blog store for categories and tags
  const { allCategories, allTags, blogsLoading, fetchBlogs } = useBlogStore();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        // Fetch current blog post
        const { data: blogData } = await axios.get(
          `${server}/api/v1/blog/details/${params.name}`
        );
        setCurrentBlogPost(blogData.blog);

        // Fetch recent blogs
        const { data: recentData } = await axios.get(
          `${server}/api/v1/blog/recent`
        );
        const filtered = recentData.blogs.filter(
          (blog) => blog._id !== blogData.blog._id
        );
        setRecentBlogs(filtered);

        // Fetch all blogs if not already loaded (for categories/tags)
        if (allCategories.length === 0 || allTags.length === 0) {
          fetchBlogs();
        }
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
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="91vh"
    >
      <GradientCircularProgress />
    </Box>
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
              Blogs
            </span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-bold text-blue-800">
              {currentBlogPost ? currentBlogPost.title : "Loading..."}
            </span>{" "}
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
                {allCategories.map((category) => (
                  <li key={category.rawName}>
                    <button
                      className="cursor-pointer w-full text-left px-3 py-2 rounded flex justify-between items-center hover:bg-gray-100 transition-colors"
                      onClick={() => handleCategoryClick(category.rawName)}
                    >
                      <span>{category.name}</span>
                      <span className="text-xs bg-gray-200 rounded-full px-2 py-1">
                        {category.count}
                      </span>
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
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    className="cursor-pointer px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Recent Blogs
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
            <SubscribeNewsletter />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
