import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function RegisterStep2() {
  const { t } = useTranslation()
  const navigate = useNavigate();
  const goBack = () => {
  navigate(-1);
  };
  const role = localStorage.getItem("role"); // Get saved role

  const emailLabel = t(`register_step2.email.label_${role}`);
  const phoneLabel = t(`register_step2.phone.label_${role}`);
  const alertMessage = t(`register_step2.alert.${role}`);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleNext = () => {
    if (role === "provider" && !email.trim()) {
      alert("Email is required for providers");
      return;
    }
    if (role === "seeker" && !phone.trim()) {
      alert("Phone is required for seekers");
      return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    navigate("/register/location");
  };

   return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Your Contact</h2>
        <div className="space-y-4">
          {role === "provider" && (
            <input
              type="email"
              placeholder="Email (required)"
              className="w-full p-3 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
          {role === "seeker" && (
            <input
              type="tel"
              placeholder="Phone Number (required)"
              className="w-full p-3 border rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          )}
          {role === "provider" && (
            <input
              type="tel"
              placeholder="Phone (optional)"
              className="w-full p-3 border rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          )}
          {role === "seeker" && (
            <input
              type="email"
              placeholder="Email (optional)"
              className="w-full p-3 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}

          <button
            onClick={handleNext}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Next
          </button>
          <div className="absolute top-4 left-4">
            <button
              onClick={goBack}
              className="text-blue-600 text-sm hover:underline"
            >
              {t("← Back")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterStep2;