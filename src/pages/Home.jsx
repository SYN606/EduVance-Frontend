import Base from "../components/Base";
import "../css/pages/homepage.css";
import CarouselComponent from "../components/Carousel";


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


const Home = () => {
    return (
        <>
            <Base>
                <CarouselComponent items={items} />
            </Base>
        </>
    );
};


export default Home;