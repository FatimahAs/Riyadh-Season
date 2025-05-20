import React from 'react';
import '../CardComponent.css';

function CardComponent({ image1, image2, image3 }) {

	const isTagImage = image1 === './image/KV-Webook-Sizes_1280x1280.webp';
  const isStcImage = image3 === './image/stc_1.png';
	const isMurabaImage = image3 === './image/new_muraba.webp';
	const isTawiniaImage = image3 === './image/tawinia.webp';
  const isEmptyImage = !image3 || image3.trim() === '';


 
const imageStyle = isStcImage
  ? { width: '10%' }
  : isMurabaImage
  ? { width: '15%' }
  : isTawiniaImage
  ? { width: '20%' }
  : isTagImage
  ? {
      position: 'absolute',
      top: '15px',
      left: '15px',
      background: '#ff3366',
      color: '#fff',
      fontSize: '14px',
      fontWeight: 'bold',
      padding: '6px 12px',
      borderRadius: '20px',
      textTransform: 'uppercase',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
    }
  : {};
  return (
    <div className="card">
      <img src={image1} alt="Rocket Character" className="card-image" />
      <div className="card-footer">
			  <img src={image2} className="card-logo2" />
			    {!isEmptyImage && (
			  <img src={image3} className="card-logo3"  style={imageStyle}/>  )}
			   
        
      </div>
    </div>
  );
}

export default CardComponent;
