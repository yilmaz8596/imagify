import { useUserStore } from "./stores/useUserStore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Generate from "./pages/Generate";
import { Toaster } from "react-hot-toast";

export default function App() {
  const { user } = useUserStore();
  return (
    <main
      className="min-h-screen w-full
  bg-gradient-to-b from-[#F2FFF9] to-[#FFF6F1] 
  "
    >
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={user ? <Generate /> : <Home />} />
        </Routes>
      </Router>
    </main>
  );
}
