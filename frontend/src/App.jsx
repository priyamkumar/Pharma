import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { Toaster } from "react-hot-toast";
import SocialOverlay from "./SocialOverlay";
import SEO from "./SEO";

export default function App() {
  return (
    <div className="App font-sans">
      <SEO slug="home" />
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
      <SocialOverlay />
    </div>
  );
}
