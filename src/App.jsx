import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import MarqueeSection from './components/MarqueeSection';
import VideoSection from './components/VideoSection';
import CardsGrid from './components/CardsGrid';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';


function App() {
  return (
    <>
      <NavBar />
        <div>
           <VideoSection />
        </div>
      <div className="">
           <CardsGrid />
      </div>
      <About/>
      <MarqueeSection />
      <Footer />
    </>
  );
}

export default App;
