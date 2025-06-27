import React, { useEffect } from "react";
import { Calendar, Plus } from "lucide-react";
import GradientCircularProgress from "./Loader";
import { Link } from "react-router-dom";
import { useBlogStore } from '../store/blogStore';

const BlogsSection = () => {
  const { blogs, blogsLoading, fetchBlogs } = useBlogStore();
  const blogData = (blogs.length > 0 ? blogs : []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return blogsLoading ? (
    <GradientCircularProgress />
  ) : (
    <section className="max-w-[75vw] mx-auto py-16 px-4">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Blogs</h2>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((blog) => (
          <article
            key={blog.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Blog Image */}
            <div className="relative overflow-hidden">
              <img
                src={blog.image.url}
                alt={blog.title}
                className="w-full h-48 object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <Calendar size={14} />
                  <span>{formatDate(blog.createdAt)}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {blog.metaDescription}
                </p>
              </div>

              {/* View More Link */}
              <div className="mt-auto pt-4">
                <Link
                  to={`/blogs/${blog.slug}`}
                  className="cursor-pointer inline-flex items-center gap-2 text-[#129349] hover:text-[#015c30] font-medium text-sm transition-colors duration-200 group"
                >
                  <span>View More</span>
                  <Plus
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
