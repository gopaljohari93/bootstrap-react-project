import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

// map function
var testimonialsData = [
    {
        id: 1,
        image: require('../assets/images/team4.webp'),
        name: 'John Wills',
        desription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut dictum nisl, non placerat nisi. Nullam vitae ornare massa. Phasellus.',
        designation: 'Manager'
    },
    {
        id: 2,
        image: require('../assets/images/team3.webp'),
        name: 'Jasmin Perry',
        desription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut dictum nisl, non placerat nisi. Nullam vitae ornare massa. Phasellus.',
        designation: 'Accountant'
    },
    {
        id: 3,
        image: require('../assets/images/team9.webp'),
        name: 'Rocky Jonson',
        desription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut dictum nisl, non placerat nisi. Nullam vitae ornare massa. Phasellus.',
        designation: 'CEO'
    }
]

export default function Testimonials() {
    return (
        <section id='testimonials' className='testimonials-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Client testimonials</h2>
                    <div className='subtitle'>what client says about us</div>
                </div>
                <Carousel controls={false}>
                    {
                        testimonialsData.map(testimonials => {
                            return (
                                <Carousel.Item key={testimonials.id}>
                                   
                                    <blockquote>
                                         <Image src={testimonials.image} className='round' alt='image' />
                                        <p>{testimonials.desription}</p>
                                        <cite>
                                            <span className='name'>{testimonials.name}</span>
                                            <span className='designation'>{testimonials.designation}</span>
                                        </cite>
                                    </blockquote>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </Container>
        </section>
    )
}
