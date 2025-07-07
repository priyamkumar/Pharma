import { useState } from "react";
import { CheckCircle, Mail, X } from "lucide-react";
import axios from "axios";
import { useEffect } from "react";
import { server } from "./main";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function Unsubscribe() {
  const [step, setStep] = useState("confirm");
  const [email, setEmail] = useState("");
  const params = useParams();

  const handleUnsubscribe = async () => {
    setStep("processing");
    try {
      const { data } = await axios.get(
        `${server}/api/v1/subscribe/unsubscribe/${email}`
      );
      setStep("success");
    } catch (err) {
      setStep("confirm");
      toast.error(err.response.data.message);
    }
  };

  useEffect(() => {
    const emailParam = decodeURIComponent(params.email);
    if (emailParam) {
      setEmail(decodeURIComponent(emailParam));
    }
  }, []);

  const renderConfirmStep = () => (
    <div className="text-center">
      <div className="mx-auto w-16 h-16 bg-[#ddfbe9] rounded-full flex items-center justify-center mb-6">
        <Mail className="w-8 h-8 text-[#129349]" />
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        We're sorry to see you go!
      </h1>

      <p className="text-gray-600 mb-6">
        You're about to unsubscribe from our mailing list.
      </p>

      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-700">
          <strong>Email:</strong> {email || "Loading..."}
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleUnsubscribe}
          className="cursor-pointer px-6 py-3 bg-[#129349] text-white rounded-lg hover:bg-[#015c30] transition-colors"
        >
          Unsubscribe
        </button>
      </div>
    </div>
  );

  const renderProcessingStep = () => (
    <div className="text-center">
      <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Processing...
      </h2>

      <p className="text-gray-600">
        Please wait while we process your request.
      </p>
    </div>
  );

  const renderSuccessStep = () => (
    <div className="text-center">
      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
        <CheckCircle className="w-8 h-8 text-green-600" />
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        You've been unsubscribed
      </h2>

      <p className="text-gray-600 mb-6">
        We've successfully removed <strong>{email || "your email"}</strong> from
        our mailing list. You won't receive any more emails from us.
      </p>

      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-800">
          <strong>Changed your mind?</strong> You can resubscribe anytime by
          signing up again on our website.
        </p>
      </div>

      <button
        onClick={() => window.close()}
        className="cursor-pointer px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
      >
        Close
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        {step === "confirm" && renderConfirmStep()}
        {step === "processing" && renderProcessingStep()}
        {step === "success" && renderSuccessStep()}
      </div>
    </div>
  );
}
