import { Link } from 'react-router-dom';
import Mainlogo from '../../assets/logo1.png';
import SecondLogo from '../../assets/Logo/Jagannath University Delhi.png';

import '../hero-banner/hero-banner.styled.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Topbar = () => {



    return (
      <div className="container m-auto">
        <div className='hero-banner-heading'>
          <h2><FontAwesomeIcon icon="fa-solid fa-bullhorn" /> &nbsp; ADMISSIONS OPEN</h2>
        </div>
        <div className='topbar-container'>
            <div className='topbar-wrapper'>
              <div className='d-flex jc-center'>
                <img src={Mainlogo} alt='ILAM Logo' className='w-100'/>
                <img src={SecondLogo} alt='ILAM Logo' className='ml-3 padding-5' style={{width:"48%"}}/>
              </div>
              <div className='topbar-cta'>
                <ul>
                  <li><a href = "mailto: info@icriindia.com"><FontAwesomeIcon icon="fa-solid fa-envelope" />info@icriindia.com</a></li>
                  <li><a href="tel:9717194563"><FontAwesomeIcon icon="fa-solid fa-phone" />9717194563-61</a></li>
                </ul>
              </div>
                {/* <span className='cta-btn-text f-size-1 side-menu-icon' onClick={sidebarToggle} >
                    <FontAwesomeIcon icon="fa-solid fa-bars" />
                    </span>
                { isSidenavOpen && <Sidebar sidebarToggle={sidebarToggle} /> } */}
            </div>
        </div>
      </div>
    );
  };
  
  export default Topbar;