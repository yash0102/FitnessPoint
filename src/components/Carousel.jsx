import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import carouselImage from '../style/Carousel.module.css'


function CarouselComponent () {
    return (
        <Carousel interval={3000}>
        <Carousel.Item>
            <img src='/images/carousel2.jpg' alt="image 1" className={`${carouselImage.carousel_img} ${carouselImage.zoom_animation}`}/>
            <Carousel.Caption>
            <h1>No pain, No gain</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src='/images/carousel2.jpg' alt="image 2" className={`${carouselImage.carousel_img} ${carouselImage.zoom_animation}`}/>
        <Carousel.Caption>
            <h1>Sweat now, Shine later</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src='/images/carousel2.jpg' alt="image 3" className={`${carouselImage.carousel_img} ${carouselImage.zoom_animation}`}/>
        <Carousel.Caption>
            <h1>No excuses,Just results</h1>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;