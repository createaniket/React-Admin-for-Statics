import React from 'react';
import './Homeimagegallery.scss';

const Homeimagegallery = () => {
  return (
    <div className='homeimggllrypage'>
      <p className="homeimglryhead">Image Gallery</p>
      <div className="homeimagegallery">
        <div className="home-img-galry-item">
          <img src="http://sportsgoodsindia.org/UploadFiles/PhotoGallery/LargeImage/879149A2_B.jpg" alt="" />
        </div>

        <div className="home-img-galry-item">
          <img src="http://sportsgoodsindia.org/UploadFiles/PhotoGallery/LargeImage/749703A1_B.jpg" alt="" />
        </div>

        <div className="home-img-galry-item">
          <img src="http://sportsgoodsindia.org/UploadFiles/PhotoGallery/LargeImage/972947Bonny-Intl_B.jpg" alt="" />
        </div>
        <div className="home-img-galry-item">
          <img src="http://sportsgoodsindia.org/UploadFiles/PhotoGallery/LargeImage/337940IMG20230305113449_B.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homeimagegallery;
