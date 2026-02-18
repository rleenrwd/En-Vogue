import {Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";

// PAGES 
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Testimonials from "./pages/Testimonials/Testimonials";
import Contact from "./pages/Contact/Contact";
import Booking from "./pages/Booking/Booking";

function App() {
  return (
    <main>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/testimonials" element={<Testimonials />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/booking" element={<Booking />}/>

      </Routes>

    </main>
  );
}

export default App;