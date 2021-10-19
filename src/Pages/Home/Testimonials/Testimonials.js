import React from 'react';


// Clents'testimonials starts with carousal
const Testimonials = () => {
    return (
        <div className="w-50 mx-auto m-5">
            <h3 className="text-primary text-center mt-5 mb-5" id="services">Buzz About Us</h3>  
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner fw-bold">
    <div className="carousel-item active">
      <img src="https://i.ibb.co/Z8WjN2w/alpay-tonga-Entov-En-MZl4-unsplash.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-white bg-success">
        <h1>Hi! I am Linda</h1>
        <p>Sunrise just chnaged my life.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/CnWJyDW/ravi-patel-VMGAbee-JTKo-unsplash.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-white bg-success">
        <h1>Hi! I am Rosie</h1>
        <p>I highly recommend sunrise senior care.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/DQhpJgF/anthony-metcalfe-QQs-RTGAZp9o-unsplash.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-white bg-success">
        <h1>Hi I am Stephenie</h1>
        <p>Sunrise is my second home.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Testimonials;