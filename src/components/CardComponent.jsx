import React from 'react';
import '../CardComponent.css';

function CardComponent({ image1, image2, image3 }) {
	
  const isStcImage = image3 === './image/stc_1.png';
	const isMurabaImage = image3 === './image/new_muraba.webp';
	const isTawiniaImage = image3 === './image/tawinia.webp';
  const isEmptyImage = !image3 || image3.trim() === '';

 
  const imageStyle = isStcImage ? {  width: '10%' } : isMurabaImage ? {  width: '15%' } : isTawiniaImage ? {width: '20%' } : {};
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
