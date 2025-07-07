import { create } from 'zustand';
import axios from 'axios';
import { server } from '../src/main';

// Helper function to capitalize words
const capitalizeWords = (str) => {
  if (!str) return '';
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const useBlogStore = create((set) => ({
  blogs: [],
  allTags: [],
  allCategories: [],
  blogsLoading: false,
  
  fetchBlogs: async () => {
    try {
      set({ blogsLoading: true });
      const { data } = await axios.get(`${server}/api/v1/blog/`);
      
      // Extract unique tags
      const tagsSet = new Set();
      // Extract categories with counts
      const categoryMap = new Map();
      
      data.blogs.forEach((blog) => {
        // Process tags
        if (blog.tags && Array.isArray(blog.tags)) {
          blog.tags.forEach((tag) => tagsSet.add(tag));
        }
        
        // Process categories
        if (blog.categories && Array.isArray(blog.categories)) {
          blog.categories.forEach((category) => {
            const normalizedCategory = category.toLowerCase();
            const currentCount = categoryMap.get(normalizedCategory) || 0;
            categoryMap.set(normalizedCategory, currentCount + 1);
          });
        }
      });
      
      // Convert to sorted arrays
      const allTags = Array.from(tagsSet).sort();
      const allCategories = Array.from(categoryMap.entries())
        .map(([name, count]) => ({
          name: capitalizeWords(name),
          rawName: name, // Store original for filtering
          count
        }))
        .sort((a, b) => b.count - a.count); // Sort by count descending
      
      set({ 
        blogs: data.blogs,
        allTags,
        allCategories,
        blogsLoading: false 
      });
      
    } catch (err) {
      console.error("Error fetching blogs", err);
      set({ blogsLoading: false });
    }
  }
}));