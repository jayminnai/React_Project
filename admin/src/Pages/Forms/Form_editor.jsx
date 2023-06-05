import React from 'react'
import Header from '../../Components/Header'
import Side_header from '../../Components/Side_header'
import Footer from '../../Components/Footer'
import { Helmet } from "react-helmet";

function Form_editor() {
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
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Default form</h4>
                <p className="card-description">
                  Basic form layout
                </p>
                <form className="forms-sample">
                  <div className="form-group">
                    <label htmlFor="exampleInputUsername1">Username</label>
                    <input type="text" className="form-control" id="exampleInputUsername1" placeholder="Username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="Password" />
                  </div>
                  <div className="form-check form-check-flat form-check-primary">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      Remember me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary me-2">Submit</button>
                  <button className="btn btn-light">Cancel</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Horizontal Form</h4>
                <p className="card-description">
                  Horizontal form layout
                </p>
                <form className="forms-sample">
                  <div className="form-group row">
                    <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Email</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" id="exampleInputUsername2" placeholder="Username" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="exampleInputEmail2" className="col-sm-3 col-form-label">Email</label>
                    <div className="col-sm-9">
                      <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="exampleInputMobile" className="col-sm-3 col-form-label">Mobile</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" id="exampleInputMobile" placeholder="Mobile number" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="exampleInputPassword2" className="col-sm-3 col-form-label">Password</label>
                    <div className="col-sm-9">
                      <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">Re Password</label>
                    <div className="col-sm-9">
                      <input type="password" className="form-control" id="exampleInputConfirmPassword2" placeholder="Password" />
                    </div>
                  </div>
                  <div className="form-check form-check-flat form-check-primary">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      Remember me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary me-2">Submit</button>
                  <button className="btn btn-light">Cancel</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Basic form elements</h4>
                <p className="card-description">
                  Basic form elements
                </p>
                <form className="forms-sample">
                  <div className="form-group">
                    <label htmlFor="exampleInputName1">Name</label>
                    <input type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail3">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword4">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword4" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleSelectGender">Gender</label>
                    <select className="form-control" id="exampleSelectGender">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>File upload</label>
                    <input type="file" name="img[]" className="file-upload-default" />
                    <div className="input-group col-xs-12">
                      <input type="text" className="form-control file-upload-info" disabled placeholder="Upload Image" />
                      <span className="input-group-append">
                        <button className="file-upload-browse btn btn-primary" type="button">Upload</button>
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputCity1">City</label>
                    <input type="text" className="form-control" id="exampleInputCity1" placeholder="Location" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleTextarea1">Textarea</label>
                    <textarea className="form-control" id="exampleTextarea1" rows={4} defaultValue={""} />
                  </div>
                  <button type="submit" className="btn btn-primary me-2">Submit</button>
                  <button className="btn btn-light">Cancel</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Input size</h4>
                <p className="card-description">
                  Add classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>.
                </p>
                <div className="form-group">
                  <label>Large input</label>
                  <input type="text" className="form-control form-control-lg" placeholder="Username" aria-label="Username" />
                </div>
                <div className="form-group">
                  <label>Default input</label>
                  <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
                </div>
                <div className="form-group">
                  <label>Small input</label>
                  <input type="text" className="form-control form-control-sm" placeholder="Username" aria-label="Username" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Select size</h4>
                <p className="card-description">
                  Add classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>.                    
                </p>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">Large select</label>
                  <select className="form-control form-control-lg" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect2">Default select</label>
                  <select className="form-control" id="exampleFormControlSelect2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect3">Small select</label>
                  <select className="form-control form-control-sm" id="exampleFormControlSelect3">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Basic input groups</h4>
                <p className="card-description">
                  Basic bootstrap input groups
                </p>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-primary text-white">$</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                    <div className="input-group-append">
                      <span className="input-group-text">.00</span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                    </div>
                    <div className="input-group-prepend">
                      <span className="input-group-text">0.00</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" />
                    <div className="input-group-append">
                      <button className="btn btn-sm btn-primary" type="button">Search</button>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <button className="btn btn-sm btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div role="separator" className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Separated link</a>
                      </div>
                    </div>
                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Find in facebook" aria-label="Recipient's username" />
                    <div className="input-group-append">
                      <button className="btn btn-sm btn-facebook" type="button">
                        <i className="ti-facebook" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Checkbox Controls</h4>
                <p className="card-description">Checkbox and radio controls (default appearance is in primary color)</p>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" />
                            Default
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultChecked />
                            Checked
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" disabled />
                            Disabled
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" disabled defaultChecked />
                            Disabled checked
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" defaultValue />
                            Default
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" defaultValue="option2" defaultChecked />
                            Selected
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optionsRadios2" id="optionsRadios3" defaultValue="option3" disabled />
                            Disabled
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optionsRadio2" id="optionsRadios4" defaultValue="option4" disabled defaultChecked />
                            Selected and disabled
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-body">
                <p className="card-description">Add class <code>.form-check-{'{'}color{'}'}</code> for checkbox and radio controls in theme colors</p>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="form-check form-check-primary">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultChecked />
                            Primary
                          </label>
                        </div>
                        <div className="form-check form-check-success">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultChecked />
                            Success
                          </label>
                        </div>
                        <div className="form-check form-check-info">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultChecked />
                            Info
                          </label>
                        </div>
                        <div className="form-check form-check-danger">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultChecked />
                            Danger
                          </label>
                        </div>
                        <div className="form-check form-check-warning">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultChecked />
                            Warning
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="form-check form-check-primary">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="ExampleRadio1" id="ExampleRadio1" defaultChecked />
                            Primary
                          </label>
                        </div>
                        <div className="form-check form-check-success">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="ExampleRadio2" id="ExampleRadio2" defaultChecked />
                            Success
                          </label>
                        </div>
                        <div className="form-check form-check-info">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="ExampleRadio3" id="ExampleRadio3" defaultChecked />
                            Info
                          </label>
                        </div>
                        <div className="form-check form-check-danger">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="ExampleRadio4" id="ExampleRadio4" defaultChecked />
                            Danger
                          </label>
                        </div>
                        <div className="form-check form-check-warning">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="ExampleRadio5" id="ExampleRadio5" defaultChecked />
                            Warning
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Inline forms</h4>
                <p className="card-description">
                  Use the <code>.form-inline</code> class to display a series of labels, form controls, and buttons on a single horizontal row
                </p>
                <form className="form-inline">
                  <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                  <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe" />
                  <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
                  <div className="input-group mb-2 mr-sm-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">@</div>
                    </div>
                    <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" />
                  </div>
                  <div className="form-check mx-sm-2">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" defaultChecked />
                      Remember me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Horizontal Two column</h4>
                <form className="form-sample">
                  <p className="card-description">
                    Personal info
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">First Name</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Last Name</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Gender</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Date of Birth</label>
                        <div className="col-sm-9">
                          <input className="form-control" placeholder="dd/mm/yyyy" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Category</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>Category1</option>
                            <option>Category2</option>
                            <option>Category3</option>
                            <option>Category4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Membership</label>
                        <div className="col-sm-4">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios1" defaultValue defaultChecked />
                              Free
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-5">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios2" defaultValue="option2" />
                              Professional
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="card-description">
                    Address
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Address 1</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">State</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Address 2</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Postcode</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">City</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Country</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>America</option>
                            <option>Italy</option>
                            <option>Russia</option>
                            <option>Britain</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Select 2</h4>
                <div className="form-group">
                  <label>Single select box using select 2</label>
                  <select className="js-example-basic-single w-100">
                    <option value="AL">Alabama</option>
                    <option value="WY">Wyoming</option>
                    <option value="AM">America</option>
                    <option value="CA">Canada</option>
                    <option value="RU">Russia</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Multiple select using select 2</label>
                  <select className="js-example-basic-multiple w-100" multiple="multiple">
                    <option value="AL">Alabama</option>
                    <option value="WY">Wyoming</option>
                    <option value="AM">America</option>
                    <option value="CA">Canada</option>
                    <option value="RU">Russia</option>
                  </select>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Typeahead</h4>
                <p className="card-description">
                  A simple suggestion engine
                </p>
                <div className="form-group row">
                  <div className="col">
                    <label>Basic</label>
                    <div id="the-basics">
                      <input className="typeahead" type="text" placeholder="States of USA" />
                    </div>
                  </div>
                  <div className="col">
                    <label>Bloodhound</label>
                    <div id="bloodhound">
                      <input className="typeahead" type="text" placeholder="States of USA" />
                    </div>
                  </div>
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

export default Form_editor