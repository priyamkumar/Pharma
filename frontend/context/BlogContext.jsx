import { createContext, useContext, useState } from "react";
import axios from "axios";
import { server } from "../src/main";

const BlogContext = createContext();

export default function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(false);

  const fetchBlogs = async () => {
    try {
      setBlogsLoading(true);
      const { data } = await axios.get(`${server}/api/v1/blog/recent`);
      setBlogs(data.blogs);
    } catch (err) {
      console.error("Error fetching blogs", err);
    } finally {
      setBlogsLoading(false);
    }
  };

  return (
    <BlogContext.Provider value={{ blogs, blogsLoading, fetchBlogs }}>
      {children}
    </BlogContext.Provider>
  );
}

export const useBlog = () => useContext(BlogContext);