import React, { useEffect, useState } from "react";
import ContactImgBanner from '../../assets/WhatsApp Image 2023-05-23 at 11.30.18 AM.jpeg'
import "../home-content/home-content.styled.css";
import Fade from 'react-reveal/Fade';

const ContactForm = () => {

  const [campus, setCampus] = useState(null);
  const [UniOption, setUniOption] = useState([]);
  const [quali, setQuali] = useState(null);

  const handleOnChangeCampus = (e) => {
    const { value } = e.target;
    if (value) {
      setCampus(value);
    }
  };

  const handleOnQualificationCampus = (e) => {
    const { value } = e.target;
    if (value) {
      setQuali(value);
    }
  };

  useEffect(() => {
    console.log(campus);
    if (campus === "Bhopal campus") {
      setUniOption(["Sam Global University"]);
    } else if (campus === "Bangalore campus") {
      setUniOption(["Rai Technology University"]);
    } else if (campus === "Mumbai campus") {
      setUniOption(["ILAM - MUMBAI"]);
    } else if (campus === "Delhi campus") {
      setUniOption([
        "ILAM - Jagannath University ",
      ]);
    } else if (campus === "Pune campus") {
      setUniOption(["Ajeenkya DY Patil"]);
    } else if (campus === "Ghaziabad campus") {
      setUniOption(["Mewar"]);
    } else if (campus === "Jaipur campus") {
      setUniOption([
        "Jaipur National University",
        "Jagannath University Jaipur",
      ]);
    } else if (campus === "Dehradun campus") {
      setUniOption([
        "Himgiri Zee University, Dehradun",
        "DIT University",
        "Sai Group of Institutions",
        "Sardar Bhagwan Singh University",
      ]);
    } else if (campus === "Indore campus") {
      setUniOption(["Oriental University"]);
    }
  }, [campus]);

  return (
    <div className="container m-auto grey-section-bg">
      <div className="container-fluid m-auto">
        <div className="pt-1 res-pt-2">
          <h2 className='default-heading-h2'>Fill your details and download Brochure
            <hr className='heading-h2'/>
          </h2>
        </div>
        <div className="d-flex al-item-cen jc-space-around contact-flex col-rev">
          <div className="contact-image-wrapper d-flex jc-center fd-col al-item-cen">
            <h3>ILAM- ICRI, Mumbai</h3>
            <img src={ContactImgBanner} alt="ILAM- ICRI, Mumbai" />
          </div>
          <Fade bottom cascade>
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <p>
                <input placeholder="Enter your name" type="text" required/>
              </p>
              <p>
                <input placeholder="Enter your phone number" type="mobile" required/>
              </p>
              
              <p>
                <input placeholder="Enter your email" type="mail" required/>
              </p>
              <p>
                <input placeholder="Enter your city name" type="mobile" required/>
              </p>
              {/* <p>
                <select required name="Campus" id="Campus" onClick={handleOnChangeCampus}>
                  <option value="none">Select a campus</option>
                  <option value="Mumbai campus">Mumbai Campus</option>
                </select>
              </p>
              <p>
                <select required name="Campus" id="Campus" onClick={handleOnChangeCampus}>
                  <option value="none">Select a University</option>
                  {UniOption.length &&
                    UniOption.map((value) => {
                      return <option value={`${value}`}>{value}</option>;
                    })}
                </select>
              </p> */}
              <p>
                <select
                required
                  name="Qualification"
                  id="Qualification"
                  onClick={handleOnQualificationCampus}
                >
                  <option value="none">Select Qualificaiton</option>
                  {/* <option value="12th">12th</option> */}
                  <option value="Graduate">Graduate</option>
                  <option value="Graduation - Final year">Graduation- Final year</option>
                </select>
              </p>
              <p>
                    {
                        (quali === '12th') ? (
                            <select name="ddlcp"><option value="">Select course</option><option value="BBA Aviation Management ">BBA Aviation Management</option><option value="BBA Logistics &amp; Supply Chain Management">BBA Logistics &amp; Supply Chain Management</option><option value="BBA Public Policy">BBA Public Policy</option><option value="BSc Fashion Designing">BSc Fashion Designing</option><option value="BSc Interior Designing ">BSc Interior Designing </option><option value="BSc Graphic, Advertising &amp; Digital Designing">BSc Graphic, Advertising &amp; Digital Designing</option><option value="BBA Automobile &amp; Marketing Management">BBA Automobile &amp; Marketing Management</option><option value="BBA Accountancy, Taxation &amp; Audit">BBA Accountancy, Taxation &amp; Audit</option><option value="Diploma in Aviation, Travel &amp; Tourism">Diploma in Aviation, Travel &amp; Tourism</option><option value="Diploma in Logistics &amp; Supply Chain Management">Diploma in Logistics &amp; Supply Chain Management</option> <option value="PG Diploma in Aviation Management">PG Diploma in Aviation Management</option><option value="PG Diploma in Logistics &amp; Supply Chain Management">PG Diploma in Logistics &amp; Supply Chain Management</option><option value="Certification in Logistics &amp; Supply Chain Management">Certification in Logistics &amp; Supply Chain Management</option><option value="EPG Diploma in Logistics &amp; Supply Chain Management">EPG Diploma in Logistics &amp; Supply Chain Management</option><option value="BA Psychology ">BA Psychology</option><option value="BBA Logistics &amp; Supply Chain Management">BBA Logistics &amp; Supply Chain Management</option><option value="BBA Aviation Management">BBA Aviation Management</option></select>
                        ) : (
                            <select required id="ddlcp" name="ddlcp">
                  <option value="">Select course</option>
                  {/* <option value="MBA Banking &amp; Wealth Management">
                    MBA Banking &amp; Wealth Management
                  </option>
                  <option value="MBA Automobile &amp; Marketing Management">
                    MBA Automobile &amp; Marketing Management
                  </option>
                  <option value="Diploma in Aviation, Travel &amp; Tourism">
                    Diploma in Aviation, Travel &amp; Tourism
                  </option>
                  <option value="Diploma in Logistics &amp; Supply Chain Management">
                    Diploma in Logistics &amp; Supply Chain Management
                  </option>{" "}
                  <option value="PG Diploma in Aviation Management">
                    PG Diploma in Aviation Management
                  </option>
                  <option value="PG Diploma in Logistics &amp; Supply Chain Management">
                    PG Diploma in Logistics &amp; Supply Chain Management
                  </option>
                  <option value="Certification in Logistics &amp; Supply Chain Management">
                    Certification in Logistics &amp; Supply Chain Management
                  </option>
                  <option value="EPG Diploma in Logistics &amp; Supply Chain Management">
                    EPG Diploma in Logistics &amp; Supply Chain Management
                  </option>
                  <option value="Master in Punblic Health">
                    Master in Punblic Health
                  </option> */}
                  <option value="MBA Logistic">
                    MBA Logistic and Supply Chain Management
                  </option>
                  {/* <option value="Master in Hospital Administration">
                    {" "}
                    Master in Hospital Administration
                  </option>
                  <option value="MBA Logistics &amp; Supply Chain Management">
                    MBA Logistics &amp; Supply Chain Management
                  </option>{" "}
                  <option value="MA Clinical Psychology">
                    MA Clinical Psychology
                  </option> */}
                </select>
                        )
                    }
              </p>
              <p>
                <input placeholder="Query" type="text" />
              </p>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <button className="light-text default-cta h-70px" style={{padding: '10px 70px', margin: 'auto'}}>Download Brochure</button>
              </div>
            </form>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
