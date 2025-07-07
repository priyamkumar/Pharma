import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "./main";
import toast from "react-hot-toast";
import SEO from "./SEO";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    formType: "contactPage",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const navigate = useNavigate();

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      toast.error("Please complete the CAPTCHA");
      return;
    }
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      try {
        const { data } = await axios.post(`${server}/api/v1/message/`, {
          ...formData,
          captchaToken,
        });
        toast.success(data.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          formType: "contactPage",
          description: "",
        });
      } catch (err) {
        toast.error(err.response.data.message);
        console.log(err);
      } finally {
        setIsSubmitted(false);
      }
    } else {
      setErrors(newErrors);
      toast.error(newErrors.name || newErrors.email || newErrors.phone);
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <SEO slug="contact" />
      <div className="md:max-w-[75vw] mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <span
              className="hover:text-blue-600 transition-colors cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-bold text-blue-800">Contact Us</span>
          </nav>

          {/* Main Heading */}
          <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-4 py-8">
            Get in Touch with Us
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Complete the form below, and we'll be in touch soon. Your inquiries
            matter to us.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mx-auto md:max-w-lg">
          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#129349] focus:border-transparent transition duration-200 ease-in-out"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#129349] focus:border-transparent transition duration-200 ease-in-out"
                placeholder="Enter your email address"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#129349] focus:border-transparent transition duration-200 ease-in-out"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#129349] focus:border-transparent transition duration-200 ease-in-out resize-vertical"
                placeholder="Write here...."
              />
            </div>

            <ReCAPTCHA
              sitekey={siteKey}
              onChange={(token) => setCaptchaToken(token)}
              className="mx-auto"
            />
            {/* Submit Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                className="cursor-pointer w-full bg-[#129349] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#015c30] transition duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#129349] focus:ring-offset-2"
              >
                Send Enquiry
              </button>
            </div>
          </div>
        </div>

        {/* Optional: Contact Information Section */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#ddfbe9] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[#129349]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">
                <a href="tel:7009676112" className="hover:text-[#129349]">
                  7009676112
                </a>
                ,{" "}
                <a href="tel:7719529291" className="hover:text-[#129349]">
                  7719529291
                </a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#ddfbe9] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[#129349]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">
                <a
                  href="mailTo:suavehealthcare1@gmail.com"
                  className="hover:text-[#129349]"
                >
                  suavehealthcare1@gmail.com
                </a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#ddfbe9] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[#129349]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
              <p className="text-gray-600">
                Bci Bearing, Vill. Lower Ambota Sector-5 Parwanoo Teh. Kasauli
                Distt. Solan (HP)- 173220
              </p>
            </div>
          </div>
        </div>
        <div className="my-10">
          <div className="shadow-lg rounded-2xl overflow-hidden">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.32335283011!2d76.95781031183913!3d30.849620774421826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f8ee0ec900069%3A0xc28b067267e5e8b6!2sBci%20Bearing%20Compound!5e0!3m2!1sen!2sin!4v1750163811235!5m2!1sen!2sin"
              className="w-full h-64 md:h-96"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
