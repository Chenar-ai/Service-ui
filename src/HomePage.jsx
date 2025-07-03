import React from "react";
import { Link } from "react-router-dom";
import { services, newsFeed } from "./data";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ms" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white text-center py-6 relative">
        <div className="absolute right-4 top-4">
          <button
            onClick={toggleLanguage}
            className="bg-white text-blue-600 px-2 py-1 rounded hover:bg-gray-100 shadow"
          >
            {i18n.language === "en" ? "BM" : "EN"}
          </button>
        </div>
        <h1 className="text-3xl font-bold">{t("welcome_title")}</h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg max-w-xs mx-auto px-2">
        {t("welcome_subtitle")}
      </p>

      </header>

      {/* Profile */}
      <section className="bg-white p-4 shadow-md">
        <div className="flex items-center justify-between">
          <Link
            to="/register"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4s-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z"
              />
            </svg>
          </Link>
          <Link to="/register/role">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
              {t("register")}
            </button>
          </Link>
        </div>
      </section>

      {/* Search */}
      <div className="flex justify-center mt-6 px-4">
        <div className="flex w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
          <input
            type="text"
            placeholder={t("search_placeholder")}
            className="w-full py-2 px-4 border rounded-l-md shadow-md"
          />
          <button className="bg-blue-500 text-white px-6 py-2 rounded-r-md shadow-md hover:bg-blue-700 transition">
            {t("search_button")}
          </button>
        </div>
      </div>

      {/* Services */}
      <section className="bg-white p-4 rounded-lg shadow-md mt-6 mx-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
          {t("available_services")}
        </h2>

        <div className="grid grid-cols-3 gap-3">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/map/${service.id}`}
              className="flex flex-col items-center justify-center bg-blue-100 hover:bg-blue-200 transition rounded-lg p-3 text-center"
            >
              <div className="text-3xl text-blue-600">{service.icon}</div>
              <div className="mt-2 text-xs font-medium text-gray-800">
                {t(service.nameKey)}
              </div>
            </Link>
          ))}
        </div>
      </section>


      {/* News Feed */}
      <section className="bg-white p-4 sm:p-6 rounded-lg shadow-md mt-6 mx-4 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          {t("news_feed")}
        </h2>
        <div className="space-y-4">
          {newsFeed.map((post) => (
            <div key={post.id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-800">{post.user}</p>
                <p className="text-sm text-gray-600">{post.time}</p>
              </div>
              <p className="text-gray-700 mt-2">{post.content}</p>
              <div className="flex items-center justify-between mt-2">
                <button className="text-blue-500">
                  {t("like")} ({post.likes})
                </button>
                <button className="text-blue-500">{t("comment")}</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
