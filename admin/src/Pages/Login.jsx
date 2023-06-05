import React,{useState,useEffect,} from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

  const [formvalue,setFormvalue]=useState({
    email:"",
    password:""
  });

  const onchange=(e)=>{
    setFormvalue({...formvalue,[e.target.name]:e.target.value});
    console.log(formvalue);
  }

  const validate=()=>{
    var res = true;
    if(formvalue.email==""||formvalue.email==null){
      res = false;
      toast.error("Email Fill Required!");
    }
    if(formvalue.password==""||formvalue.password==null){
      res = false;
      toast.error("Password Fill Required!");
    }
    return res;
  }

  const redirect=useNavigate();
  
  useEffect(()=>{
    if(localStorage.getItem('adminid')){
      redirect('/Dashboard');
    }
  },[]);

  const login=async(e)=>{
    e.preventDefault();
    if(validate()){
      const response=await axios.get(`http://localhost:3000/admin?email=${formvalue.email}`);
      if(response.data.length>0){
        if(response.data[0].password==formvalue.password){
          localStorage.setItem('adminid',response.data[0].id);
          localStorage.setItem('adminname',response.data[0].name);

          toast.success("Login Successfull");
          return redirect('/Dashboard');
        }else{
            toast.error('Login Failed due to Password is wrong!');
            setFormvalue({...formvalue,email:"",password:""});
        }
      }else{
        toast.error('Login Failed due to Email is wrong!');
        setFormvalue({...formvalue,email:"",email:""});
      }
    }
  }

  return (
<div className="container-scroller">
  <div className="container-fluid page-body-wrapper full-page-wrapper">
    <div className="content-wrapper d-flex align-items-center auth px-0">
      <div className="row w-100 mx-0">
        <div className="col-lg-4 mx-auto">
          <div className="auth-form-light text-left py-5 px-4 px-sm-5">
            <div className="brand-logo">
              <img src="../../images/logo.svg" alt="logo" />
            </div>
            <h4>Hello! let's get started</h4>
            <h6 className="fw-light">Sign in to continue.</h6>
            <form className="pt-3">
              <div className="form-group">
                <input type="email" name='email' value={formvalue.email} onChange={onchange} className="form-control form-control-lg" placeholder="Username" />
              </div>
              <div className="form-group">
                <input type="password" name='password' value={formvalue.password} onChange={onchange} className="form-control form-control-lg" placeholder="Password" />
              </div>
              <div className="mt-3">
                <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="javascript:void(0)" onClick={login}>SIGN IN</a>
              </div>
              <div className="my-2 d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <label className="form-check-label text-muted">
                    <input type="checkbox" className="form-check-input" />
                    Keep me signed in
                  </label>
                </div>
                <a href="#" className="auth-link text-black">Forgot password?</a>
              </div>
              <div className="mb-2">
                <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                  <i className="ti-facebook me-2" />Connect using facebook
                </button>
              </div>
              <div className="text-center mt-4 fw-light">
                Don't have an account? <Link to="/Signup" className="text-primary">Create</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* content-wrapper ends */}
  </div>
  {/* page-body-wrapper ends */}
</div>

  )
}

export default Login