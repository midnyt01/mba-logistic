import Banner from "../components/hero-banner/hero-banner.component";
import Footer from "../components/footer/footer.component";
import Pagecontent from "../components/home-content/pagecontent.component";
import Topbar from "../components/topbar/topbar.component";
import Contactfrom from "../components/contact-form/contact-form.component";

const LandingPage = () => {
  return (
    <div>
      <Topbar />
      <Banner />
      <div className="landing-page-wrapper">
        <div className="main-content-wrapper">
          <div className="contact-form-container">
            <Contactfrom />
          </div>
          <Pagecontent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
