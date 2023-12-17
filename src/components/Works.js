import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

// Imgaes works map function
const worksData = [
    {
        id: 1,
        link: 'https://www.google.com',
        image: require('../assets/images/img2.webp'),
        title: 'Lonely Path',
        subtitle: 'web design'
    },
    {
        id: 2,
        link: 'https://www.google.com',
        image: require('../assets/images/img3.webp'),
        title: 'Photographer Girl',
        subtitle: 'Branding'
    },
    {
        id: 3,
        link: 'https://www.google.com',
        image: require('../assets/images/img4.webp'),
        title: 'Lonely Path',
        subtitle: 'web design'
    },
    {
        id: 4,
        link: 'https://www.google.com',
        image: require('../assets/images/img5.webp'),
        title: 'Nature Patterns',
        subtitle: 'web design'
    },
    {
        id: 5,
        link: 'https://www.google.com',
        image: require('../assets/images/img6.webp'),
        title: 'The Difference',
        subtitle: 'Photography'
    },
    {
        id: 6,
        link: 'https://www.google.com',
        image: require('../assets/images/img7.webp'),
        title: 'Winter Sonata',
        subtitle: 'web design'
    },
    {
        id: 7,
        link: 'https://www.google.com',
        image: require('../assets/images/img8.webp'),
        title: 'Lonely Path',
        subtitle: 'Branding'
    },
    {
        id: 8,
        link: 'https://www.google.com',
        image: require('../assets/images/img9.webp'),
        title: 'Appreciation',
        subtitle: 'Photography'
    },
    {
        id: 9,
        link: 'https://www.google.com',
        image: require('../assets/images/img2.webp'),
        title: 'Happy Days',
        subtitle: 'web design'
    }
]

// Pagination
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
}

export default function Works() {
    return (
        <section id='works' className='block works-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Our works</h2>
                    <div className='subtitle'>our awesome works</div>
                </div>
                <Row className='portfoliolist'>
                    {
                        worksData.map(works => {
                            return (
                                <Col sm={4} key={works.id}>
                                    <div className='portfolio-wrapper'>
                                        <a href={works.link}target='blank' >
                                            <Image src={works.image} alt='image' />
                                            <div className='label text-center'>
                                                <h3>{works.title}</h3>
                                                <p>{works.subtitle}</p>
                                            </div>
                                        </a>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Pagination>{items}</Pagination>
            </Container>
        </section>
    )
}
