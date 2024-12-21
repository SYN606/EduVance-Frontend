import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from "./pages/Login"
import ForgetPassword from "./pages/ForgetPassword"
import SignUp from "./pages/SignUp"
import './css/global.css'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/forget-password' element={<ForgetPassword />} />
                    <Route path='/signup' element={<SignUp />} />
                    {/* <Route path='/create_new_account' element={<SignupForm />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
