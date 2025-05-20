import React from 'react';
import '../VideoSection.css';  

function VideoSection () {
  return (
    <>
      <div className="video-container">
      <video className="video-player" controls autoPlay loop muted>
        <source src="./Revision_3.mp4" type="video/mp4" />
        
      </video>
        <div className='btn-hero'>
          <button className='btn-explore'>Explore More</button>
        <button className='btn-ticket'>Book Ticket</button>
        </div>
    </div>
  
    </>
  );
};

export default VideoSection;
