import React,{useState,useEffect} from "react";
import { Helmet } from "react-helmet";
import { useParams,useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function Editprofile() {

  const [formvalue,setFormvalue]=useState({
    name:"",
    email:"",
    password:"",
    mobile:""
  });

  const redirect=useNavigate();
  const {id}=useParams();

  useEffect(()=>{
    if(localStorage.getItem('id'))
    {
      fetchedit();
    }
    else
    {
      redirect('/');
    }
  },[]);


  const fetchedit = async()=>
  {
    const profiledata= await axios.get(`http://localhost:3000/user/${id}`);
    console.log(profiledata.data);
    setFormvalue({...formvalue,name:profiledata.data.name, email:profiledata.data.email, password:profiledata.data.password, mobile:profiledata.data.mobile});
  }

  const onchange = (e) => {
    setFormvalue({...formvalue,[e.target.name]:e.target.value});
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

  const onSubmit = async (e) => {
    e.preventDefault();
    if(validate())
    {
    const response = await axios.patch(`http://localhost:3000/user/${id}`,formvalue);
    // console.log(response);
    if(response.status >= 200 && response.status<300){
      toast.success("Profile Update Successfully.....");
      setFormvalue({...formvalue,name:"",email:"",password:"",mobile:""});
      localStorage.setItem('name',formvalue.name);
      redirect('/Profile');
    }
    }
  }

  return (
    <main id="main">
      <br />
      <br />
      <br />
      {/* ======= Sign up Section ======= */}
      <section id="book-a-table" className="book-a-table">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h1>Edit Profile</h1>
            <p>
              Please <span>Update your profile</span> With Us
            </p>
          </div>
          <div className="row g-0">
            {/* <div
              className="col-lg-4 reservation-img"
              style={{ backgroundImage: "url(assets/img/reservation.jpg)" }}
              data-aos="zoom-out"
              data-aos-delay={200}
            /> */}
            <div className="col-lg-12 d-flex p-5 align-items-center justify-content-center reservation-form-bg">
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
                  <button type="submit" onClick={onSubmit}>Submit</button>
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

export default Editprofile;
