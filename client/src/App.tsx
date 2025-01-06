import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <main
      className="min-h-screen w-full
  bg-gradient-to-b from-[#F2FFF9] to-[#FFF6F1] 
  "
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
}
