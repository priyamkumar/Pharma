import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { server } from "../src/main";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loadUser = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${server}/api/v1/user/load`, {
        withCredentials: true,
      });
      setUser(data.user);
      setIsAuthenticated(true);
    } catch (err) {
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);
  
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const UserState = () => {
  return useContext(UserContext);
};
