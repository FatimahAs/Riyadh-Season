import React from 'react'
import '../About.css'

const About = () => {
  return (
	    <>
		   <div className="riyadh-container">
				<div className="riyadh-text">
						<h2>About Riyadh Season</h2>
						<p>
						Riyadh Season is one of the world’s largest winter entertainment event.
						Variety of food from around the world, courtesy of exclusive restaurants —
						plus countless exciting surprises. The festivities capture the essence of Saudi,
						from its Najdi heritage to its present-day dynamism. <br /><br />
						<span>Starts 12 October</span>
						</p>
						<button className="explore-btn">Explore More</button>
				</div>
				<div className="riyadh-video">
						<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/g8-NjAOWhME?si=ZHVeUbPF2zVQYe-j"
						title="Riyadh Season"
						frameBorder="0"
						allowFullScreen
						></iframe>
				</div>
            </div>
  
    </>
  )
}

export default About




