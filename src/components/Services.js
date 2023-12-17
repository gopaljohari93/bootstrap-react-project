import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// map function
const servicesData = [
    {
        id: 1,
        title: 'Responsive Design',
        icon: 'fa-solid fa-clone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor tincidunt aliquam. Vestibulum ante ipsum primis in faucibus orci luctus.',
    },
    {
        id: 2,
        title: 'Creative Design',
        icon: 'fa-solid fa-snowflake',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor tincidunt aliquam. Vestibulum ante ipsum primis in faucibus orci luctus.'
    },
    {
        id: 3,
        title: 'SEO Optimized',
        icon: 'fa-solid fa-plug',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor tincidunt aliquam. Vestibulum ante ipsum primis in faucibus orci luctus.'
    },
    {
        id: 4,
        title: 'Ratina Ready',
        icon: 'fa-solid fa-desktop',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor tincidunt aliquam. Vestibulum ante ipsum primis in faucibus orci luctus.'
    },
    {
        id: 5,
        title: 'Browser Compatibility',
        icon: 'fa-solid fa-trophy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor tincidunt aliquam. Vestibulum ante ipsum primis in faucibus orci luctus.'
    },
    {
        id: 6,
        title: 'Customer Support',
        icon: 'fa-solid fa-life-ring',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor tincidunt aliquam. Vestibulum ante ipsum primis in faucibus orci luctus.'
    },
]

export default function Services() {
    return (
        <section id='services' className='block services-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Our Services</h2>
                    <div className='subtitle'>services we provide</div>
                </div>
                <Row>
                    {
                        servicesData.map(services => {
                            return (
                                <Col sm={4} className='holder' key={services.id}>
                                    <div className='icon'>
                                    <i className={services.icon}></i>
                                    </div>
                                    <h3>{services.title}</h3>
                                    <p>{services.description}</p>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}
