import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import Workflow from "./Workflow";
import Footer from "./Footer";
import Testimonials from "./Testimonials";

const LandingPage = () => {
    return (
        <> 
          <Navbar />
          <div className="max-w-7xl mx-auto pt-20 px-6">
            <HeroSection />
            <FeatureSection />
            <Workflow />
            <Testimonials />
            <Footer />
          </div>
        </>
      );
}

export default LandingPage