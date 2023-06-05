import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Form, Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Sign_in() {
  const redirect=useNavigate();
  const[formvalue,setFormvalue]=useState({
    email:"",
    password:""
  });

  const onchange=(e)=>{
    setFormvalue({...formvalue,[e.target.name]:e.target.value});
    console.log(formvalue);
  }

  function validate(){
    var result =true;
    if(formvalue.email==""||formvalue.email==null){
      result=false;
      toast.error("Email Required!!");
    }
    if(formvalue.password==""||formvalue.password==null){
      result=false;
      toast.error("Password Required!!");
    }
    return result;
  }

  const onsubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const response = await axios.get(
        ` http://localhost:3000/user?email=${formvalue.email}`
      );
      if (response.data.length > 0) {
        if (response.data[0].password == formvalue.password) {
          if (response.data[0].status == "Unblock") {
            //session variable store in browser
            localStorage.setItem("id", response.data[0].id);
            localStorage.setItem("name", response.data[0].name);

            toast.success("Login SuccessFull!!!");
            return redirect("/");
          } else {
            toast.error("Login failed due to user is Blocked");
            setFormvalue({ ...formvalue, email: "", password: "" });
          }
        } else {
          toast.error("Login Failed due to Password is wrong!");
          setFormvalue({ ...formvalue, email: "", password: "" });
        }
      } else {
        toast.error("Login Failed due to Email is wrong!");
        setFormvalue({ ...formvalue, email: "", password: "" });
      }
    }
  };

  return (
    <main id="main">
      <br />
      {/* ======= Sign In Section ======= */}
      <section id="book-a-table" className="book-a-table">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h1>Sign In</h1>
            <p>
              Please <span>Sign In</span> With Us
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
              <form className="php-email-form" method="post">
                <div className="row gy-4">
                  <div className="col-lg-12 col-md-12">
                    <input type="text" name="email" value={formvalue.email} onChange={onchange} className="form-control" placeholder="Enter Your Email" />
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <input type="password" className="form-control" name="password" onChange={onchange} value={formvalue.password} id="pwd" placeholder="Enter Your Password"/>
                  </div>
                </div>
                <div className="text-center mt-5">
                  <button type="submit" onClick={onsubmit}>Sign In</button>
                </div>
                <div class="text-center fs-6 mt-4">
                  <Link href="#">Forget Password ?</Link> or <Link to="/Signup">Sign Up</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Sign In Section */}
      </main>
  );
}

export default Sign_in;
