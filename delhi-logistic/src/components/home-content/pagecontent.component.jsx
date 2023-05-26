// import { Link } from 'react-router-dom';
import Slide from "react-reveal/Slide";
import InfoIcon1 from "../../assets/salary.png";
import InfoIcon2 from "../../assets/supplier.png";
import InfoIcon3 from "../../assets/cv.png";
import "./home-content.styled.css";

const Pagecontent = () => {

  const handleOnClickContact = () => {
    if (window.innerWidth > 800) {
      window.scrollTo({top: 700, behavior: 'smooth'})
    } else {
      window.scrollTo({top: 350, behavior: 'smooth'})
    }
  }

  return (
    <div className="container-fluid m-auto">
      <br /><br />
      <h2 className="default-heading-h2">
        What is the Scope?
        <hr className="heading-h2" />
      </h2>
      <Slide bottom cascade>
        <div className="box-container">
          <div className="info-box red-box">
            <img src={InfoIcon1} alt="clg icon" />
            <h3>INR 4 Lacs to INR 7 Lacs</h3>
            <p>Average starting salary per year</p>
          </div>
          <div className="info-box mustard-box">
            <img src={InfoIcon2} alt="clg icon" />
            <h3>USD $16</h3>
            <p>Million Dollar Industry</p>
          </div>
          <div className="info-box blue-box">
            <img src={InfoIcon3} alt="clg icon" />
            <h3>2,50,000</h3>
            <p>No. of vacancies</p>
          </div>
        </div>
        <br /><br />
        <h2 className="default-heading-h2">
        WHAT IS LOGISTIC AND SUPPLY CHAIN MANAGEMENT
          <hr className="heading-h2" />
        </h2>
        <div>
          <ul>
            <li>
            Supply Chain Management (SCM) is the oversight of materials, information, and finances as they move in a process from supplier to manufacturer to wholesaler to retailer to consume
            </li>
            <li>
            Logistics is the process/chain management of transport flow and the storage of goods and services from their origin to their consumption.
            </li>
            <li>
            It includes both inbound & outbound movements.
            </li>
            <li>
            Supply chain management can be divided into 3 main flows: Product flow, Information flow, and Finances flow.
            </li>
            <li>
            This program provides a blend of practical and classroom teaching, which makes you a preferred candidate for your future employer in the field of supply chain management in India.
            </li>
          </ul>
        </div>

        {/* featurs */}
        <h2 className="default-heading-h2">
          WHY MBA IN LOGISTIC AND SUPPLY CHAIN MANAGEMENT
          <hr className="heading-h2" />
        </h2>
        <div>
          <ul>
            <li>
            Industry has a huge shortage of skilled professionals.
            </li>
            <li>
            Hence our job-oriented program prepares aspirants for niche industries and bridges the gap between demand and supply.

            </li>
            <li>
            MBA in Logistics & Supply Chain trains you exhaustively towards all aspects of the industry; companies are willing to absorb you even if it costs them some premium.

            </li>
            <li>
            The global logistics industry is valued at US$ 8.1 trillion & will grow to 650.52 Billion by 2028. The sector employed more than 28.4 million employees in 2028.
            </li>
            <li>India's leading logistics companies are BlueDart, DTDC, Delhivery, Gati, Ekart, DHL, FedEx, Shadowfax, Ecom Express, and India Post.
            </li>
          </ul>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button onClick={handleOnClickContact} className="light-text default-cta h-70px" style={{padding: '10px 70px', margin: 'auto'}}>Apply Now</button>
        </div>
      </Slide>
    </div>
  );
};

export default Pagecontent;
