import React,{useState,useEffect} from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

function Profile() {
  const redirect=useNavigate();
  const [myprofile,setMyprofile]=useState([]);
  
  useEffect(()=>{
    if(localStorage.getItem('id'))
    {
      fetchProfile();
    }
    else
    {
      redirect('/');
    }

  },[]);

  const fetchProfile=async()=>{
    const response=await axios.get(`http://localhost:3000/user/${localStorage.getItem('id')}`);
    // console.log(response);
    setMyprofile(response.data);
  }

  return (
    <main id="main">
      <br />
    {/* ======= Contact Section ======= */}
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h1>Profile</h1>
          <p>Details <span>About Me</span></p>
        </div>
        <div className="row gy-4">
          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon bi bi-map flex-shrink-0" />
              <div>
                <h3>Name</h3>
                <p>{myprofile.name}</p>
              </div>
            </div>
          </div>{/* End Info Item */}
          <div className="col-md-6">
            <div className="info-item d-flex align-items-center">
              <i className="icon bi bi-envelope flex-shrink-0" />
              <div>
                <h3>Email</h3>
                <p>{myprofile.email}</p>
              </div>
            </div>
          </div>{/* End Info Item */}
          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon bi bi-telephone flex-shrink-0" />
              <div>
                <h3>Mobile</h3>
                <p>{myprofile.mobile}</p>
              </div>
            </div>
          </div>{/* End Info Item */}
          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon bi bi-share flex-shrink-0" />
              <div>
                <h3>Opening Hours</h3>
                <div><strong>Mon-Sat:</strong> 11AM - 23PM;
                  <strong>Sunday:</strong> Closed
                </div>
              </div>
            </div>
          </div>{/* End Info Item */}
        </div>
        <form className="php-email-form p-3 p-md-4">
          <div className="text-center"><button type="submit" onClick={()=>{redirect(`/Editprofile/${myprofile.id}`)}} >Edit Profile</button></div>
        </form>{/*End Contact Form */}
      </div>
    </section>{/* End Contact Section */}
  </main>
  )
}

export default Profile