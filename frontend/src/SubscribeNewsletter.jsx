import { useState } from "react";
import axios from "axios";
import { server } from "./main";

const SubscribeNewsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Clear any previous messages when user starts typing
    if (message) setMessage("");
  };

  const handleSubscribe = async () => {
    if (!email.trim()) {
      setMessage("Please enter your email address");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const { data } = await axios.post(`${server}/api/v1/subscribe`, {
        email,
      });

      console.log(data);

      setMessage(
        "Successfully subscribed! Thank you for joining our newsletter."
      );
      setEmail("");
    } catch (error) {
      setMessage(error.response.data.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubscribe();
    }
  };

  return (
    <div className="mt-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md p-6 text-white">
      <h3 className="text-xl font-bold mb-2">Stay Updated!</h3>
      <p className="text-blue-100 text-sm mb-4">
        Subscribe to our newsletter and never miss a post.
      </p>

      <div className="space-y-3">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
          className="w-full px-3 py-2 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-400 disabled:opacity-50"
        />

        <button
          onClick={handleSubscribe}
          disabled={isLoading}
          className="cursor-pointer w-full bg-white text-blue-600 py-2 rounded font-medium text-sm hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </button>

        {message && (
          <p
            className={`text-sm mt-2 ${
              message.includes("Successfully")
                ? "text-green-200"
                : "text-red-200"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
