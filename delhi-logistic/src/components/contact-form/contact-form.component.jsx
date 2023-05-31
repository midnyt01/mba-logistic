import React, { useEffect, useState } from "react";
import ContactImgBanner from "../../assets/WhatsApp Image 2023-05-23 at 11.30.18 AM.jpeg";
import "../home-content/home-content.styled.css";
import Fade from "react-reveal/Fade";
import Prospectus from "../../assets/prospectus.pdf";
import emailjs from "@emailjs/browser";

const Default_form_field = {
  Name: "",
  PhoneNumber: "",
  Email: "",
  City: "",
  Qualification: "",
  Course: "",
  Query: "",
};

const ContactForm = () => {
  const [campus, setCampus] = useState(null);
  const [UniOption, setUniOption] = useState([]);
  const [quali, setQuali] = useState(null);

  const [formField, setFormField] = useState(Default_form_field);
  const { Name, PhoneNumber, Email, City, Qualification, Course, Query } =
    formField;

  const handleOnFieldChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleOnCourseChange = (e) => {
    const { value } = e.target;
    if (value) {
      let newDetails = formField;
      newDetails.Course = value;
      setFormField({ ...newDetails });
    }
  };

  const handleOnQualificationCampus = (e) => {
    const { value } = e.target;
    if (value) {
      let newDetails = formField;
      newDetails.Qualification = value;
      setFormField({ ...newDetails });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_mg1yl5p", "template_vm4z6yd",form.current, '1g6YrUPoy-yxB0-Au' )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(formField);
    let alink = document.createElement("a");
    alink.href = Prospectus;
    alink.download = "MBA Logistics & Supply Chain Management - Delhi";
    alink.click();
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
      setUniOption(["ILAM - Jagannath University "]);
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
          <h2 className="default-heading-h2">
            Fill your details and download Brochure
            <hr className="heading-h2" />
          </h2>
        </div>
        <div className="d-flex al-item-cen jc-space-around contact-flex col-rev">
          <div className="contact-image-wrapper d-flex jc-center fd-col al-item-cen">
            <h3>ILAM- Jagannath University, New Delhi</h3>
            <img
              src={ContactImgBanner}
              alt="ILAM- Jagannath University, New Delhi"
            />
          </div>
          <Fade bottom cascade>
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleOnSubmit}>
                <p>
                  <input
                    placeholder="Enter your name"
                    type="text"
                    name="Name"
                    value={Name}
                    onChange={handleOnFieldChange}
                    required
                  />
                </p>
                <p>
                  <input
                    placeholder="Enter your phone number"
                    type="mobile"
                    name="PhoneNumber"
                    value={PhoneNumber}
                    onChange={handleOnFieldChange}
                    required
                  />
                </p>
                <p>
                  <input
                    placeholder="Enter your email"
                    type="mail"
                    name="Email"
                    value={Email}
                    onChange={handleOnFieldChange}
                    required
                  />
                </p>
                <p>
                  <input
                    placeholder="Enter your city name"
                    type="text"
                    name="City"
                    value={City}
                    onChange={handleOnFieldChange}
                    required
                  />
                </p>
                {/* <p>
                <select required name="Campus" id="Campus" onClick={handleOnChangeCampus}>
                  <option value="none">Select a campus</option>
                  <option value="Delhi campus">Delhi Campus</option>
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
                    name="Qualification"
                    id="Qualification"
                    onClick={handleOnQualificationCampus}
                    required
                  >
                    <option value="">Select Qualificaiton</option>
                    {/* <option value="12th">12th</option> */}
                    <option value="Graduate">Graduate</option>
                    <option value="Graduation - Final year">
                      Graduation- Final year
                    </option>
                  </select>
                </p>
                <p>
                  <select
                    required
                    id="ddlcp"
                    name="ddlcp"
                    onChange={handleOnCourseChange}
                  >
                    <option value="">Select course</option>
                    {/* <option value="MBA Logistic">
                        MBA Aviation Management
                      </option> */}
                    <option value="MBA Logistic">
                      MBA Logistic and Supply Chain Management
                    </option>
                    {/* <option value="MBA Aviation Management">
                    MBA Aviation Management
                    </option> */}
                  </select>
                </p>
                <p>
                  <input
                    placeholder="Query"
                    type="text"
                    name="Query"
                    value={Query}
                    onChange={handleOnFieldChange}
                  />
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {/* <a
                    href={Prospectus}
                    target="_blank"
                    download="delhi-logistic-prospectus"
                  > */}
                  <button
                    className="light-text default-cta h-70px"
                    style={{ padding: "10px 70px", margin: "auto" }}
                  >
                    Download Brochure
                  </button>
                  {/* </a> */}
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
