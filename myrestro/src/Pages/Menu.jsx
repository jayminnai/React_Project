import React,{useEffect,useState} from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'

function Menu() {

  useEffect(()=>{
    fetch();
  },[]);

  const [productdata,setProductdata]=useState([]);

  const fetch=async()=>{
      const response=await axios.get('http://localhost:3000/product');
      setProductdata(response.data); 
  }
  return (
    <main id="main">
      <br />
    {/* ======= Menu Section ======= */}
    <section id="menu" className="menu">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Menu</h2>
          <p>Check Our <span>Yummy Menu</span></p>
        </div>
        <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay={200}>
          <li className="nav-item">
            <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
              <h4>Starters</h4>
            </a>
          </li>{/* End tab nav item */}
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
              <h4>Breakfast</h4>
            </a>{/* End tab nav item */}
          </li><li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
              <h4>Lunch</h4>
            </a>
          </li>{/* End tab nav item */}
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
              <h4>Dinner</h4>
            </a>
          </li>{/* End tab nav item */}
        </ul>
        <div className="tab-content" data-aos="fade-up" data-aos-delay={300}>
          <div className="tab-pane fade active show" id="menu-starters">
            <div className="tab-header text-center">
              <p>Menu</p>
              <h3>Starters</h3>
            </div>
            <div className="row gy-5">
              {
                productdata.map((item)=>{
                  return (
                    <div className="col-lg-4 menu-item">
                      <div className='img-back'>
                        <img
                          src={item.image}
                          className="menu-img img-fluid"
                          alt
                        />
                        </div>
                      <h4>{item.name}</h4>
                      <p className="ingredients">
                        {item.detail}
                      </p>
                      <p className="price">${item.price}</p>
                    </div>
                  );
                })
              }
            </div>
          </div>{/* End Starter Menu Content */}
          <div className="tab-pane fade" id="menu-breakfast">
            <div className="tab-header text-center">
              <p>Menu</p>
              <h3>Breakfast</h3>
            </div>
            <div className="row gy-5">
              {
                productdata.map((item)=>{
                  return (
                    <div className="col-lg-4 menu-item">
                      <div className='img-back'>
                        <img
                          src={item.image}
                          className="menu-img img-fluid"
                          alt
                        />
                        </div>
                      <h4>{item.name}</h4>
                      <p className="ingredients">
                        {item.detail}
                      </p>
                      <p className="price">${item.price}</p>
                    </div>
                  );
                })
              }
            </div>
          </div>{/* End Breakfast Menu Content */}
          <div className="tab-pane fade" id="menu-lunch">
            <div className="tab-header text-center">
              <p>Menu</p>
              <h3>Lunch</h3>
            </div>
            <div className="row gy-5">
              {
                productdata.map((item)=>{
                  return (
                    <div className="col-lg-4 menu-item">
                      <div className='img-back'>
                        <img
                          src={item.image}
                          className="menu-img img-fluid"
                          alt
                        />
                        </div>
                      <h4>{item.name}</h4>
                      <p className="ingredients">
                        {item.detail}
                      </p>
                      <p className="price">${item.price}</p>
                    </div>
                  );
                })
              }
            </div>
          </div>{/* End Lunch Menu Content */}
          <div className="tab-pane fade" id="menu-dinner">
            <div className="tab-header text-center">
              <p>Menu</p>
              <h3>Dinner</h3>
            </div>
            <div className="row gy-5">
              {
                productdata.map((item)=>{
                  return (
                    <div className="col-lg-4 menu-item">
                      <div className='img-back'>
                        <img
                          src={item.image}
                          className="menu-img img-fluid"
                          alt
                        />
                        </div>
                      <h4>{item.name}</h4>
                      <p className="ingredients">
                        {item.detail}
                      </p>
                      <p className="price">${item.price}</p>
                    </div>
                  );
                })
              }
            </div>
          </div>{/* End Dinner Menu Content */}
        </div>
      </div>
    </section>{/* End Menu Section */}

    {/* ======= Testimonials Section ======= */}
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Testimonials</h2>
          <p>What Are They <span>Saying About Us</span></p>
        </div>
        <div className="slides-1 swiper" data-aos="fade-up" data-aos-delay={100}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="row gy-4 justify-content-center">
                  <div className="col-lg-6">
                    <div className="testimonial-content">
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 text-center">
                    <img src="assets/img/testimonials/testimonials-1.jpg" className="img-fluid testimonial-img" alt />
                  </div>
                </div>
              </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="row gy-4 justify-content-center">
                  <div className="col-lg-6">
                    <div className="testimonial-content">
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 text-center">
                    <img src="assets/img/testimonials/testimonials-2.jpg" className="img-fluid testimonial-img" alt />
                  </div>
                </div>
              </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="row gy-4 justify-content-center">
                  <div className="col-lg-6">
                    <div className="testimonial-content">
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 text-center">
                    <img src="assets/img/testimonials/testimonials-3.jpg" className="img-fluid testimonial-img" alt />
                  </div>
                </div>
              </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="row gy-4 justify-content-center">
                  <div className="col-lg-6">
                    <div className="testimonial-content">
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 text-center">
                    <img src="assets/img/testimonials/testimonials-4.jpg" className="img-fluid testimonial-img" alt />
                  </div>
                </div>
              </div>
            </div>{/* End testimonial item */}
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>{/* End Testimonials Section */}
  </main>
  )
}

export default Menu