import { useState } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Info from "../components/Info";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openRegisterModal = () => {
    setIsOpen(false);
    setIsRegisterOpen(true);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#F2FFF9] to-[#FFF6F1]">
      <LoginModal
        isOpen={isOpen}
        onClose={closeModal}
        showRegister={openRegisterModal}
      />
      <RegisterModal
        isShow={isRegisterOpen}
        onHandleClose={() => setIsRegisterOpen(false)}
      />
      <Header openModal={openModal} />
      <Hero />
      <HowItWorks />
      <Info />
      <Testimonials />
      <Footer />
    </div>
  );
}
