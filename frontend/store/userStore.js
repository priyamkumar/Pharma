import { create } from 'zustand';
import axios from 'axios';
import { server } from '../src/main';

export const useUserStore = create((set) => ({
  user: null,
  loading: false,
  isAuthenticated: false,
  
  loadUser: async () => {
    try {
      set({ loading: true });
      const { data } = await axios.get(`${server}/api/v1/user/load`, {
        withCredentials: true,
      });
      set({ 
        user: data.user, 
        isAuthenticated: true,
        loading: false 
      });
    } catch (err) {
      set({ 
        user: null, 
        isAuthenticated: false,
        loading: false 
      });
    }
  },
  
  setUser: (user) => set({ user }),
  setIsAuthenticated: (isAuth) => set({ isAuthenticated: isAuth })
}));