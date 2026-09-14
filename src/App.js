import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Landing from "./Pages/Landing";
import Campaigns from "./Pages/Campaigns";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  const basename = window.location.pathname.startsWith("/erick-second-site")
    ? "/erick-second-site"
    : undefined;

  return (
    <div className="min-h-screen bg-[#080807] text-stone-100">
      <div className="min-h-screen">
        <BrowserRouter basename={basename}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
