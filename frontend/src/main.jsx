import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import Error from "./Error.jsx";
import Franchise from "./Franchise.jsx";
import ContactUs from "./ContactUs.jsx";
import AboutUs from "./AboutUs.jsx";
import Careers from "./Careers.jsx";
import Products from "./Products.jsx";
import ProfitMarginCalculator from "./ProfitMarginCalculator.jsx";
import PtrPtsCalculator from "./PtrPtsCalculator.jsx";
import MedicineProductCard from "./SingleProduct.jsx";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import TermsAndConditions from "./TermsAndConditions.jsx";
import NISPage from "./NISPage.jsx";
import AdminPanel from "./AdminPanel.jsx";
import UserProvider from "../context/UserContext.jsx";
import { Toaster } from "react-hot-toast";
import BlogPage from "./BlogPage.jsx";
import SingleBlogPage from "./SingleBlog.jsx";
import { HelmetProvider } from "react-helmet-async";
import Unsubscribe from "./Unsubscribe.jsx";

export const server = "http://localhost:5005";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/franchise",
        element: <Franchise />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/profit-margin-calculator",
        element: <ProfitMarginCalculator />,
      },
      {
        path: "/ptr-pts-calculator",
        element: <PtrPtsCalculator />,
      },
      {
        path: "/products/:id",
        element: <MedicineProductCard />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/t&c",
        element: <TermsAndConditions />,
      },
      {
        path: "/now-in-stock",
        element: <NISPage />,
      },
      {
        path: "/blogs",
        element: <BlogPage />,
      },
      {
        path: "/blogs/:name",
        element: <SingleBlogPage />,
      },
      {
        path: "/unsubscribe/:email",
        element: <Unsubscribe />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <UserProvider>
        <AdminPanel />
        <Toaster />
      </UserProvider>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
