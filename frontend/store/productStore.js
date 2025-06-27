import { create } from 'zustand';
import axios from 'axios';
import { server } from '../src/main';

export const useProductStore = create((set) => ({
  products: [],
  productsLoading: false,
  fetchProducts: async () => {
    try {
      set({ productsLoading: true });
      const { data } = await axios.get(`${server}/api/v1/product`);
      set({ products: data.products });
    } catch (err) {
      // Handle error
    } finally {
      set({ productsLoading: false });
    }
  }
}));