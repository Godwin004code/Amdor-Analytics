import React from 'react';
import YouTube from 'react-youtube';

const YTComponent = ({videoId}) => {
  const videoOptions = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      mute:1    },
  };

  return (
    <YouTube videoId={videoId} opts={videoOptions} className='border-4'/>
  );
};

export default YTComponent;
