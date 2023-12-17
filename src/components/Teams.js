import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// map function
const teamsData = [
    {
        id: 1,
        image: require('../assets/images/team1.webp'),
        fbLink: 'https://www.facebook.com/',
        twitterLink: 'https://twitter.com/',
        linkedinLink: 'https://www.linkedin.com/',
        name: 'Gabriel Hart',
        desination: 'CEO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis rutrum enim.'
    },
    {
        id: 2,
        image: require('../assets/images/team2.webp'),
        fbLink: 'https://www.facebook.com/',
        twitterLink: 'https://twitter.com/',
        linkedinLink: 'https://www.linkedin.com/',
        name: 'David Antony',
        desination: 'Manager',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis rutrum enim.'
    },
    {
        id: 3,
        image: require('../assets/images/team3.webp'),
        fbLink: 'https://www.facebook.com/',
        twitterLink: 'https://twitter.com/',
        linkedinLink: 'https://www.linkedin.com/',
        name: 'Nicholas Perry',
        desination: 'UX Designer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis rutrum enim.'
    },
    {
        id: 4,
        image: require('../assets/images/team4.webp'),
        fbLink: 'https://www.facebook.com/',
        twitterLink: 'https://twitter.com/',
        linkedinLink: 'https://www.linkedin.com/',
        name: 'Sarah Wills',
        desination: 'Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis rutrum enim.'
    },
    {
        id: 5,
        image: require('../assets/images/team5.webp'),
        fbLink: 'https://www.facebook.com/',
        twitterLink: 'https://twitter.com/',
        linkedinLink: 'https://www.linkedin.com/',
        name: 'Sophia Pitt',
        desination: 'Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis rutrum enim.'
    },
    {
        id: 6,
        image: require('../assets/images/team6.webp'),
        fbLink: 'https://www.facebook.com/',
        twitterLink: 'https://twitter.com/',
        linkedinLink: 'https://www.linkedin.com/',
        name: 'Taylor Lopez',
        desination: 'Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis rutrum enim.'
    },
    {
        id: 7,
        image: require('../assets/images/team7.webp'),
        fbLink: 'https://www.facebook.com/',
        twitterLink: 'https://twitter.com/',
        linkedinLink: 'https://www.linkedin.com/',
        name: 'Ryan Giggs',
        desination: 'Content Writter',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis rutrum enim.'
    },
    {
        id: 8,
        image: require('../assets/images/team8.webp'),
        fbLink: 'https://www.facebook.com/',
        twitterLink: 'https://twitter.com/',
        linkedinLink: 'https://www.linkedin.com/',
        name: 'David Smith',
        desination: 'SEO Expert',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis rutrum enim.'
    }
]

export default function Teams() {
    return (
        <section id='teams' className='block teams-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Our teams</h2>
                    <div className='subtitle'>some of our export</div>
                </div>
                <Row>
                    {
                        teamsData.map(teams => {
                            return (
                                <Col sm={3} key={teams.id}>
                                    <div className='image'>
                                        <Image src={teams.image} alt='image' />
                                        <div className='overlay'>
                                            <div className='socials'>
                                                <ul>
                                                    <li><a href={teams.fbLink} target='blank'><i className="fa-brands fa-facebook-f"></i></a></li>
                                                    <li><a href={teams.twitterLink} target='blank'><i className="fa-brands fa-twitter"></i></a></li>
                                                    <li><a href={teams.linkedinLink} target='blank'><i className="fa-brands fa-linkedin-in"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <h3>{teams.name}</h3>
                                        <span className='desination'>{teams.desination}</span>
                                        <p>{teams.description}</p>
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
