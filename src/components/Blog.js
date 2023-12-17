import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// map function
const blogData = [
    {
        id: 1,
        image: require('../assets/images/blog1.webp'),
        time: '15 Nov 2023',
        title: 'Coffee Lovers',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut tristique leo. Mauris ultrices velit.',
        Link: 'https://www.google.com'
    },
    {
        id: 2,
        image: require('../assets/images/blog2.webp'),
        time: '10 Nov 2023',
        title: 'Tips for UI Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut tristique leo. Mauris ultrices velit.',
        Link: 'https://www.facebook.com'
    },
    {
        id: 3,
        image: require('../assets/images/blog3.webp'),
        time: '07 Nov 2023',
        title: 'Beautiful Day',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut tristique leo. Mauris ultrices velit.',
        Link: 'https://www.twitter.com'
    },

]

export default function Blog() {
    return (
        <section id='blog' className='block blog-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Latest from Blog</h2>
                    <div className='subtitle'>get our latest news from blog</div>
                </div>
                <Row>
                    {
                        blogData.map(blog => {
                            return (
                                <Col sm={4} key={blog.id}>
                                    <div className='holder'>
                                        <Card>
                                            <Card.Img variant="top" src={blog.image} alt='img' />
                                            <Card.Body>
                                                <time>{blog.time}</time>
                                                <Card.Title>{blog.title}</Card.Title>
                                                <Card.Text>
                                                    {blog.description}
                                                </Card.Text>
                                                <a href={blog.Link} className='btn btn-primary' target='blank'>Read More <i className="fa-solid fa-chevron-right"></i></a>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}
