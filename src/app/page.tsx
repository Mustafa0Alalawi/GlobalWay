import Testimonials from "./components/Testimonials.tsx";
import Impact from "./components/Impact.tsx";
import SupportSection from "./components/SupportSection.tsx";
import StudentWord from "./components/StudentWord.tsx";
import SubscriptionPlans from "./components/SubscriptionPlans.tsx";
import ContactForm from "./components/ContactForm.tsx";
import Hero from "./components/Hero.tsx";

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
