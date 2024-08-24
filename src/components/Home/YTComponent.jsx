import React from 'react';
import YouTube from 'react-youtube';

const YTComponent = ({videoId}) => {
  const videoOptions = {
    height: '350',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <YouTube videoId={videoId} opts={videoOptions} />
  );
};

export default YTComponent;
