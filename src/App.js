import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import SignUp from "./pages/SignUp";
import Base from "./components/Base";
import './css/global.css';
import AboutUs from './pages/About_us';
import AllCourses from './pages/AllCourses';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Base />}>
                        <Route path='' element={<Home />} />
                        <Route path='about_us' element={<AboutUs />} />
                        <Route path='login' element={<Login />} />
                        <Route path='forget-password' element={<ForgetPassword />} />
                        <Route path='signup' element={<SignUp />} />
                        <Route path='c/:slug' element={<AllCourses />} />
                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
