import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function RegisterStep1() {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const goBack = () => {
  navigate(-1);
  };

  const handleNext = () => {
    if (!firstName.trim() || !lastName.trim()) {
      alert(t("register_step1.alert"));
      return;
    }

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    navigate("/register/contact");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          {t("register_step1.title")}
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder={t("register_step1.first_name")}
            className="w-full p-3 border border-gray-300 rounded-md"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder={t("register_step1.last_name")}
            className="w-full p-3 border border-gray-300 rounded-md"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
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

export default RegisterStep1;
