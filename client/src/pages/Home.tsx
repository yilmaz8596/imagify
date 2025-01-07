import { useState } from "react";
import { useAppContext } from "../context/context";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Info from "../components/Info";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const { isOpen, closeModal } = useAppContext();

  const openRegisterModal = () => {
    closeModal();
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
      <Hero />
      <HowItWorks />
      <Info />
      <Testimonials />
      <Footer />
    </div>
  );
}
