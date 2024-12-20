import { Container } from "reactstrap";
import CustomNavbar from "./CustomNavbar";

const Base = ({ children }) => {
    return (
        <>
            <CustomNavbar />
            <Container fluid className='pt-5'>
                {children}
            </ Container>
            {/* <Footer /> */}
        </>
    );
}

export default Base;