import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./landing_page/Home/Homepage";
import "./App.css";
import Product from "./landing_page/Products/product";
import Pricing from "./landing_page/Pricing/Pricing";
import Support from "./landing_page/Support/Support";
import Signup from "./landing_page/Signup/Signup";
import About from "./landing_page/About/About";
import Notfound from "./landing_page/Notfound";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Otp from "./landing_page/Signup/Otp";
import Form from "./landing_page/Signup/Form";
import Profile from "./landing_page/Signup/Profile";
import LoginForm from "./landing_page/Signup/LoginForm";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/form" element={<Form />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
