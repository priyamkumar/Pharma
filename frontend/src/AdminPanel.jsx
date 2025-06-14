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

  useEffect(() => {
    fetchProducts();
    fetchMessages();
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
          <div className="mt-8 space-y-6">
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
                onClick={handleLogin}
                className="cursor-pointer group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderDashboard = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white overflow-hidden shadow rounded-lg">
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
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-gray-400" />
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
        <div className="bg-white overflow-hidden shadow rounded-lg">
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
        <div className="bg-white overflow-hidden shadow rounded-lg">
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
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
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
                              className="h-10 w-10 object-cover rounded border"
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

  const renderContent = () => {
    switch (currentPage) {
      case "dashboard":
        return renderDashboard();
      case "products":
        return renderProducts();
      case "messages":
        return renderMessages();
      default:
        return renderDashboard();
    }
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "products", label: "Products", icon: Package },
    { id: "messages", label: "Messages", icon: Mail },
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
                <span className="text-sm text-gray-700">Admin User</span>
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
                    therapeutic: ""
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
                  } else {
                    handleDeleteMessage(deleteItem._id);
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
