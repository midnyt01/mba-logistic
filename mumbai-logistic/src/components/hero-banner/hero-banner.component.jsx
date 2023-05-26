import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import HeroVideo from '../../assets/illam.mp4';
import Slide from 'react-reveal/Slide';
import Herobanner from '../../assets/banner-mumbai.jpeg';

import './hero-banner.styled.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeroBanner = () => {

  const handleOnClickContact = () => {
    if (window.innerWidth > 800) {
      window.scrollTo({top: 700, behavior: 'smooth'})
    } else {
      window.scrollTo({top: 350, behavior: 'smooth'})
    }
  }
    return (
      <div className="container m-auto">
        <div className='hero-banner-wrapper'>
            <img src={Herobanner} alt='Ilam Hero Banner' />
            <Slide right cascade>
            <div className='hero-banner-content'>
              <div className='hero-banner-content-wrapper'>
              <h3 className='red-border'>MBA Logistic & Supply Chain</h3>
              <h3 className='mustard-border'>Full Time Masters Program</h3>
              <h3 className='blue-border'>UGC Recognized Program</h3>
              </div>
              <div className='hero-cta-center'>
              <div to='/' className='default-cta btn light-text' onClick={handleOnClickContact}>Apply Now</div>
              </div>
            </div>
            </Slide>
        </div>
      </div>
    );
  };
  
  export default HeroBanner;