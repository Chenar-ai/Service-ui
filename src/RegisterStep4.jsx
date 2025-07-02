import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function RegisterStep4() {
  const { t } = useTranslation();
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const goBack = () => {
  navigate(-1); 
  };

  const handleNext = () => {
    if (!role) {
      alert(t("register_step4.alert"));
      return;
    }

    localStorage.setItem("role", role);
    navigate("/register/name");
    // You can redirect or submit to backend here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          {t("register_step4.title")}
        </h2>
        <div className="space-y-4">
          <label className="block">
            <input
              type="radio"
              name="role"
              value="provider"
              onChange={() => setRole("provider")}
              className="mr-2"
            />
            {t("register_step4.provider")}
          </label>
          <label className="block">
            <input
              type="radio"
              name="role"
              value="seeker"
              onChange={() => setRole("seeker")}
              className="mr-2"
            />
            {t("register_step4.seeker")}
          </label>

          <button
            onClick={handleNext}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            {t("next")}
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

export default RegisterStep4;
