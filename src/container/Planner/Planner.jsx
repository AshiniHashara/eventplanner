import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Planner.css';

const Planner = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.planner} alt='planner'/>
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Our Hope"/>
      <h1 className='headtext__cormorant'>What we belive in</h1>

      <div className='app__planner-content'>
        <div className='app__planner-content_quote'>
          <img src={images.quote} alt='quote'/>
          <p className='p__opensans'>It is a long established fact that a reader will be distracted by the readable</p>
        </div>
        <p className='p__opensans'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      </div>

      <div className='app__planner-sign'>
          <p>Kevin Luo</p>
          <img src={images.sign} alt='sign'/>
        </div>

    </div>
  </div>
);

export default Planner;