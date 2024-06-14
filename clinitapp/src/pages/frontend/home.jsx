import Header from "../../components/frontend/header";
import Footer from "../../components/frontend/footer";
import WhyUs from "../../components/frontend/whyus";
import About from "../../components/frontend/about";
import Counts from "../../components/frontend/counts";
import Services from "../../components/frontend/services";
import Appointment from "../../components/frontend/appointment";
import DepartmentsSection from "../../components/frontend/department";
import DoctorsSection from "../../components/frontend/doctors";
import FaqSection from "../../components/frontend/faquestions";
import TestimonialsSection from "../../components/frontend/testimonial";
import GallerySection from "../../components/frontend/gallery";
import ContactSection from "../../components/frontend/contact";

export default function Home() {
  return (
    <>
      <Header />
      <section id="hero" className="d-flex align-items-center">
        <div classname="container">
          <h1>Welcome to Medilab</h1>
          <h2>We are team of talented designers making websites with Bootstrap</h2>
          <a href="#about" className="btn-get-started scrollto">Get Started</a>
        </div>
      </section>
      <WhyUs />
      <About />
      <Counts />
      <Services />
      <Appointment />
      <DepartmentsSection />
      <DoctorsSection />
      <FaqSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </>
  )
}
