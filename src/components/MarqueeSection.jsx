import React from 'react';
import '../MarqueeSection.css';


const logos = [
  './image/aramco_1.png',
  '/image/stc_1.png',
  '/image/suliman_1.png',
  '/image/hunger_station_1.png',
  '/image/tawinia_1.png',
	'/image/new_muraba_1.png',
	'/image/snb_1.png',
	'/image/sirc_1.png',
	'/image/dunkin_en_1.png',
	'/image/dzrt_ar_1.png',
	'/image/tree_en_1.png',
	'/image/pepsi_1.png',
	'/image/panda_1.png',
	'/image/checkapp_1.png',
	'/image/muc_1.png',
	'/image/maestro_1.png',
	'/image/lays_1.png',
	'/image/parker_1.png',
	'/image/kudo_2.png',
	'/image/jaco_1.png',
	'./image/fly_sudia_1.png',
	'./image/byd_en.png',
   
];

function MarqueeSection() {


  return (
    <div className="marquee-container">
      <div className="marquee right">
        {logos.map((logo, id) => (
          <img key={id} src={logo} alt={`logo-${id}`} className="logo" />
        ))}
      </div>
    
      
    </div>
  );
}

export default MarqueeSection;
