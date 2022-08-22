import hubbleCorina from './img/hubble-carina.jpeg';
import jwtsCorina from './img/jwts-carina.jpg';

import hubbleQuintet from './img/hubble-quintet.png';
import jwtsQuintet from './img/jwts-quintet.jpg';

import hubbleSmacs from './img/hubble-smacs.webp';
import jwtsSmacs from './img/jwts-smacs.jpg';

import hubbleSouthernRing from './img/hubble-southern-ring.jpeg';
import jwtsSouthernRing from './img/jwts-southern-ring.png';

import hubbleCartwheel from './img/hubble-cartwheel.jpeg';
import jwtsCartwheel from './img/jwst-cartwheel.png';

import hubbleJupiter from './img/hubble-jupiter.jpeg';
import jwtsJupiter from './img/jwts-jupiter.jpeg';

import Slider from './components/slider/slider';




const slider1 = {
  delay: 1000,
  original: {
      url: hubbleCorina,
      title: 'Hubble'
  },
  modified: {
      url: jwtsCorina,
      title: 'JWTS'
  }
};

const slider2 = {
  original: {
      url: hubbleQuintet,
      title: 'Hubble'
  },
  modified: {
      url: jwtsQuintet,
      title: 'JWTS'
  }
};

const slider3 = {
  original: {
      url: hubbleSmacs,
      title: 'Hubble'
  },
  modified: {
      url: jwtsSmacs,
      title: 'JWTS'
  }
};

const slider4 = {
  original: {
      url: hubbleSouthernRing,
      title: 'Hubble'
  },
  modified: {
      url: jwtsSouthernRing,
      title: 'JWTS'
  }
};

const slider5 = {
  original: {
    url: hubbleCartwheel,
    title: 'Hubble'
},
modified: {
    url: jwtsCartwheel,
    title: 'JWTS'
}
}

const slider6 = {
  original: {
    url: hubbleJupiter,
    title: 'Hubble'
},
modified: {
    url: jwtsJupiter,
    title: 'JWTS'
}
}

const App = () => {
  
  return (
      <div>
        
          <h2 className="pictureName" >“Cosmic Cliffs” of the Carina Nebula</h2>
          <Slider {...slider1}/>
          <br/>

          <h2 className="pictureName">Stephen's Quintet</h2>
          <Slider {...slider2}/>
          <br/>

          <h2 className="pictureName">SMACS 0723 </h2>
          <Slider {...slider3}/>
          <br/>

          <h2 className="pictureName">Southern Ring Nebula</h2>
          <Slider {...slider4}/>
          <br/>

          <h2 className="pictureName">Cartwheel Galaxy</h2>
          <Slider {...slider5}/>

          <h2 className="pictureName">Jupiter - NIRCam Closeup</h2>
          <Slider {...slider6}/>
          <br/>
      </div>
  )
}

export default App;