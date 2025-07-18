import { ChevronRight, FolderOpen, Tag } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import GradientCircularProgress from "./Loader";
import { useBlogStore } from "../store/blogStore";
import { Box } from "@mui/material";
import SEO from "./SEO";
import SubscribeNewsletter from "./SubscribeNewsletter";

const capitalizeWords = (str) => {
  if (!str) return "";
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

const Blog = () => {
  const { blogs, blogsLoading, fetchBlogs, allTags, allCategories } =
    useBlogStore();

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get initial filter values from URL params
  const initialCategory = searchParams.get("category");
  const initialTag = searchParams.get("tag");

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedTag, setSelectedTag] = useState(initialTag);

  useEffect(() => {
    if (blogs.length === 0) fetchBlogs();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedCategory) params.set("category", selectedCategory);
    if (selectedTag) params.set("tag", selectedTag);

    setSearchParams(params);
  }, [selectedCategory, selectedTag, setSearchParams]);

  let filteredPosts = [];
  // Filter posts based on selections
  if (blogs)
    filteredPosts = blogs.filter((post) => {
      const categoryMatch = selectedCategory
        ? post.categories
            .map((c) => c.toLowerCase())
            .includes(selectedCategory.toLowerCase())
        : true;
      const tagMatch = selectedTag ? post.tags.includes(selectedTag) : true;
      return categoryMatch && tagMatch;
    });

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedTag(null);
    setSearchParams({});
  };

  return blogsLoading ? (
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
      <SEO slug="blogs" />
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
            <span className="font-bold text-blue-800">Blogs</span>
          </nav>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">
              Blogs
            </h1>
            {blogs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No posts found.</p>
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">
                  No posts found with the selected filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="cursor-pointer mt-4 px-4 py-2 bg-[#129349] text-white rounded hover:bg-[#015c30]"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* Image Section */}
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image.url}
                        alt={post.slug}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-2 text-gray-800">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.metaDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.map((category) => (
                          <span
                            key={category}
                            className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-colors ${
                              selectedCategory?.toLowerCase() ===
                              category.toLowerCase()
                                ? "bg-blue-500 text-white"
                                : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCategory(
                                selectedCategory === category ? null : category
                              );
                            }}
                          >
                            {capitalizeWords(category)}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-2 py-1 rounded text-xs cursor-pointer transition-colors ${
                              selectedTag === tag
                                ? "bg-[#129349] text-white"
                                : "bg-[#ddfbe9] text-green-800 hover:bg-green-200"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedTag(selectedTag === tag ? null : tag);
                            }}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More Button */}
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-500">
                          <span>{post.date}</span>
                        </div>
                        <button
                          onClick={() => navigate(`/blogs/${post.slug}`)}
                          className="cursor-pointer px-4 py-2 bg-[#129349] text-white rounded-lg hover:bg-[#015c30] transition-colors font-medium"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FolderOpen className="w-5 h-5" />
                Categories
              </h3>
              <ul className="space-y-2">
                {allCategories.map((category) => (
                  <li key={category.rawName}>
                    <button
                      className={`cursor-pointer w-full text-left px-3 py-2 rounded flex justify-between items-center transition-colors ${
                        selectedCategory === category.rawName
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() =>
                        setSelectedCategory(
                          selectedCategory === category.rawName
                            ? null
                            : category.rawName
                        )
                      }
                    >
                      <span>{category.name}</span>
                      <span className="text-xs text-black bg-gray-200 rounded-full px-2 py-1">
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
                    className={`cursor-pointer px-3 py-1 rounded-full text-sm transition-colors flex items-center ${
                      selectedTag === tag
                        ? "bg-[#129349] text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() =>
                      setSelectedTag(selectedTag === tag ? null : tag)
                    }
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {(selectedCategory || selectedTag) && (
              <div className="mt-6 text-center">
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
            <SubscribeNewsletter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
