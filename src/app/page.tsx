import Testimonials from "./components/Testimonials";
import Impact from "./components/Impact";
import SupportSection from "./components/SupportSection";
import StudentWord from "./components/StudentWord";
import SubscriptionPlans from "./components/SubscriptionPlans";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";

const HomePage = () => {
  return (
    <div className="bg-[#ffffff]">
      <Hero />
      <Testimonials />
      <Impact />
      <SupportSection />
      <StudentWord />
      <SubscriptionPlans />
      <ContactForm />
    </div>
  );
};

export default HomePage;
