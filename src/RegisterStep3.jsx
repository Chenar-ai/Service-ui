import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function RegisterStep3() {
  const { t } = useTranslation();
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const navigate = useNavigate();
  const goBack = () => {
  navigate(-1);
  };

  const handleNext = () => {
    if (!country.trim() || !state.trim()) {
      alert(t("register_step3.alert"));
      return;
    }

    localStorage.setItem("country", country);
    localStorage.setItem("state", state);
    navigate("/");
  };

  const countryOptions = ["Malaysia", "Singapore"];
  const stateOptions = {
    Malaysia: ["Johor", "Selangor", "Penang"],
    Singapore: ["Central", "East", "North"]
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          {t("register_step3.title")}
        </h2>
        <div className="space-y-4">
          <select
            className="w-full p-3 border border-gray-300 rounded-md"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              setState("");
            }}
          >
            <option value="">{t("register_step3.select_country")}</option>
            {countryOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {country && (
            <select
              className="w-full p-3 border border-gray-300 rounded-md"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">{t("register_step3.select_state")}</option>
              {stateOptions[country].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          )}

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

export default RegisterStep3;
