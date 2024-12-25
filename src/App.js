import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Base from "./components/Base";
import "./css/global.css";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const ForgetPassword = lazy(() => import("./pages/ForgetPassword"));
const SignUp = lazy(() => import("./pages/SignUp"));
const AboutUs = lazy(() => import("./pages/About_us"));
const CourseCat = lazy(() => import("./pages/CourseCategory"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Courses = lazy(() => import("./pages/Courses"));

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Base />}>
              <Route path="" element={<Home />} />
              <Route path="about_us" element={<AboutUs />} />
              <Route path="login" element={<Login />} />
              <Route path="forget-password" element={<ForgetPassword />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="c/" element={<Courses />} />
              <Route path="c/:slug" element={<CourseCat />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default A
    pp;
