import hubbleCorina from './img/hubble-carina.jpeg';
import jwtsCorina from './img/jwts-carina.jpg';

import hubbleQuintet from './img/hubble-quintet.png';
import jwtsQuintet from './img/jwts-quintet.jpg';

import hubbleSmacs from './img/hubble-smacs.webp';
import jwtsSmacs from './img/jwts-smacs.jpg';

import hubbleSouthernRing from './img/hubble-southern-ring.jpeg';
import jwtsSouthernRing from './img/jwts-southern-ring.png';

import Slider from './components';



const slider1 = {
  delay: 2000,
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


const App = () => {
  
  return (
      <div className="picture">
          <h2>Carina Nebula</h2>
          <Slider {...slider1}/>

          <br/>

          <h2>Stephen's Quintet</h2>
          <Slider {...slider2}/>

          <br/>

          <h2>SMACS 0723 </h2>
          <Slider {...slider3}/>

          <br/>

          <h2>Southern Ring</h2>
          <Slider {...slider4}/>
      </div>
  )
}

export default App;