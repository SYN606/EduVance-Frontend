import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./components/Base";
import './css/global.css';
import { HeadProvider } from "react-head";
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from './context/AuthContext';  // Import AuthProvider

// Lazy-loaded pages
const pages = {
  Home: lazy(() => import("./pages/Home")),
  Login: lazy(() => import("./pages/Login")),
  ForgetPassword: lazy(() => import("./pages/ForgetPassword")),
  SignUp: lazy(() => import("./pages/SignUp")),
  AboutUs: lazy(() => import("./pages/About_us")),
  CourseCat: lazy(() => import("./pages/CourseCategory")),
  NotFound: lazy(() => import("./pages/NotFound")),
  Courses: lazy(() => import("./pages/Courses")),
  UserProfile: lazy(() => import("./pages/UserProfile")),
  Otp: lazy(() => import("./pages/Otp")),
};

function App() {
  return (
    // Wrap the entire app with the AuthProvider to share authentication state globally
    <AuthProvider>
      <HeadProvider>
        <BrowserRouter>
          <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Base />}>
                {/* Define the routes for pages */}
                <Route path="" element={<pages.Home />} />
                <Route path="about_us" element={<pages.AboutUs />} />

                {/* Protected Routes */}
                <Route
                  path="verify_otp"
                  element={<ProtectedRoute element={<pages.Otp />} />}
                />
                <Route
                  path="user_profile"
                  element={<ProtectedRoute element={<pages.UserProfile />} />}
                />

                {/* Regular Routes */}
                <Route path="c/" element={<pages.Courses />} />
                <Route path="login" element={<pages.Login />} />
                <Route path="forget-password" element={<pages.ForgetPassword />} />
                <Route path="signup" element={<pages.SignUp />} />
                <Route path="c/:slug" element={<pages.CourseCat />} />

                {/* Catch-All Route (404 Page Not Found) */}
                <Route path="*" element={<pages.NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </HeadProvider>
    </AuthProvider>
  );
}

export default App;
