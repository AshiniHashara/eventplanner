import React from 'react';

import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Celebrate with Blooms that Speak"/>
      <h1 className='app__header-h1'>Creating Moments, One Blossom at a Time</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}>Each flower arrangement is thoughtfully designed to turn events into cherished memories, adding beauty and emotion to every celebration. From intimate gatherings to grand occasions, our blooms set the perfect mood, making every moment unforgettable.</p>
      <button type='button' className='custom__button'>Explore Us</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.sunflower} alt='header img'/>
    </div>
  </div>
);

export default Header;
