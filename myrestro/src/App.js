import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Booking from "./Pages/Booking";
import Menu from "./Pages/Menu";
import Chefs from "./Pages/Chefs";
import Contact from "./Pages/Contact";
import Events from "./Pages/Events";
import Sign_in from "./Pages/Sign_in";
import Sign_up from "./Pages/Sign_up"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./Pages/Profile";
import Editprofile from "./Pages/Editprofile";

function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" element={<><Header/><Home/><Footer/></>}></Route>
        <Route path="/About" element={<><Header/><About/><Footer/></>}></Route>
        <Route path="/Menu" element={<><Header/><Menu/><Footer/></>}></Route>
        <Route path="/Events" element={<><Header/><Events/><Footer/></>}></Route>
        <Route path="/Chefs" element={<><Header/><Chefs/><Footer/></>}></Route>
        <Route path="/Contact" element={<><Header/><Contact/><Footer/></>}></Route>
        <Route path="/Booking" element={<><Header/><Booking/><Footer/></>}></Route>
        <Route path="/Signin" element={<><Header/><Sign_in/><Footer/></>}></Route>
        <Route path="/Signup" element={<><Header/><Sign_up/><Footer/></>}></Route>
        <Route path="/Profile" element={<><Header/><Profile/><Footer/></>}></Route>
        <Route path="/Editprofile/:id" element={<><Header/><Editprofile/><Footer/></>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
