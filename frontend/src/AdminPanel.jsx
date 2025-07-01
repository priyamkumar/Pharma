import React, { useState, useEffect } from "react";
import {
  Home,
  Package,
  Mail,
  User,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Check,
  X,
  Menu,
  Eye,
  EyeOff,
  Trash2 as ImageTrash,
  Layers,
  FileText,
  Search,
  FileTextIcon,
  Tag,
  LayoutGridIcon,
} from "lucide-react";
import axios from "axios";
import { server } from "./main";
import { UserState } from "../context/UserContext";
import toast from "react-hot-toast";

const AdminPanel = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const {
    user,
    setUser,
    loading,
    setLoading,
    isAuthenticated,
    setIsAuthenticated,
  } = UserState();

  const openImagePreview = (imageSrc) => {
    setPreviewImage(imageSrc);
    setShowImagePreview(true);
  };

  // Function to close image preview
  const closeImagePreview = () => {
    setPreviewImage(null);
    setShowImagePreview(false);
  };

  const [products, setProducts] = useState([]);

  const [messages, setMessages] = useState([]);

  const [divisions, setDivisions] = useState([]);

  const [showAddDivisionModal, setShowAddDivisionModal] = useState(false);

  const [newDivision, setNewDivision] = useState({
    name: "",
    description: "",
    image: null,
  });
  const [editingDivision, setEditingDivision] = useState(null);

  const [newProduct, setNewProduct] = useState({
    name: "",
    composition: "",
    brand: "PRIMA",
    category: "Capsules",
    packagingType: "",
    packSize: "",
    pricing: {
      mrp: "",
      ptr: "",
      pts: "",
    },
    shortDescription: "",
    fullDescription: "",
    sideEffects: "",
    importantNotice: "",
    storageCondition: "",
    inStock: true,
    images: [],
    indication: "",
    therapeutic: "",
  });

  const [blogs, setBlogs] = useState([]);
  const [showAddBlogModal, setShowAddBlogModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [newBlog, setNewBlog] = useState({
    title: "",
    slug: "",
    tags: "",
    categories: "",
    image: null,
    content: [{ heading: "", body: "" }],
    metaDescription: "",
  });

  const [seoData, setSeoData] = useState([]);
  const [showAddSeoModal, setShowAddSeoModal] = useState(false);
  const [editingSeo, setEditingSeo] = useState(null);
  const [newSeo, setNewSeo] = useState({
    slug: "",
    title: "",
    description: "",
    keywords: "",
  });

  const [keywords, setKeywords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredKeywords = keywords.filter((keyword) =>
    keyword.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
      const { data } = await axios.post(
        `${server}/api/v1/user/login`,
        {
          email: loginData.email,
          password: loginData.password,
        },
        config
      );
      setUser(data.user);
      setIsAuthenticated(true);
      setCurrentPage("dashboard");
      toast.success("Logged in.");
    } catch (err) {
      setIsAuthenticated(false);
      toast.error(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      await axios.get(`${server}/api/v1/user/logout`, {
        withCredentials: true,
      });
      setUser(null);
      setIsAuthenticated(false);
      setCurrentPage("dashboard");
      toast.success("Logged out.");
    } catch (err) {
      setIsAuthenticated(true);
      toast.error("Server Error.");
    } finally {
      setLoginData({ email: "", password: "" });
      setLoading(false);
    }
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${server}/api/v1/product`);
      setProducts(data.products);
    } catch (err) {
      toast.error("Product fetch Error.");
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${server}/api/v1/message`);
      setMessages(data.messages);
    } catch (err) {
      toast.error("Message fetch Error.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.composition && newProduct.packSize) {
      const product = {
        id: Date.now(),
        ...newProduct,
        pricing: {
          mrp: parseInt(newProduct.pricing.mrp) || 0,
          ptr: parseInt(newProduct.pricing.ptr) || 0,
          pts: parseInt(newProduct.pricing.pts) || 0,
        },
      };
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        };
        const { data } = await axios.post(
          `${server}/api/v1/product/admin/create`,
          product,
          config
        );
        setProducts([...products, data.product]);
        setNewProduct({
          name: "",
          composition: "",
          brand: "PRIMA",
          category: "Capsules",
          packagingType: "",
          packSize: "",
          pricing: { mrp: "", ptr: "", pts: "" },
          shortDescription: "",
          fullDescription: "",
          sideEffects: "",
          importantNotice: "",
          storageCondition: "",
          inStock: true,
          images: [],
          indication: "",
          therapeutic: "",
        });
        setShowAddProductModal(false);
        toast.success("Product added successfully.");
      } catch (err) {
        toast.error("Server Error.");
      }
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setNewProduct({
      name: product.name,
      composition: product.composition,
      brand: product.brand,
      category: product.category,
      packagingType: product.packagingType,
      packSize: product.packSize,
      pricing: { ...product.pricing },
      shortDescription: product.shortDescription,
      fullDescription: product.fullDescription,
      sideEffects: product.sideEffects,
      importantNotice: product.importantNotice,
      storageCondition: product.storageCondition,
      inStock: product.inStock,
      images: product.images || [], // Keep original structure with url and public_id
      id: product._id,
      indication: product.indication,
      therapeutic: product.therapeutic,
    });
    setShowAddProductModal(true);
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.category && newProduct.pricing.mrp) {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        };

        // Prepare images for backend - separate base64 and existing images
        const imagesToSend = newProduct.images.map((img) => {
          // If it's a string (base64), send as is
          if (typeof img === "string") {
            return img;
          }
          // If it has url property (existing image), send the url
          if (img.url) {
            return img.url;
          }
          return img;
        });

        const productData = {
          ...newProduct,
          images: imagesToSend,
        };

        const { data } = await axios.put(
          `${server}/api/v1/product/admin/${newProduct.id}`,
          productData,
          config
        );

        setProducts(
          products.map((p) => (p._id === data.product._id ? data.product : p))
        );
        setNewProduct({
          name: "",
          composition: "",
          brand: "PRIMA",
          category: "Capsules",
          packagingType: "",
          packSize: "",
          pricing: { mrp: "", ptr: "", pts: "" },
          shortDescription: "",
          fullDescription: "",
          sideEffects: "",
          importantNotice: "",
          storageCondition: "",
          inStock: true,
          images: [],
          indication: "",
          therapeutic: "",
        });
        setEditingProduct(null);
        setShowAddProductModal(false);
        toast.success("Product updated successfully.");
      } catch (err) {
        toast.error("Server Error.");
      }
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`${server}/api/v1/product/admin/${id}`, {
        withCredentials: true,
      });
      setProducts(products.filter((p) => p._id !== id));
      setShowDeleteModal(false);
      setDeleteItem(null);
      toast.success("Product deleted successfully.");
    } catch (err) {
      toast.error("Server Error.");
    }
  };

  const handleDeleteMessage = async (id) => {
    try {
      const { data } = await axios.delete(`${server}/api/v1/message/delete`, {
        data: { id },
        withCredentials: true,
      });
      setMessages(data.messages);
      setShowDeleteModal(false);
      setDeleteItem(null);
      toast.success("Message deleted successfully.");
    } catch (err) {
      toast.error("Server Error.");
    }
  };

  const readMessage = async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
      const { data } = await axios.put(
        `${server}/api/v1/message/read`,
        { id },
        config
      );
      setMessages(data.messages);
      toast.success("Marked as read.");
    } catch (error) {
      toast.error("Server Error.");
    }
  };

  const showConfirmDelete = (item, type) => {
    setDeleteItem({ ...item, type });
    setShowDeleteModal(true);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [...newProduct.images];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        // Add new images as base64 strings
        newImages.push(event.target.result);
        setNewProduct({ ...newProduct, images: newImages });
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    const newImages = [...newProduct.images];
    newImages.splice(index, 1);
    setNewProduct({ ...newProduct, images: newImages });
  };

  const getImageSrc = (img) => {
    if (typeof img === "string") {
      return img; // Base64 string
    }
    if (img && img.url) {
      return img.url; // Cloudinary URL
    }
    return img; // Fallback
  };

  const fetchDivisions = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${server}/api/v1/division`);
      setDivisions(data.divisions);
    } catch (err) {
      toast.error("Error fetching divisions");
    } finally {
      setLoading(false);
    }
  };

  const handleAddDivision = async (e) => {
    e.preventDefault();

    if (newDivision.name && newDivision.description) {
      try {
        // Convert image to base64 if exists
        let base64Image = "";
        if (newDivision.image) {
          base64Image = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(newDivision.image);
            reader.onload = () => resolve(reader.result);
          });
        }

        const divisionData = {
          name: newDivision.name,
          description: newDivision.description,
          ...(base64Image && { image: base64Image }),
        };

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        };

        const { data } = await axios.post(
          `${server}/api/v1/division/admin/create`,
          divisionData,
          config
        );

        setDivisions([...divisions, data.division]);
        setNewDivision({ name: "", description: "", image: null });
        setShowAddDivisionModal(false);
        toast.success("Division added successfully");
      } catch (err) {
        const errorMessage =
          err.response?.data?.message || "Error adding division";
        toast.error(errorMessage);
        console.error("Add Division Error:", err);
      }
    }
  };

  const handleEditDivision = (division) => {
    setEditingDivision(division);
    setNewDivision({
      name: division.name,
      description: division.description,
      image: division.image,
    });
    setShowAddDivisionModal(true);
  };

  const handleUpdateDivision = async (e) => {
    e.preventDefault();

    try {
      let base64Image = "";
      if (newDivision.image) {
        base64Image = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(newDivision.image);
          reader.onload = () => resolve(reader.result);
        });
      }
      const divisionData = {
        name: newDivision.name,
        description: newDivision.description,
        ...(base64Image && { image: base64Image }),
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
      const { data } = await axios.put(
        `${server}/api/v1/division/admin/${editingDivision._id}`,
        divisionData,
        config
      );

      setDivisions(
        divisions.map((d) => (d._id === data.division._id ? data.division : d))
      );
      setNewDivision({ name: "", description: "", image: null });
      setEditingDivision(null);
      setShowAddDivisionModal(false);
      toast.success("Division updated successfully");
    } catch (err) {
      toast.error("Error updating division");
    }
  };

  const handleDeleteDivision = async (id) => {
    try {
      await axios.delete(`${server}/api/v1/division/admin/${id}`, {
        withCredentials: true,
      });
      setDivisions(divisions.filter((d) => d._id !== id));
      setShowDeleteModal(false);
      setDeleteItem(null);
      toast.success("Division deleted successfully");
    } catch (err) {
      toast.error("Server Error");
    }
  };

  const handleDivisionImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewDivision({ ...newDivision, image: e.target.files[0] });
    }
  };

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${server}/api/v1/blog`);
      setBlogs(data.blogs);
    } catch (err) {
      toast.error("Error fetching blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleAddBlog = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };

      // Convert image to base64 if exists
      let base64Image = "";
      if (newBlog.image) {
        base64Image = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(newBlog.image);
          reader.onload = () => resolve(reader.result);
        });
      }

      const blogData = {
        ...newBlog,
        tags: newBlog.tags.split(",").map((tag) => tag.trim()),
        categories: newBlog.categories.split(",").map((cat) => cat.trim()),
        ...(base64Image && { image: base64Image }),
      };

      const { data } = await axios.post(
        `${server}/api/v1/blog/admin/create`,
        blogData,
        config
      );

      setBlogs([...blogs, data.blog]);
      setNewBlog({
        title: "",
        slug: "",
        tags: "",
        categories: "",
        image: null,
        content: [{ heading: "", body: "" }],
        metaDescription: "",
      });
      setShowAddBlogModal(false);
      toast.success("Blog added successfully");
    } catch (err) {
      toast.error(err.response?.data?.message || "Error adding blog");
    }
  };

  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
    setNewBlog({
      title: blog.title,
      slug: blog.slug,
      tags: blog.tags.join(", "),
      categories: blog.categories.join(", "),
      image: blog.image,
      content: [...blog.content],
      metaDescription: blog.metaDescription,
    });
    setShowAddBlogModal(true);
  };

  const handleUpdateBlog = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };

      let base64Image = "";
      if (newBlog.image) {
        base64Image = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(newBlog.image);
          reader.onload = () => resolve(reader.result);
        });
      }

      const blogData = {
        title: newBlog.title,
        slug: newBlog.slug,
        content: newBlog.content,
        metaDescription: newBlog.metaDescription,
        tags: newBlog.tags.split(",").map((tag) => tag.trim()),
        categories: newBlog.categories.split(",").map((cat) => cat.trim()),
        ...(base64Image && { image: base64Image }),
      };

      const { data } = await axios.put(
        `${server}/api/v1/blog/admin/${editingBlog._id}`,
        blogData,
        config
      );

      setBlogs(blogs.map((b) => (b._id === data.blog._id ? data.blog : b)));
      setNewBlog({
        title: "",
        slug: "",
        tags: "",
        categories: "",
        image: null,
        content: [{ heading: "", body: "" }],
        metaDescription: "",
      });
      setEditingBlog(null);
      setShowAddBlogModal(false);
      toast.success("Blog updated successfully");
    } catch (err) {
      toast.error("Error updating blog");
    }
  };

  const handleDeleteBlog = async (id) => {
    try {
      await axios.delete(`${server}/api/v1/blog/admin/${id}`, {
        withCredentials: true,
      });
      setBlogs(blogs.filter((b) => b._id !== id));
      setShowDeleteModal(false);
      setDeleteItem(null);
      toast.success("Blog deleted successfully");
    } catch (err) {
      toast.error("Server Error");
    }
  };

  const handleBlogImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewBlog({ ...newBlog, image: e.target.files[0] });
    }
  };

  const addContentSection = () => {
    setNewBlog({
      ...newBlog,
      content: [...newBlog.content, { heading: "", body: "" }],
    });
  };

  const removeContentSection = (index) => {
    const newContent = [...newBlog.content];
    newContent.splice(index, 1);
    setNewBlog({ ...newBlog, content: newContent });
  };

  const updateContentSection = (index, field, value) => {
    const newContent = [...newBlog.content];
    newContent[index][field] = value;
    setNewBlog({ ...newBlog, content: newContent });
  };

  const fetchSeo = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${server}/api/v1/seo`);
      setSeoData(data.seos);
    } catch (err) {
      toast.error("Error fetching SEO data");
    } finally {
      setLoading(false);
    }
  };

  const handleAddSeo = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };

      const { data } = await axios.post(
        `${server}/api/v1/seo/admin`,
        newSeo,
        config
      );

      setSeoData([...seoData, data.seo]);
      setNewSeo({ slug: "", title: "", description: "", keywords: "" });
      setShowAddSeoModal(false);
      toast.success("SEO entry added successfully");
    } catch (err) {
      toast.error(err.response?.data?.message || "Error adding SEO");
    }
  };

  const handleEditSeo = (seo) => {
    setEditingSeo(seo);
    setNewSeo({
      slug: seo.slug,
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
    });
    setShowAddSeoModal(true);
  };

  const handleUpdateSeo = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };

      const { data } = await axios.put(
        `${server}/api/v1/seo/admin/${editingSeo.slug}`,
        newSeo,
        config
      );
      console.log(data);
      setSeoData(seoData.map((s) => (s._id === data.seo._id ? data.seo : s)));
      setNewSeo({ slug: "", title: "", description: "", keywords: "" });
      setEditingSeo(null);
      setShowAddSeoModal(false);
      toast.success("SEO updated successfully");
    } catch (err) {
      toast.error("Error updating SEO");
    }
  };

  const handleDeleteSeo = async (slug) => {
    try {
      await axios.delete(`${server}/api/v1/seo/admin/${slug}`, {
        withCredentials: true,
      });
      setSeoData(seoData.filter((s) => s.slug !== slug));
      setShowDeleteModal(false);
      setDeleteItem(null);
      toast.success("SEO entry deleted successfully");
    } catch (err) {
      toast.error("Server Error");
    }
  };

  const fetchKeywords = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${server}/api/v1/seo/keywords`);
      setKeywords(data.keywords);
    } catch (err) {
      toast.error("Error fetching Keywords");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchMessages();
    fetchDivisions();
    fetchBlogs();
    fetchSeo();
    fetchKeywords();
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Admin Panel Login
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  type="email"
                  required
                  className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="relative block w-full px-3 py-2 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="cursor-pointer absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="cursor-pointer group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  const renderDashboard = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="cursor-pointer bg-white overflow-hidden shadow rounded-lg transform transition hover:shadow-lg hover:-translate-y-1 hover:bg-gray-50" onClick={() => setCurrentPage("products")}>
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Package className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Products
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {products.length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer bg-white overflow-hidden shadow rounded-lg transform transition hover:shadow-lg hover:-translate-y-1 hover:bg-gray-50" onClick={() => setCurrentPage("messages")}>
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-black-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Messages
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {messages.length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer bg-white overflow-hidden shadow rounded-lg transform transition hover:shadow-lg hover:-translate-y-1 hover:bg-gray-50" onClick={() => setCurrentPage("products")}>
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Check className="h-6 w-6 text-green-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    In Stock
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {products.filter((p) => p.inStock === true).length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer bg-white overflow-hidden shadow rounded-lg transform transition hover:shadow-lg hover:-translate-y-1 hover:bg-gray-50" onClick={() => setCurrentPage("messages")}>
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <X className="h-6 w-6 text-red-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Unread Messages
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {messages.filter((m) => m.read === false).length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="cursor-pointer bg-white overflow-hidden shadow rounded-lg transform transition hover:shadow-lg hover:-translate-y-1 hover:bg-gray-50" onClick={() => setCurrentPage("divisions")}>
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <LayoutGridIcon className="h-6 w-6 text-indigo-400" />{" "}
                {/* Division icon */}
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Divisions
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {divisions.length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Total Blogs Card */}
        <div className="cursor-pointer bg-white overflow-hidden shadow rounded-lg transform transition hover:shadow-lg hover:-translate-y-1 hover:bg-gray-50" onClick={() => setCurrentPage("blogs")}>
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FileTextIcon className="h-6 w-6 text-blue-400" />{" "}
                {/* Blog icon */}
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Blogs
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {blogs.length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Keywords Card */}
        <div className="cursor-pointer bg-white overflow-hidden shadow rounded-lg transform transition hover:shadow-lg hover:-translate-y-1 hover:bg-gray-50" onClick={() => setCurrentPage("seo")}>
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Search className="h-6 w-6 text-green-600" />{" "}
                {/* Keyword icon */}
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    SEO Slugs
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {seoData.length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="cursor-pointer bg-white overflow-hidden shadow rounded-lg transform transition hover:shadow-lg hover:-translate-y-1 hover:bg-gray-50" onClick={() => setCurrentPage("keywords")}>
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Tag className="h-6 w-6 text-orange-400" /> {/* Keyword icon */}
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Keywords
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {keywords.length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Products Management</h1>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {/* Add Images column header */}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Images
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Composition
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pack Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  MRP (₹)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {product.images.length > 0 ? (
                        product.images.slice(0, 3).map((img, idx) => (
                          <div key={idx} className="relative">
                            <img
                              src={img.url}
                              alt={`Product ${idx + 1}`}
                              className="h-10 w-10 object-cover rounded border cursor-pointer"
                              onClick={() => openImagePreview(img.url)}
                            />
                            {idx === 2 && product.images.length > 3 && (
                              <span className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xs font-bold">
                                +{product.images.length - 3}
                              </span>
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="text-xs text-gray-400 italic">
                          No images
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {product.name}
                    </div>
                    <div className="text-sm text-gray-500">{product.brand}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                    {product.composition}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.packagingType} - {product.packSize}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ₹{product.pricing.mrp.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        product.inStock
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditProduct(product)}
                        className="cursor-pointer text-indigo-600 hover:text-indigo-900"
                        title="Edit Product"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => showConfirmDelete(product, "product")}
                        className="cursor-pointer text-red-600 hover:text-red-900"
                        title="Delete Product"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Floating Add Button */}
      <button
        onClick={() => setShowAddProductModal(true)}
        className="cursor-pointer fixed bottom-6 right-6 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-colors z-50"
        title="Add Product"
      >
        <Plus className="h-6 w-6" />
      </button>
    </div>
  );

  const renderMessages = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Messages Management</h1>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {messages.map((message) => (
                <tr key={message._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {message.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {message.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {message.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {message.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {message.createdAt.slice(0, 10)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        message.read === true
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {message.read === true ? "Read" : "Unread"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      {message.read === false && (
                        <button
                          onClick={() => readMessage(message._id)}
                          className="cursor-pointer text-green-600 hover:text-green-900"
                          title="Mark as Read"
                        >
                          <Check className="h-4 w-4" />
                        </button>
                      )}
                      <button
                        onClick={() => showConfirmDelete(message, "message")}
                        className="cursor-pointer text-red-600 hover:text-red-900"
                        title="Delete Message"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderDivisions = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Divisions Management</h1>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {divisions.map((division) => (
                <tr key={division._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    {division.image ? (
                      <img
                        src={division.image.url}
                        alt={division.name}
                        className="h-12 w-12 object-cover rounded cursor-pointer"
                        onClick={() => openImagePreview(division.image.url)}
                      />
                    ) : (
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {division.name}
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 max-w-xs truncate">
                    {division.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditDivision(division)}
                        className="cursor-pointer text-indigo-600 hover:text-indigo-900"
                        title="Edit Division"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => showConfirmDelete(division, "division")}
                        className="cursor-pointer text-red-600 hover:text-red-900"
                        title="Delete Division"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button
        onClick={() => {
          setEditingDivision(null);
          setNewDivision({ name: "", description: "", image: null });
          setShowAddDivisionModal(true);
        }}
        className="cursor-pointer fixed bottom-6 right-6 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-colors z-50"
        title="Add Division"
      >
        <Plus className="h-6 w-6" />
      </button>
    </div>
  );

  const renderBlogs = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Slug
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tags
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Categories
                </th>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {blogs.map((blog) => (
                <tr key={blog._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    {blog.image ? (
                      <img
                        src={blog.image.url}
                        alt={blog.title}
                        className="h-12 w-12 object-cover rounded cursor-pointer"
                        onClick={() => openImagePreview(blog.image.url)}
                      />
                    ) : (
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {blog.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {blog.slug}
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                    <div className="flex flex-wrap gap-1">
                      {blog.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                    <div className="flex flex-wrap gap-1">
                      {blog.categories.map((category, idx) => (
                        <span
                          key={idx}
                          className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditBlog(blog)}
                        className="cursor-pointer text-indigo-600 hover:text-indigo-900"
                        title="Edit Blog"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => showConfirmDelete(blog, "blog")}
                        className="cursor-pointer text-red-600 hover:text-red-900"
                        title="Delete Blog"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button
        onClick={() => {
          setEditingBlog(null);
          setNewBlog({
            title: "",
            slug: "",
            tags: "",
            categories: "",
            image: null,
            content: [{ heading: "", body: "" }],
            metaDescription: "",
          });
          setShowAddBlogModal(true);
        }}
        className="cursor-pointer fixed bottom-6 right-6 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-colors z-50"
        title="Add Blog"
      >
        <Plus className="h-6 w-6" />
      </button>
    </div>
  );

  const renderSeo = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">SEO Management</h1>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Slug
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Keywords
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {seoData.map((seo) => (
                <tr key={seo._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {seo.slug}
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 max-w-xs">
                    {seo.title}
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 max-w-xs">
                    {seo.description}
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                    <div className="flex flex-wrap gap-1">
                      {seo.keywords.split(",").map((keyword, idx) => (
                        <span
                          key={idx}
                          className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                        >
                          {keyword.trim()}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditSeo(seo)}
                        className="cursor-pointer text-indigo-600 hover:text-indigo-900"
                        title="Edit SEO"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => showConfirmDelete(seo, "seo")}
                        className="cursor-pointer text-red-600 hover:text-red-900"
                        title="Delete SEO"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button
        onClick={() => {
          setEditingSeo(null);
          setNewSeo({ slug: "", title: "", description: "", keywords: "" });
          setShowAddSeoModal(true);
        }}
        className="cursor-pointer fixed bottom-6 right-6 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-colors z-50"
        title="Add SEO"
      >
        <Plus className="h-6 w-6" />
      </button>
    </div>
  );

  const renderKeywords = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          SEO Keywords ({filteredKeywords.length})
        </h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search keywords..."
            className="pl-10 pr-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>

      <div className="bg-white shadow rounded-md p-6">
        {filteredKeywords.length > 0 ? (
          <div className="flex flex-wrap gap-3 max-h-[400px] overflow-y-auto">
            {filteredKeywords.map((keyword, idx) => (
              <span
                key={idx}
                className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full shadow-sm transition"
              >
                {keyword.trim()}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No keywords found.</p>
        )}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case "dashboard":
        return renderDashboard();
      case "products":
        return renderProducts();
      case "messages":
        return renderMessages();
      case "divisions":
        return renderDivisions();
      case "blogs":
        return renderBlogs();
      case "seo":
        return renderSeo();
      case "keywords":
        return renderKeywords();
      default:
        return renderDashboard();
    }
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "products", label: "Products", icon: Package },
    { id: "messages", label: "Messages", icon: Mail },
    { id: "divisions", label: "Divisions", icon: Layers },
    { id: "blogs", label: "Blogs", icon: FileText },
    { id: "seo", label: "SEO", icon: Search },
    { id: "keywords", label: "Keywords", icon: Tag },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:relative inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>
        <nav className="mt-8">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setSidebarOpen(false);
                }}
                className={`cursor-pointer w-full flex items-center px-6 py-3 text-left hover:bg-gray-700 transition-colors ${
                  currentPage === item.id
                    ? "bg-gray-700 border-r-4 border-blue-500"
                    : ""
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="cursor-pointer md:hidden text-gray-500 hover:text-gray-700"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-700">
                  Welcome {user.name}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="cursor-pointer flex items-center px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {renderContent()}
        </main>
      </div>

      {/* Add/Edit Product Modal */}
      {showAddProductModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              {editingProduct ? "Edit Product" : "Add New Product"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Column 1 */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Product Name*
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newProduct.name}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Composition*
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newProduct.composition}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        composition: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Brand
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newProduct.brand}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, brand: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Category*
                  </label>
                  <select
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newProduct.category}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, category: e.target.value })
                    }
                  >
                    <option value="Capsules">Capsules</option>
                    <option value="Tablets">Tablets</option>
                    <option value="Syrup">Syrup</option>
                    <option value="Injection">Injection</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Packaging Type*
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newProduct.packagingType}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        packagingType: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Pack Size*
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newProduct.packSize}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, packSize: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Therapeutic*
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newProduct.therapeutic}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        therapeutic: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Indication
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newProduct.indication}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        indication: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Side Effects
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newProduct.sideEffects}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        sideEffects: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Pricing
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="block text-xs text-gray-500">
                        MRP*
                      </label>
                      <input
                        type="number"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newProduct.pricing.mrp}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            pricing: {
                              ...newProduct.pricing,
                              mrp: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500">PTR</label>
                      <input
                        type="number"
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newProduct.pricing.ptr}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            pricing: {
                              ...newProduct.pricing,
                              ptr: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500">PTS</label>
                      <input
                        type="number"
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newProduct.pricing.pts}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            pricing: {
                              ...newProduct.pricing,
                              pts: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Short Description
                  </label>
                  <textarea
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="2"
                    value={newProduct.shortDescription}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        shortDescription: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Description
                  </label>
                  <textarea
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    value={newProduct.fullDescription}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        fullDescription: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Important Notice
                  </label>
                  <textarea
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="2"
                    value={newProduct.importantNotice}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        importantNotice: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Storage Condition
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newProduct.storageCondition}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        storageCondition: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Stock Status
                  </label>
                  <div className="mt-2 flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      checked={newProduct.inStock}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          inStock: e.target.checked,
                        })
                      }
                    />
                    <label className="ml-2 text-sm text-gray-700">
                      In Stock
                    </label>
                  </div>
                </div>
                <div className="col-span-full mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Product Images
                  </label>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {newProduct.images.map((img, idx) => (
                      <div key={idx} className="relative">
                        <img
                          src={getImageSrc(img)}
                          alt={`Preview ${idx}`}
                          className="cursor-pointer h-16 w-16 object-cover rounded border"
                          onClick={() => openImagePreview(getImageSrc(img))}
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(idx)}
                          className="cursor-pointer absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5"
                        >
                          <ImageTrash className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md w-16 h-16 cursor-pointer">
                      <Plus className="h-5 w-5 text-gray-400" />
                      <span className="text-xs text-gray-500 mt-1">Add</span>
                      <input
                        type="file"
                        className="hidden"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Upload up to 5 images (First image will be featured)
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-6">
              <button
                type="button"
                onClick={() => {
                  setShowAddProductModal(false);
                  setEditingProduct(null);
                  setNewProduct({
                    name: "",
                    composition: "",
                    brand: "PRIMA",
                    category: "Capsules",
                    packagingType: "",
                    packSize: "",
                    pricing: { mrp: "", ptr: "", pts: "" },
                    shortDescription: "",
                    fullDescription: "",
                    sideEffects: [],
                    importantNotice: "",
                    storageCondition: "",
                    inStock: true,
                    images: [],
                    therapeutic: "",
                  });
                }}
                className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={
                  editingProduct ? handleUpdateProduct : handleAddProduct
                }
                className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
              >
                {editingProduct ? "Update" : "Add"} Product
              </button>
            </div>
          </div>
        </div>
      )}

      {showImagePreview && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-[60]">
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={previewImage}
              alt="Preview"
              className="max-w-[75vh] max-h-full object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={closeImagePreview}
              className="cursor-pointer absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-black rounded-full p-2 transition-all"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Click outside to close */}
            <div
              className="absolute inset-0 -z-10"
              onClick={closeImagePreview}
            ></div>
          </div>
        </div>
      )}

      {showAddDivisionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              {editingDivision ? "Edit Division" : "Add New Division"}
            </h2>
            <form
              onSubmit={
                editingDivision ? handleUpdateDivision : handleAddDivision
              }
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Division Name*
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newDivision.name}
                    onChange={(e) =>
                      setNewDivision({ ...newDivision, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    value={newDivision.description}
                    onChange={(e) =>
                      setNewDivision({
                        ...newDivision,
                        description: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Image
                  </label>
                  <div className="mt-1 flex items-center gap-4">
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md w-24 h-24 cursor-pointer">
                      {newDivision.image || editingDivision?.image ? (
                        <img
                          src={
                            newDivision.image instanceof File
                              ? URL.createObjectURL(newDivision.image)
                              : newDivision.image?.url ||
                                editingDivision?.image?.url
                          }
                          alt="Preview"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <>
                          <Plus className="h-8 w-8 text-gray-400" />
                          <span className="mt-2 text-xs text-gray-600">
                            Upload
                          </span>
                        </>
                      )}
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleDivisionImageUpload}
                      />
                    </label>
                    {(newDivision.image || editingDivision?.image) && (
                      <button
                        type="button"
                        onClick={() =>
                          openImagePreview(
                            newDivision.image instanceof File
                              ? URL.createObjectURL(newDivision.image)
                              : newDivision.image?.url ||
                                  editingDivision?.image?.url
                          )
                        }
                        className="cursor-pointer text-xs text-blue-500 hover:text-blue-700"
                      >
                        View Full
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-6">
                <button
                  type="button"
                  onClick={() => setShowAddDivisionModal(false)}
                  className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                >
                  {editingDivision ? "Update" : "Add"} Division
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showAddBlogModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              {editingBlog ? "Edit Blog" : "Add New Blog"}
            </h2>
            <form onSubmit={editingBlog ? handleUpdateBlog : handleAddBlog}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Title*
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newBlog.title}
                      onChange={(e) =>
                        setNewBlog({ ...newBlog, title: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Slug*
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newBlog.slug}
                      onChange={(e) =>
                        setNewBlog({ ...newBlog, slug: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Tags (comma separated)
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newBlog.tags}
                      onChange={(e) =>
                        setNewBlog({ ...newBlog, tags: e.target.value })
                      }
                      placeholder="tag1, tag2, tag3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Categories (comma separated)
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newBlog.categories}
                      onChange={(e) =>
                        setNewBlog({ ...newBlog, categories: e.target.value })
                      }
                      placeholder="category1, category2, category3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Featured Image
                    </label>
                    <div className="mt-1 flex items-center gap-4">
                      <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md w-24 h-24 cursor-pointer">
                        {newBlog.image || editingBlog?.image ? (
                          <img
                            src={
                              newBlog.image instanceof File
                                ? URL.createObjectURL(newBlog.image)
                                : newBlog.image?.url || editingBlog?.image?.url
                            }
                            alt="Preview"
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <>
                            <Plus className="h-8 w-8 text-gray-400" />
                            <span className="mt-2 text-sm text-gray-600">
                              Upload
                            </span>
                          </>
                        )}
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleBlogImageUpload}
                        />
                      </label>
                      {(newBlog.image || editingBlog?.image) && (
                        <button
                          type="button"
                          onClick={() =>
                            openImagePreview(
                              newBlog.image instanceof File
                                ? URL.createObjectURL(newBlog.image)
                                : newBlog.image?.url || editingBlog?.image?.url
                            )
                          }
                          className="cursor-pointer text-xs text-blue-500 hover:text-blue-700"
                        >
                          View Full
                        </button>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Meta Description
                    </label>
                    <textarea
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="3"
                      value={newBlog.metaDescription}
                      onChange={(e) =>
                        setNewBlog({
                          ...newBlog,
                          metaDescription: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                {/* Right Column - Content Sections */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="block text-sm font-medium text-gray-700">
                      Content Sections
                    </label>
                    <button
                      type="button"
                      onClick={addContentSection}
                      className="cursor-pointer text-sm bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      Add Section
                    </button>
                  </div>

                  {newBlog.content.map((section, index) => (
                    <div key={index} className="border p-4 rounded-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">
                          Section {index + 1}
                        </span>
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => removeContentSection(index)}
                            className="cursor-pointer text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Heading
                        </label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={section.heading}
                          onChange={(e) =>
                            updateContentSection(
                              index,
                              "heading",
                              e.target.value
                            )
                          }
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Content
                        </label>
                        <textarea
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          rows="4"
                          value={section.body}
                          onChange={(e) =>
                            updateContentSection(index, "body", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddBlogModal(false);
                    setEditingBlog(null);
                    setNewBlog({
                      title: "",
                      slug: "",
                      tags: "",
                      categories: "",
                      image: null,
                      content: [{ heading: "", body: "" }],
                      metaDescription: "",
                    });
                  }}
                  className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                >
                  {editingBlog ? "Update" : "Add"} Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showAddSeoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              {editingSeo ? "Edit SEO Entry" : "Add New SEO Entry"}
            </h2>
            <form onSubmit={editingSeo ? handleUpdateSeo : handleAddSeo}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Slug*
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newSeo.slug}
                    onChange={(e) =>
                      setNewSeo({ ...newSeo, slug: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Title*
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newSeo.title}
                    onChange={(e) =>
                      setNewSeo({ ...newSeo, title: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description*
                  </label>
                  <textarea
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    value={newSeo.description}
                    onChange={(e) =>
                      setNewSeo({ ...newSeo, description: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Keywords (comma separated)
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newSeo.keywords}
                    onChange={(e) =>
                      setNewSeo({ ...newSeo, keywords: e.target.value })
                    }
                    placeholder="keyword1, keyword2, keyword3"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-6">
                <button
                  type="button"
                  onClick={() => setShowAddSeoModal(false)}
                  className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                >
                  {editingSeo ? "Update" : "Add"} SEO
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && deleteItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Confirm Delete
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Are you sure you want to delete this {deleteItem.type}? This
              action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setDeleteItem(null);
                }}
                className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (deleteItem.type === "product") {
                    handleDeleteProduct(deleteItem._id);
                  } else if (deleteItem.type === "message") {
                    handleDeleteMessage(deleteItem._id);
                  } else if (deleteItem.type === "division") {
                    handleDeleteDivision(deleteItem._id);
                  } else if (deleteItem.type === "blog") {
                    handleDeleteBlog(deleteItem._id);
                  } else if (deleteItem.type === "seo") {
                    handleDeleteSeo(deleteItem.slug);
                  }
                }}
                className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminPanel;
