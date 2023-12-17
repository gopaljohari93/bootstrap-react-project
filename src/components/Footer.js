import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    })
  }, [])

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }


  return (
    <Container fluid>
      <div className='copyright'>&copy; 2023 Corporate. All Right Reserved.</div>
      <div className='socials'>
        <ul>
          <li><a href='https://www.facebook.com' target='blank'><i className="fa-brands fa-facebook-f"></i></a></li>
          <li><a href='https://www.twitter.com' target='blank'><i className="fa-brands fa-twitter"></i></a></li>
          <li><a href='https://www.linkedin.com' target='blank'><i className="fa-brands fa-linkedin-in"></i></a></li>
        </ul>
      </div>
      {
        showTopBtn && (<div className='go-top' onClick={goTop}></div>)
      }
    </Container>
  )
}
