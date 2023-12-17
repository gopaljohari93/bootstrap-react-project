import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import CarouselImage1 from '../assets/images/img-hero1.jpg';
// import CarouselImage2 from '../assets/images/img-hero2.jpg';
// import CarouselImage3 from '../assets/images/img-hero3.jpg';

// map function
var heroData = [
    {
        id: 1,
        image: require('../assets/images/img-hero1.webp'),
        title: 'The perfect design for your website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut dictum nisl, non placerat nisi. Nullam vitae ornare massa. Phasellus.',
        link: 'https://www.google.com'
    },

    {
        id: 2,
        image: require('../assets/images/img-hero2.webp'),
        title: 'Start Your Future Financial Plan',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut dictum nisl, non placerat nisi. Nullam vitae ornare massa. Phasellus.',
        link: 'https://www.facebook.com'
    },

    {
        id: 3,
        image: require('../assets/images/img-hero3.webp'),
        title: 'Enjoy the Difference',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut dictum nisl, non placerat nisi. Nullam vitae ornare massa. Phasellus.',
        link: 'https://www.twitter.com'
    },

]

export default function Hero() {

    return (
        // <section id="home" className='hero-block'>
        //     <Carousel data-bs-theme="dark">
        //         <Carousel.Item>
        //             <img style={{ height: '70vh' }}
        //                 className="d-block w-100"
        //                 src={CarouselImage1}
        //                 alt="First slide"
        //             />
        //             <Carousel.Caption>
        //                 <h5>First slide label</h5>
        //                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         <Carousel.Item>
        //             <img style={{ height: '70vh' }}
        //                 className="d-block w-100"
        //                 src={CarouselImage2}
        //                 alt="Second slide"
        //             />
        //             <Carousel.Caption>
        //                 <h5>Second slide label</h5>
        //                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         <Carousel.Item>
        //             <img style={{ height: '70vh' }}
        //                 className="d-block w-100"
        //                 src={CarouselImage3}
        //                 alt="Third slide"
        //             />
        //             <Carousel.Caption>
        //                 <h5>Third slide label</h5>
        //                 <p>
        //                     Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        //                 </p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //     </Carousel>
        // </section>

        <section id='home' className='hero-block'>
            <Carousel>
                {
                    heroData.map(hero => {
                        return (
                            <Carousel.Item key={hero.id}>
                                <img
                                    className="d-block w-100"
                                    src={hero.image}
                                    alt={"Slide" + hero.id}
                                />
                                <Carousel.Caption>
                                    <h5>{hero.title}</h5>
                                    <p>{hero.description}</p>
                                    <a className='btn btn-primary' href={hero.link}>Learn More
                                        <i className="fa-solid fa-chevron-right"></i></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }

            </Carousel>
        </section>
    )
}
