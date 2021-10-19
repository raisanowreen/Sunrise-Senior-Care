import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div class="card text-white">
  <img src="https://www.boostability.com/content/wp-content/uploads/sites/2/2012/10/BOOST_BLOG_IMAGE_RB_SET_10_404_PAGE_1200x628px_v1_3.jpg" class="card-img" alt="..." height="600px"/>
  <div class="card-img-overlay">
    <div className="d-flex justify-content-end mt-5 m-2">
           <Link to="/home"><button type="button" class="btn btn-primary">Go Back To Home</button></Link>
           </div>
  </div>
</div>
        </div>
    );
};

export default NotFound;