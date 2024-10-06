import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './App.css';
import Landing from './pages/landing';
import Alien1 from './pages/alien1';
import Alien2 from './pages/Alien2';
import Alien3 from './pages/Alien3';
import Alien4 from './pages/Alien4';
import Alien5 from './pages/Alien5';

function App() {
  return (
    <ParallaxProvider>
      <div>
        {/* Add different speed values for variation in effect */}
        <Parallax className="section" speed={0}>
          <Landing />
        </Parallax>
        <Parallax className="section" speed={0}>
          <Alien1 />
        </Parallax>
        <Parallax className="section" speed={0}>
          <Alien2 />
        </Parallax>
        <Parallax className="section" speed={0}>
          <Alien3 />
        </Parallax>
        <Parallax className="section" speed={0}>
          <Alien4 />
        </Parallax>
        <Parallax className="section" speed={0}>
          <Alien5 />
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}

export default App;
