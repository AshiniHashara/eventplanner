import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { deco } from '../../constants';

import './Intro.css';

const Intro = () => {
const [playVideo, setplayVideo] = React.useState(false);
  const vidRef =React.useRef();

  const handleVideo = () => {
    setplayVideo((prevPlayVideo) => !prevPlayVideo)

    if(playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }

  }
  return (
    <div className='app__video'>
    <video
    src={ deco }
    ref={vidRef}
    type="video/mp4"
    loop
    controls={false}
    muted
    />
    <div className='app__video-overlay flex-center'>
      <div className='app__video-overlay_circle flex-center'
      onClick={handleVideo}
      >
        {playVideo 
        ?  <BsPauseFill color="#fff" fontSize={30}/>
        : <BsFillPlayFill color="#fff" fontSize={30}/>}

      </div>
    </div>
  </div>
  );
};

export default Intro;