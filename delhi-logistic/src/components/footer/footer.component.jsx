// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.styled.css';

const Footer = () => {
    return (
      <div className='footer'>
        <div className='footer-social-icons'>
          <a href='https://www.com'><FontAwesomeIcon icon="fa-brands fa-youtube" /></a> 
          <a href='https://www.com'><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a>
          <a href='https://www.com'><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
          <a href='https://www.com'><FontAwesomeIcon icon="fa-brands fa-quora" /></a>
          <a href='https://www.com'><FontAwesomeIcon icon="fa-brands fa-pinterest" /></a>
          <a href='https://www.com'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
        </div>
        <hr className='w-80 m-auto' />
        <div style={{textAlign: "center"}}>
          <p>Copyright 2023 to ILAM India</p>
        </div>
        {/* <div className='footer-wrapper'>
          <div className='col-1'>
            <h3>ABOUT ILAM</h3>
            <ul>
              <li><a href='https://' >Vision & Objectives</a></li>
              <li><a href='https://' >About ILAM</a></li>
              <li><a href='https://' >Advantage ILAM</a></li>
              <li><a href='https://' >ILAM Academic Advisory Board</a></li>
              <li><a href='https://' >Learning at ILAM</a></li>
              <li><a href='https://' >Infrastructure</a></li>
              <li><a href='https://' >About Our Partners</a></li>
              <li><a href='https://' >Blogs</a></li>
            </ul>
          </div>
          <div className='col-2'>
            <h3>COURSES</h3>
            <ul>
              <li><a href='https://' >Two years MBA Programmes</a></li>
              <li><a href='https://' >Diploma Programs</a></li>
              <li><a href='https://' >Online Courses</a></li>
              <li><a href='https://' >Apply Online</a></li>
              <li><a href='https://' >Admission Procedure + How to Apply?</a></li>
              <li><a href='https://' >Student Welfare</a></li>
            </ul>
          </div>
          <div className='col-3'>
            <h3>GET IN TOUCH WITH US</h3>
            <ul>
              <li><a href='https://' >Delhi Campus:</a></li>
              <li><a href='https://' >+91 9717094061, +91 9717094063</a></li>
              <li><a href='https://' >+91 11 4065 1001, +91 11 4065 1002</a></li>
              <li><a href='https://' >info@icriindia.com</a></li>
              <li><a href='https://' >rajniti@icriindia.com</a></li>
              <li><a href='https://' >ILAM - Admission Centre</a></li>
              <li><a href='https://' >Office No. 305, 3rd Floor,</a></li>
              <li><a href='https://' >Deenar Bhawan, Nehru Place- 110019</a></li>
            </ul>
          </div>
          <div className='col-4'>
            <h3>Bengaluru Campus:</h3>
            <ul>
              <li><a href='https://' >+91 7022895052</a></li>
              <li><a href='https://' >+91 80- 49402533</a></li>
              <li><a href='https://' >info@icriindia.com</a></li>
              <li><a href='https://' >assantha@icriindia.com</a></li>
              <li><a href='https://' >ILAM - Bengaluru Admission Centre</a></li>
              <li><a href='https://' >Office No. G-11, Ground Floor, Prestige Towers, Residency Road,<br />Near Bishop Cotton Girls School, Bengaluru - 560025</a></li>
            </ul>
          </div>
          <div className='col-5'>
            <h3>Delhi Campus:</h3>
            <ul>
              <li><a href='https://' >+91 9717094061, +91 9717094063</a></li>
              <li><a href='https://' >+91 11 4065 1001, +91 11 4065 1002</a></li>
              <li><a href='https://' >info@icriindia.com</a></li>
              <li><a href='https://' >rajniti@icriindia.com</a></li>
              <li><a href='https://' >ILAM - Admission Centre</a></li>
              <li><a href='https://' >Office No. 305, 3rd Floor,</a></li>
              <li><a href='https://' >Deenar Bhawan, Nehru Place- 110019</a></li>
            </ul>
          </div>
        </div> */}

        {/* < hr className='w-80 m-auto' />

        <div className='footer-wrapper'>
          <div className='col-1'>
            <h3>Dehradun Campus:</h3>
            <ul>
              <li><a href='https://' >Vision & Objectives</a></li>
              <li><a href='https://' >About ILAM</a></li>
              <li><a href='https://' >Advantage ILAM</a></li>
              <li><a href='https://' >ILAM Academic Advisory Board</a></li>
              <li><a href='https://' >Learning at ILAM</a></li>
              <li><a href='https://' >Infrastructure</a></li>
              <li><a href='https://' >About Our Partners</a></li>
              <li><a href='https://' >Blogs</a></li>
            </ul>
          </div>
          <div className='col-2'>
            <h3>Jaipur Campus:</h3>
            <ul>
              <li><a href='https://' >Two years MBA Programmes</a></li>
              <li><a href='https://' >Diploma Programs</a></li>
              <li><a href='https://' >Online Courses</a></li>
              <li><a href='https://' >Apply Online</a></li>
              <li><a href='https://' >Admission Procedure + How to Apply?</a></li>
              <li><a href='https://' >Student Welfare</a></li>
            </ul>
          </div>
          <div className='col-3'>
            <h3>Mumbai Campus:</h3>
            <ul>
              <li><a href='https://' >Delhi Campus:</a></li>
              <li><a href='https://' >+91 9717094061, +91 9717094063</a></li>
              <li><a href='https://' >+91 11 4065 1001, +91 11 4065 1002</a></li>
              <li><a href='https://' >info@icriindia.com</a></li>
              <li><a href='https://' >rajniti@icriindia.com</a></li>
              <li><a href='https://' >ILAM - Admission Centre</a></li>
              <li><a href='https://' >Office No. 305, 3rd Floor,</a></li>
              <li><a href='https://' >Deenar Bhawan, Nehru Place- 110019</a></li>
            </ul>
          </div>
          <div className='col-4'>
            <h3>Pune Campus:</h3>
            <ul>
              <li><a href='https://' >+91 7022895052</a></li>
              <li><a href='https://' >+91 80- 49402533</a></li>
              <li><a href='https://' >info@icriindia.com</a></li>
              <li><a href='https://' >assantha@icriindia.com</a></li>
              <li><a href='https://' >ILAM - Bengaluru Admission Centre</a></li>
              <li><a href='https://' >Office No. G-11, Ground Floor, Prestige Towers, Residency Road,<br />Near Bishop Cotton Girls School, Bengaluru - 560025</a></li>
            </ul>
          </div>
        </div>

        < hr className='w-80 m-auto' />

        <div className='footer-wrapper'>
          <div className='col-1'>
            <h3>Nasik Campus:</h3>
            <ul>
              <li><a href='https://' >Vision & Objectives</a></li>
              <li><a href='https://' >About ILAM</a></li>
              <li><a href='https://' >Advantage ILAM</a></li>
              <li><a href='https://' >ILAM Academic Advisory Board</a></li>
              <li><a href='https://' >Learning at ILAM</a></li>
              <li><a href='https://' >Infrastructure</a></li>
              <li><a href='https://' >About Our Partners</a></li>
              <li><a href='https://' >Blogs</a></li>
            </ul>
          </div>
          <div className='col-2'>
            <h3>Indore Campus:</h3>
            <ul>
              <li><a href='https://' >Two years MBA Programmes</a></li>
              <li><a href='https://' >Diploma Programs</a></li>
              <li><a href='https://' >Online Courses</a></li>
              <li><a href='https://' >Apply Online</a></li>
              <li><a href='https://' >Admission Procedure + How to Apply?</a></li>
              <li><a href='https://' >Student Welfare</a></li>
            </ul>
          </div>
        </div>
        
        <hr className='w-80 m-auto' />

        <div className='footer-wrapper'>
          <div className='col-1'>
            <h3>Fellowship Programme</h3>
            <ul>
              <li><a href='https://' >Vision & Objectives</a></li>
              <li><a href='https://' >About ILAM</a></li>
              <li><a href='https://' >Advantage ILAM</a></li>
              <li><a href='https://' >ILAM Academic Advisory Board</a></li>
              <li><a href='https://' >Learning at ILAM</a></li>
              <li><a href='https://' >Infrastructure</a></li>
              <li><a href='https://' >About Our Partners</a></li>
              <li><a href='https://' >Blogs</a></li>
            </ul>
          </div>
          <div className='col-2'>
            <h3>MBA Programmes</h3>
            <ul>
              <li><a href='https://' >Two years MBA Programmes</a></li>
              <li><a href='https://' >Diploma Programs</a></li>
              <li><a href='https://' >Online Courses</a></li>
              <li><a href='https://' >Apply Online</a></li>
              <li><a href='https://' >Admission Procedure + How to Apply?</a></li>
              <li><a href='https://' >Student Welfare</a></li>
            </ul>
          </div>
          <div className='col-3'>
            <h3>Undergraduate Programme</h3>
            <ul>
              <li><a href='https://' >Delhi Campus:</a></li>
              <li><a href='https://' >+91 9717094061, +91 9717094063</a></li>
              <li><a href='https://' >+91 11 4065 1001, +91 11 4065 1002</a></li>
              <li><a href='https://' >info@icriindia.com</a></li>
              <li><a href='https://' >rajniti@icriindia.com</a></li>
              <li><a href='https://' >ILAM - Admission Centre</a></li>
              <li><a href='https://' >Office No. 305, 3rd Floor,</a></li>
              <li><a href='https://' >Deenar Bhawan, Nehru Place- 110019</a></li>
            </ul>
          </div>
        </div> */}

      </div>
    );
  };
  
  export default Footer;