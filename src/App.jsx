// App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import HomePage from "./HomePage";
import MapPage from "./MapPage";
import RegisterStep1 from "./RegisterStep1";
import RegisterStep2 from "./RegisterStep2";
import RegisterStep3 from "./RegisterStep3";
import RegisterStep4 from "./RegisterStep4";

function AnimatedRoutes() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/register/"
          element={
            <div className="min-h-screen">
              <HomePage />
            </div>
          }
        />
        <Route
          path="/map/:serviceId"
          element={
            <PageWrapper>
              <MapPage />
            </PageWrapper>
          }
        />
        <Route
          path="/register/role"
          element={
            <PageWrapper>
              <RegisterStep4 />
            </PageWrapper>
          }
        />
        <Route
          path="/register/name"
          element={
            <PageWrapper>
              <RegisterStep1 />
            </PageWrapper>
          }
        />
        <Route
          path="/register/contact"
          element={
            <PageWrapper>
              <RegisterStep2 />
            </PageWrapper>
          }
        />
        <Route
          path="/register/location"
          element={
            <PageWrapper>
              <RegisterStep3 />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

// Fast slide-left transition
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -100, opacity: 0 }}
    transition={{ duration: 0.15, ease: "easeInOut" }}
    className="min-h-screen"
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
