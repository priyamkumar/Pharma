import { create } from "zustand";
import axios from "axios";
import { server } from "../src/main";

export const useDivisionsStore = create((set) => ({
  divisions: [],
  divisionsLoading: false,
  fetchDivisions: async () => {
    try {
      set({ divisionsLoading: true });
      const { data } = await axios.get(`${server}/api/v1/division/`);
      set({ divisions: data.divisions });
    } catch (err) {
      console.error("Error fetching Divisions", err);
    } finally {
      set({ divisionsLoading: false });
    }
  },
}));
