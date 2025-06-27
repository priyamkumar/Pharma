import React, { useState } from "react";
import { server } from "../src/main";
import axios from "axios";
import toast from "react-hot-toast";

export default function PageContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    formType: "contactPage",
    description: "Partnership Enquiry",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
          formType: "contactPage",
          description: "Partnership Enquiry",
        });
      } catch (err) {
        toast.error(err.response.data.error);
      } finally {
        setIsSubmitted(false);
      }
    } else {
      setErrors(newErrors);
      toast.error(newErrors.name || newErrors.email || newErrors.phone);
    }
  };

  return (
    <section className="py-12">
      <div className="bg-[#ddfbe9] py-8 px-4 md:px-8">
        <div className="md:max-w-[75vw] mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Partner with Suave Healthcare Today
          </h2>
          <p className="text-gray-700 mb-8">
            Ready to grow with Suave Healthcare? Start your journey now.
            <br />
            Your success in the healthcare industry starts here.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#129349]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#129349]"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="9999999999"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#129349]"
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="cursor-pointer bg-[#129349] hover:bg-[#015c30] text-white font-medium py-2 px-8 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[#129349] focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
