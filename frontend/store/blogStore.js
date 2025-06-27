import { create } from 'zustand';
import axios from 'axios';
import { server } from '../src/main';

export const useBlogStore = create((set) => ({
  blogs: [],
  blogsLoading: false,
  fetchBlogs: async () => {
    try {
      set({ blogsLoading: true });
      const { data } = await axios.get(`${server}/api/v1/blog/`);
      set({ blogs: data.blogs });
    } catch (err) {
      console.error("Error fetching blogs", err);
    } finally {
      set({ blogsLoading: false });
    }
  }
}));