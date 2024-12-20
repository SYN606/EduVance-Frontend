import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from "./components/Login/Login"
import './css/global.css'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    {<Route path='/login' element={<Login />} />}
                    {/* <Route path='/create_new_account' element={<SignupForm />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
