import React from 'react';
import '../VideoSection.css';  

function VideoSection () {
  return (
    <div className="video-container">
      <video className="video-player" controls autoPlay loop muted>
        <source src="./Revision_3.mp4" type="video/mp4" />
        المتصفح لا يدعم تشغيل الفيديو.
      </video>
    </div>
  );
};

export default VideoSection;
