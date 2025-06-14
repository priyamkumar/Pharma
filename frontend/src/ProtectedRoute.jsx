import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { UserState } from "../context/UserContext";

export default function ProtectedRoute({ children }) {
  const {user, loading} = UserState();
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading) {
      navigate("/admin");
    }
  }, [loading, navigate]);

  if (loading) return <Loader />;
  return children;
}