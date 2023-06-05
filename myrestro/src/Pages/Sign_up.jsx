import React,{useState} from "react";
import { Helmet } from "react-helmet";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function Sign_up() {

  const [formvalue,setFormvalue]=useState({
    id:"",
    name:"",
    email:"",
    password:"",
    mobile:"",
    status:""
  });

  const onchange = (e) => {
    setFormvalue({...formvalue,id:new Date().getMilliseconds().toString(),status:"Unblock",[e.target.name]:e.target.value});
    console.log(formvalue);
  }

  function validate(){
    var result=true;
    if(formvalue.name == ""|| formvalue.name == null){
      result = false;
      toast.error("Name Fill Required");
    }
    if(formvalue.email == "" || formvalue.email == null){
      result = false;
      toast.error("Email Fill Required");
    }
    if(formvalue.password == "" || formvalue.password == null){
      result = false;
      toast.error("Password Fill Required");
    }
    if(formvalue.mobile == "" || formvalue.mobile == null){
      result = false;
      toast.error("Mobile Fill Required");
    }
    return result;
  }

  const onsubmit = async (e) => {
    e.preventDefault();
    if(validate())
    {
    const response = await axios.post(`http://localhost:3000/user`,formvalue);
    console.log(response);
    if(response.status>=200 && response.status<300){
      toast.success("Register Successfull!!!!");
      setFormvalue({...formvalue,name:"",email:"",password:"",mobile:""});
    }
    }
  }

  return (
    <main id="main">
      <br />
      {/* ======= Sign up Section ======= */}
      <section id="book-a-table" className="book-a-table">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h1>Sign Up</h1>
            <p>
              Please <span>Sign Up</span> With Us
            </p>
          </div>
          <div className="row g-0">
            <div
              className="col-lg-4 reservation-img"
              style={{ backgroundImage: "url(assets/img/reservation.jpg)" }}
              data-aos="zoom-out"
              data-aos-delay={200}
            />
            <div className="col-lg-8 d-flex p-5 align-items-center reservation-form-bg">
              <form className="php-email-form" >
                <div className="row gy-4">
                  <div className="col-lg-12 col-md-12">
                    <input type="text" value={formvalue.name} onChange={onchange} name="name" className="form-control" placeholder="Enter Your Name" />
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <input type="email"value={formvalue.email} onChange={onchange} name="email" className="form-control" placeholder="Enter Your Email" />
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <input type="password" value={formvalue.password} onChange={onchange} className="form-control" name="password" id="pwd" placeholder="Enter Your Password"/>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <input type="mobile" value={formvalue.mobile} onChange={onchange} className="form-control" name="mobile" placeholder="Enter Your Mobile"/>
                  </div>
                </div>
                <div className="text-center mt-5">
                  <button type="submit" onClick={onsubmit}>Submit</button>
                </div>
                  {/* <div class="text-center fs-6 mt-4">
                    <Link href="#">Forget Password?</Link> or <Link to="/Signup">Sign Up</Link>
                  </div> */}
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Sign In Section */}
    </main>
  );
}

export default Sign_up;
