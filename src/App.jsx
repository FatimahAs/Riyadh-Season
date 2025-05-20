import React from 'react';

import MarqueeSection from './components/MarqueeSection';
import VideoSection from './components/VideoSection';
import CardsGrid from './components/CardsGrid';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <NavBar />
        <div>
           <VideoSection />
        </div>
      <div className="App">
           <CardsGrid />
      </div>
      <MarqueeSection />
      <Footer />
    </>
  );
}

export default App;
