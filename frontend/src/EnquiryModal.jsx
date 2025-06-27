import { useState } from "react";
import { server } from "../src/main";
import axios from "axios";
import toast from "react-hot-toast";
import { useEnquiryStore } from "../store/enquiryStore";

export default function EnquiryModal() {
  const { isEnquiryModalOpen, setIsEnquiryModalOpen } = useEnquiryStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    formType: "popup",
    description: "For Enquiry",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^(\+91[\-\s]?)?[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid Indian phone number";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Simulate form submission
      setIsSubmitted(true);
      try {
        const { data } = await axios.post(
          `${server}/api/v1/message/`,
          formData
        );
        toast.success(data.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          formType: "popup",
          description: "For Enquiry",
        });
        setIsEnquiryModalOpen(false);
      } catch (err) {
        toast.error("Server Error");
      } finally {
        setIsSubmitted(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const closeModal = () => {
    setIsEnquiryModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      formType: "popup",
      description: "For Enquiry",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <>
      {/* Modal */}
      {isEnquiryModalOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6 relative animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-light transition-colors duration-200"
            >
              ×
            </button>

            {/* Success Message */}
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#ddfbe9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#129349]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  Your enquiry has been submitted successfully. We'll get back
                  to you soon.
                </p>
              </div>
            ) : (
              <>
                {/* Heading */}
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Send Enquiry
                </h2>

                {/* Form */}
                <div>
                  {/* Name Field */}
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#129349] transition-colors duration-200 ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#129349] transition-colors duration-200 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#129349] transition-colors duration-200 ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="cursor-pointer w-full mt-6 bg-[#129349] hover:bg-[#015c30] text-white py-2 rounded-md font-semibold transition-colors duration-200 transform"
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
