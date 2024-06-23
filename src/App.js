import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Landing from "./Pages/Landing";
import Campaigns from "./Pages/Campaigns";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="flex flex-col w-full h-full bg-stone-950 ">
      <div className="w-full h-full object-cover">
        <BrowserRouter>
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
