import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/login' element={<Signin />} /> */}
          {/* <Route path='/create_new_account' element={<SignupForm />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
