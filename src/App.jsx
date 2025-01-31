import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About, Home, Layout, NotFound } from "./pages"
import { ScrollToTop } from "./utils"

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="/about_us" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
