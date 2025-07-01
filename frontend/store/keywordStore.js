import { create } from 'zustand';
import axios from 'axios';
import { server } from '../src/main';

export const useKeywordStore = create((set) => ({
  tags: [],
  keywordsLoading: false,
  fetchKeywords: async () => {
    try {
      set({ keywordsLoading: true });
      const { data } = await axios.get(`${server}/api/v1/seo/keywords`);
      set({ tags: data.keywords });
    } catch (err) {
      console.error("Error fetching Keywords", err);
    } finally {
      set({ keywordsLoading: false });
    }
  }
}));