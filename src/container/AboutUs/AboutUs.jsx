import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section'>
    {/* <div className='app__aboutus-overlay flex__center'>

    </div> */}
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        
        <p className='p__opensans'>We create unforgettable experiences with beautiful floral designs, bringing elegance and joy to every event. From weddings to special celebrations, our passion is to make every moment extraordinary with the perfect blooms.</p>    
        <button type='button' className='custom__button'>know more</button>
      </div>

      <div className='app__aboutus-content_rose'>
        <img src={images.rose} alt='about_rose'/>
      </div>

      <div className='app__history-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        
        <p className='p__opensans'>Founded with a passion for floral artistry, we’ve grown from a small local business into a trusted name in event decoration. Over the years, we have brought countless visions to life, always striving to make each event unique and memorable with our creative designs.</p>    
        <button type='button' className='custom__button'>know more</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
