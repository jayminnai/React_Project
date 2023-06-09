import React,{useEffect,useState} from 'react'
import Header from '../../Components/Header'
import Side_header from '../../Components/Side_header'
import Footer from '../../Components/Footer'
import { Helmet } from "react-helmet";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Product_table() {
    
    useEffect(()=>{
        fetchproduct();
    },[]);

    const[productdata,setProductdata]=useState([]);

    const fetchproduct = async()=>{
        const response = await axios.get(`http://localhost:3000/product`);
        console.log(response);
        setProductdata(response.data);
    }
    const onDelete=async(id)=>{
        const response=await axios.delete(`http://localhost:3000/product/${id}`);
        if(response.status>=200 && response.status<300){
            toast.success("Product Delete Successfully");
            fetchproduct();
        }
    }

    return (
      <div className="container-scroller">
    {/* partial:../../partials/_navbar.html */}
    <Header/>
    {/* partial */}
    <div className="container-fluid page-body-wrapper">
      {/* partial:../../partials/_settings-panel.html */}
      <div className="theme-setting-wrapper">
        <div id="settings-trigger"><i className="ti-settings" /></div>
        <div id="theme-settings" className="settings-panel">
          <i className="settings-close ti-close" />
          <p className="settings-heading">SIDEBAR SKINS</p>
          <div className="sidebar-bg-options selected" id="sidebar-light-theme"><div className="img-ss rounded-circle bg-light border me-3" />Light</div>
          <div className="sidebar-bg-options" id="sidebar-dark-theme"><div className="img-ss rounded-circle bg-dark border me-3" />Dark</div>
          <p className="settings-heading mt-2">HEADER SKINS</p>
          <div className="color-tiles mx-0 px-4">
            <div className="tiles success" />
            <div className="tiles warning" />
            <div className="tiles danger" />
            <div className="tiles info" />
            <div className="tiles dark" />
            <div className="tiles default" />
          </div>
        </div>
      </div>
      <div id="right-sidebar" className="settings-panel">
        <i className="settings-close ti-close" />
        <ul className="nav nav-tabs border-top" id="setting-panel" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="todo-tab" data-bs-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="chats-tab" data-bs-toggle="tab" href="#chats-section" role="tab" aria-controls="chats-section">CHATS</a>
          </li>
        </ul>
        <div className="tab-content" id="setting-content">
          <div className="tab-pane fade show active scroll-wrapper" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
            <div className="add-items d-flex px-3 mb-0">
              <form className="form w-100">
                <div className="form-group d-flex">
                  <input type="text" className="form-control todo-list-input" placeholder="Add To-do" />
                  <button type="submit" className="add btn btn-primary todo-list-add-btn" id="add-task">Add</button>
                </div>
              </form>
            </div>
            <div className="list-wrapper px-3">
              <ul className="d-flex flex-column-reverse todo-list">
                <li>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="checkbox" type="checkbox" />
                      Team review meeting at 3.00 PM
                    </label>
                  </div>
                  <i className="remove ti-close" />
                </li>
                <li>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="checkbox" type="checkbox" />
                      Prepare for presentation
                    </label>
                  </div>
                  <i className="remove ti-close" />
                </li>
                <li>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="checkbox" type="checkbox" />
                      Resolve all the low priority tickets due today
                    </label>
                  </div>
                  <i className="remove ti-close" />
                </li>
                <li className="completed">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="checkbox" type="checkbox" defaultChecked />
                      Schedule meeting for next week
                    </label>
                  </div>
                  <i className="remove ti-close" />
                </li>
                <li className="completed">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="checkbox" type="checkbox" defaultChecked />
                      Project review
                    </label>
                  </div>
                  <i className="remove ti-close" />
                </li>
              </ul>
            </div>
            <h4 className="px-3 text-muted mt-5 fw-light mb-0">Events</h4>
            <div className="events pt-4 px-3">
              <div className="wrapper d-flex mb-2">
                <i className="ti-control-record text-primary me-2" />
                <span>Feb 11 2018</span>
              </div>
              <p className="mb-0 font-weight-thin text-gray">Creating component page build a js</p>
              <p className="text-gray mb-0">The total number of sessions</p>
            </div>
            <div className="events pt-4 px-3">
              <div className="wrapper d-flex mb-2">
                <i className="ti-control-record text-primary me-2" />
                <span>Feb 7 2018</span>
              </div>
              <p className="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
              <p className="text-gray mb-0 ">Call Sarah Graves</p>
            </div>
          </div>
          {/* To do section tab ends */}
          <div className="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
            <div className="d-flex align-items-center justify-content-between border-bottom">
              <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
              <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 fw-normal">See All</small>
            </div>
            <ul className="chat-list">
              <li className="list active">
                <div className="profile"><img src="../../images/faces/face1.jpg" alt="image" /><span className="online" /></div>
                <div className="info">
                  <p>Thomas Douglas</p>
                  <p>Available</p>
                </div>
                <small className="text-muted my-auto">19 min</small>
              </li>
              <li className="list">
                <div className="profile"><img src="../../images/faces/face2.jpg" alt="image" /><span className="offline" /></div>
                <div className="info">
                  <div className="wrapper d-flex">
                    <p>Catherine</p>
                  </div>
                  <p>Away</p>
                </div>
                <div className="badge badge-success badge-pill my-auto mx-2">4</div>
                <small className="text-muted my-auto">23 min</small>
              </li>
              <li className="list">
                <div className="profile"><img src="../../images/faces/face3.jpg" alt="image" /><span className="online" /></div>
                <div className="info">
                  <p>Daniel Russell</p>
                  <p>Available</p>
                </div>
                <small className="text-muted my-auto">14 min</small>
              </li>
              <li className="list">
                <div className="profile"><img src="../../images/faces/face4.jpg" alt="image" /><span className="offline" /></div>
                <div className="info">
                  <p>James Richardson</p>
                  <p>Away</p>
                </div>
                <small className="text-muted my-auto">2 min</small>
              </li>
              <li className="list">
                <div className="profile"><img src="../../images/faces/face5.jpg" alt="image" /><span className="online" /></div>
                <div className="info">
                  <p>Madeline Kennedy</p>
                  <p>Available</p>
                </div>
                <small className="text-muted my-auto">5 min</small>
              </li>
              <li className="list">
                <div className="profile"><img src="../../images/faces/face6.jpg" alt="image" /><span className="online" /></div>
                <div className="info">
                  <p>Sarah Graves</p>
                  <p>Available</p>
                </div>
                <small className="text-muted my-auto">47 min</small>
              </li>
            </ul>
          </div>
          {/* chat tab ends */}
        </div>
      </div>
      {/* partial */}
      {/* partial:../../partials/_sidebar.html */}
      <Side_header/>
      {/* partial */}
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-lg-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Product Manage</h4>
                  <p className="card-description">
                    Product Details
                  </p>
                  <div className="table-responsive">
                    <table className="table table-hover text-center">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Image</th>
                          <th>Product Details</th>
                          <th>Price</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          productdata.map((item)=>{
                            return (
                              <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td><img src={item.image} alt="" style={{height:"50px",width:"50px"}}/></td>
                                <td>{item.detail}</td>
                                <td>{item.price}</td>
                                <td><span className='btn-danger' onClick={()=>{onDelete(item.id)}} style={{padding:'5px 15px',borderRadius:'7px'}}><i className='fa fa-trash'></i></span></td>
                              </tr>
                            );
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* content-wrapper ends */}
        {/* partial:../../partials/_footer.html */}
        <Footer/>
        {/* partial */}
      </div>
      {/* main-panel ends */}
    </div>
    {/* page-body-wrapper ends */}
  </div>
  
    )
  }

export default Product_table