import {Routes, Route, useLocation} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// PAGES 
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Testimonials from "./pages/Testimonials/Testimonials";
import Contact from "./pages/Contact/Contact";
import Booking from "./pages/Booking/Booking";

// ADMIN PAGES
import Login from "./admin/pages/Login/Login";
import Dashboard from "./admin/pages/Dashboard/Dashboard";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className='d-flex flex-column min-vh-100'>

      {!isAdminRoute && <Navbar />}

      <main className="app-content flex-grow-1">
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/testimonials" element={<Testimonials />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/booking" element={<Booking />}/>
          
          {/* ADMIN ROUTES */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />}  />
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}

    </div>
  );
}

export default App;