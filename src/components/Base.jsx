import Footer from "./Footer";
import Navbar from "./Navbar";

const Base = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default Base;