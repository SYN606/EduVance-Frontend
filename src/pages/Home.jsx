import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Base from "../components/Base";
import "../css/pages/homepage.css";
import CarouselComponent from "../components/Carousel";
import { iso_9001, skill_india, msme, iso_20001 } from "../img/image";


// carousel items
const items = [
    {
        id: 1,
        src: "https://images.pexels.com/photos/16952014/pexels-photo-16952014/free-photo-of-coast.jpeg",
        altText: "Welcome to Teknavigators",
        caption: "Nali website hai abhi ye"
    },
    {
        id: 2,
        src: "https://images.pexels.com/photos/16952016/pexels-photo-16952016/free-photo-of-coast.jpeg",
        altText: "Slide 2",
        caption: "Slide 2 Caption"
    },
    {
        id: 3,
        src: "https://images.pexels.com/photos/19887096/pexels-photo-19887096/free-photo-of-a-boat-on-the-beach-with-a-blanket-and-a-bag.jpeg",
        altText: "Slide 3",
        caption: "Slide 3 Caption"
    }
];

// Courses Cards
const Courses = () => {
    const courses = [
        {
            id: 1,
            title: "Computer Basics",
            description: "Learn the fundamentals of computers, including hardware and software basics.",
            image: "https://images.pexels.com/photos/23731974/pexels-photo-23731974/free-photo-of-a-stony-seashore.jpeg", // Replace with your image URL
        },
        {
            id: 2,
            title: "Web Development",
            description: "Dive into the world of web development with HTML, CSS, JavaScript, and modern frameworks.",
            image: "https://images.pexels.com/photos/23731974/pexels-photo-23731974/free-photo-of-a-stony-seashore.jpeg", // Replace with your image URL
        },
        {
            id: 3,
            title: "CyberSecurity",
            description: "Understand how to secure networks, systems, and data from cyber threats.",
            image: "https://images.pexels.com/photos/23731974/pexels-photo-23731974/free-photo-of-a-stony-seashore.jpeg", // Replace with your image URL
        },
        {
            id: 4,
            title: "Mechanical and Civil Engineering",
            description: "Explore the principles and practices of mechanical and civil engineering.",
            image: "https://images.pexels.com/photos/23731974/pexels-photo-23731974/free-photo-of-a-stony-seashore.jpeg", // Replace with your image URL
        },
    ];

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Our Courses</h2>
            <Row>
                {courses.map((course) => (
                    <Col key={course.id} sm="12" md="6" lg="3" className="mb-4">
                        <Card className="h-100 shadow-sm course-card">
                            <CardImg top width="100%" src={course.image} alt={course.title} className="card-img-top" />
                            <CardBody>
                                <CardTitle tag="h5" className="text-primary">{course.title}</CardTitle>
                                <CardText>{course.description.length > 100 ? `${course.description.substring(0, 42)}...` : course.description}</CardText>
                                <Link to={`/courses/${course.id}`}>
                                    <Button color="primary" className="explore-btn">Explore</Button>
                                </Link>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};


// Certification Partners
const CertificationPartners = () => {
    const logos = [
        { id: 1, src: { skill_india }, alt: "Skill India" },
        { id: 2, src: { iso_20001 }, alt: "ISO 20001" },
        { id: 3, src: { iso_9001 }, alt: "ISO 9001" },
        { id: 4, src: { msme }, alt: "MSME" },
    ];

    return (
        <Container className="certification-container text-center my-5">
            <h2 className="main-heading mb-4">Certification Partners</h2>
            <Row>
                {logos.map((logo) => (
                    <Col key={logo.id} xs="12" sm="4" className="mb-3">
                        <div className="logo-container">
                            <img src={logo.src} alt={logo.alt} className="logo-image" />
                            <p className="logo-text">{logo.alt}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

const Home = () => {
    return (
        <>
            <Base>
                <CarouselComponent items={items} />
                <Courses />
                <CertificationPartners />
            </Base>
        </>
    );
};


export default Home;