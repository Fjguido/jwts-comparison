import hubbleCorina from "./img/hubble-carina.jpeg";
import jwtsCorina from "./img/jwts-carina.jpg";

import hubbleQuintet from "./img/hubble-quintet.png";
import jwtsQuintet from "./img/jwts-quintet.jpg";

import hubbleSmacs from "./img/hubble-smacs.webp";
import jwtsSmacs from "./img/jwts-smacs.jpg";

import hubbleSouthernRing from "./img/hubble-southern-ring.jpeg";
import jwtsSouthernRing from "./img/jwts-southern-ring.png";

import hubbleCartwheel from "./img/hubble-cartwheel.jpeg";
import jwtsCartwheel from "./img/jwst-cartwheel.png";

import hubbleJupiter from "./img/hubble-jupiter.jpeg";
import jwtsJupiter from "./img/jwts-jupiter.jpeg";

import hubbleM74 from "./img/hubble-M74.jpeg";
import jwtsM74 from "./img/jwts-M74.jpeg";

import hubbleTarantula from "./img/hubble-tarantula.jpeg";
import jwtsTarantula from "./img/jwts-tarantula.jpeg";

import hubblePillars from "./img/hubble-pillars.jpeg";
import jwtsPillars from "./img/jwts-pillars.jpeg";

import hubbleIC1623 from "./img/hubble-IC1623.jpeg";
import jwstIC1623 from "./img/jwst-IC1623.jpeg";

import Slider from "./components/slider/slider";

const slider1 = {
  delay: 1000,
  original: {
    url: hubbleCorina,
    title: "Hubble",
  },
  modified: {
    url: jwtsCorina,
    title: "JWTS",
  },
};

const slider2 = {
  original: {
    url: hubbleQuintet,
    title: "Hubble",
  },
  modified: {
    url: jwtsQuintet,
    title: "JWTS",
  },
};

const slider3 = {
  original: {
    url: hubbleSmacs,
    title: "Hubble",
  },
  modified: {
    url: jwtsSmacs,
    title: "JWTS",
  },
};

const slider4 = {
  original: {
    url: hubbleSouthernRing,
    title: "Hubble",
  },
  modified: {
    url: jwtsSouthernRing,
    title: "JWTS",
  },
};

const slider5 = {
  original: {
    url: hubbleCartwheel,
    title: "Hubble",
  },
  modified: {
    url: jwtsCartwheel,
    title: "JWTS",
  },
};

const slider6 = {
  original: {
    url: hubbleJupiter,
    title: "Hubble",
  },
  modified: {
    url: jwtsJupiter,
    title: "JWTS",
  },
};

const slider7 = {
  original: {
    url: hubbleM74,
    title: "Hubble",
  },
  modified: {
    url: jwtsM74,
    title: "JWTS",
  },
};

const slider8 = {
  original: {
    url: hubbleTarantula,
    title: "Hubble",
  },
  modified: {
    url: jwtsTarantula,
    title: "JWTS",
  },
};

const slider9 = {
  original: {
    url: hubblePillars,
    title: "Hubble",
  },
  modified: {
    url: jwtsPillars,
    title: "JWTS",
  },
};

const slider10 = {
  original: {
    url: hubbleIC1623,
    title: "Hubble",
  },
  modified: {
    url: jwstIC1623,
    title: "JWTS",
  },
};

const App = () => {
  return (
    <div>
      <h2 className="pictureName">“Cosmic Cliffs” of the Carina Nebula</h2>

      <Slider {...slider1} />

      <h6 className="pictureDesc">
        This landscape of “mountains” and “valleys” speckled with glittering
        stars is actually the edge of a nearby, young, star-forming region
        called NGC 3324 in the Carina Nebula. Captured in infrared light by
        NASA’s new James Webb Space Telescope, this image reveals for the first
        time previously invisible areas of star birth. Called the Cosmic Cliffs,
        the region is actually the edge of a gigantic, gaseous cavity within NGC
        3324, roughly 7,600 light-years away. The cavernous area has been carved
        from the nebula by the intense ultraviolet radiation and stellar winds
        from extremely massive, hot, young stars located in the centre of the
        bubble, above the area shown in this image. The high-energy radiation
        from these stars is sculpting the nebula’s wall by slowly eroding it
        away.
      </h6>
      <br />

      <h2 className="pictureName">Stephen's Quintet</h2>
      <Slider {...slider2} />
      <h6 className="pictureDesc">
        Together, the five galaxies of Stephan’s Quintet are also known as the
        Hickson Compact Group 92 (HCG 92). Although called a “quintet,” only
        four of the galaxies are truly close together and caught up in a cosmic
        dance. The fifth and leftmost galaxy, called NGC 7320, is well in the
        foreground compared with the other four. NGC 7320 resides 40 million
        light-years from Earth, while the other four galaxies (NGC 7317, NGC
        7318A, NGC 7318B, and NGC 7319) are about 290 million light-years away.
        This is still fairly close in cosmic terms, compared with more distant
        galaxies billions of light-years away. Studying these relatively nearby
        galaxies helps scientists better understand structures seen in a much
        more distant universe.
      </h6>
      <br />

      <h2 className="pictureName">SMACS 0723 </h2>
      <Slider {...slider3} />
      <h6 className="pictureDesc">
        The image shows the galaxy cluster SMACS 0723 as it appeared 4.6 billion
        years ago. The combined mass of this galaxy cluster acts as a
        gravitational lens, magnifying much more distant galaxies behind it.
        Webb’s NIRCam has brought those distant galaxies into sharp focus – they
        have tiny, faint structures that have never been seen before, including
        star clusters and diffuse features. Researchers will soon begin to learn
        more about the galaxies’ masses, ages, histories, and compositions, as
        Webb seeks the earliest galaxies in the universe.
      </h6>
      <br />

      <h2 className="pictureName">Southern Ring Nebula</h2>
      <Slider {...slider4} />
      <h6 className="pictureDesc">
        The bright star at the centre of NGC 3132, while prominent when viewed
        by the NASA/ESA/CSA James Webb Telescope in near-infrared light, plays a
        supporting role in sculpting the surrounding nebula. A second star,
        barely visible at lower left along one of the bright star’s diffraction
        spikes, is the nebula’s source. It has ejected at least eight layers of
        gas and dust over thousands of years. But not all of the starlight can
        escape. The density of the central region, set off in teal, is reflected
        by how transparent or opaque it is. Areas that are a deeper teal
        indicate that the gas and dust are denser — and light is unable to break
        free.
      </h6>
      <br />

      <h2 className="pictureName">Cartwheel Galaxy</h2>
      <Slider {...slider5} />
      <h6 className="pictureDesc">
        This galaxy formed as the result of a high-speed collision that occurred
        about 400 million years ago. The Cartwheel is composed of two rings, a
        bright inner ring and a colourful outer ring. Both rings expand outward
        from the centre of the collision like shockwaves. However, despite the
        impact, much of the character of the large, spiral galaxy that existed
        before the collision remains, including its rotating arms. This leads to
        the “spokes” that inspired the name of the Cartwheel Galaxy, which are
        the bright red streaks seen between the inner and outer rings. These
        brilliant red hues, located not only throughout the Cartwheel, but also
        the companion spiral galaxy at the top left, are caused by glowing,
        hydrocarbon-rich dust.{" "}
      </h6>

      <h2 className="pictureName">Jupiter - NIRCam Closeup</h2>
      <Slider {...slider6} />
      <h6 className="pictureDesc">
        This image comes from the observatory’s Near-Infrared Camera (NIRCam),
        which has three specialized infrared filters that showcase details of
        the planet. Since infrared light is invisible to the human eye, the
        light has been mapped onto the visible spectrum. Generally, the longest
        wavelengths appear redder and the shortest wavelengths are shown as more
        blue. Scientists collaborated with citizen scientist Judy Schmidt to
        translate the Webb data into images. Visible auroras extend to high
        altitudes above both the northern and southern poles of Jupiter. The
        auroras shine in a filter that is mapped to redder colors, which also
        highlights light reflected from lower clouds and upper hazes. A
        different filter, mapped to yellows and greens, shows hazes swirling
        around the northern and southern poles. A third filter, mapped to blues,
        showcases light that is reflected from a deeper main cloud. The Great
        Red Spot, a famous storm so big it could swallow Earth, appears white in
        these views, as do other clouds, because they are reflecting a lot of
        sunlight.
      </h6>
      <br />

      <h2 className="pictureName">Heart of the Phantom Galaxy - M74</h2>
      <Slider {...slider7} />
      <h6 className="pictureDesc">
        This image from the NASA/ESA/CSA James Webb Space Telescope shows the
        heart of M74, otherwise known as the Phantom Galaxy. Webb’s sharp vision
        has revealed delicate filaments of gas and dust in the grandiose spiral
        arms which wind outwards from the centre of this image. A lack of gas in
        the nuclear region also provides an unobscured view of the nuclear star
        cluster at the galaxy's centre. M74 is a particular class of spiral
        galaxy known as a ‘grand design spiral’, meaning that its spiral arms
        are prominent and well-defined, unlike the patchy and ragged structure
        seen in some spiral galaxies. The Phantom Galaxy is around 32 million
        light-years away from Earth in the constellation Pisces, and lies almost
        face-on to Earth. This, coupled with its well-defined spiral arms, makes
        it a favourite target for astronomers studying the origin and structure
        of galactic spirals. Webb gazed into M74 with its Mid-InfraRed
        Instrument (MIRI) in order to learn more about the earliest phases of
        star formation in the local Universe. These observations are part of a
        larger effort to chart 19 nearby star-forming galaxies in the infrared
        by the international PHANGS collaboration. Those galaxies have already
        been observed using the NASA/ESA Hubble Space Telescope and ground-based
        observatories. The addition of crystal-clear Webb observations at longer
        wavelengths will allow astronomers to pinpoint star-forming regions in
        the galaxies, accurately measure the masses and ages of star clusters,
        and gain insights into the nature of the small grains of dust drifting
        in interstellar space.
      </h6>

      <h2 className="pictureName">Tarantula Nebula</h2>
      <Slider {...slider8} />
      <h6 className="pictureDesc">
        In this mosaic image stretching 340 light-years across, Webb’s
        Near-Infrared Camera (NIRCam) displays the Tarantula Nebula star-forming
        region in a new light, including tens of thousands of never-before-seen
        young stars that were previously shrouded in cosmic dust. The most
        active region appears to sparkle with massive young stars, appearing
        pale blue. Scattered among them are still-embedded stars, appearing red,
        yet to emerge from the dusty cocoon of the nebula. NIRCam is able to
        detect these dust-enshrouded stars thanks to its unprecedented
        resolution at near-infrared wavelengths. To the upper left of the
        cluster of young stars, and the top of the nebula’s cavity, an older
        star prominently displays NIRCam’s distinctive eight diffraction spikes,
        an artefact of the telescope’s structure. Following the top central
        spike of this star upward, it almost points to a distinctive bubble in
        the cloud. Young stars still surrounded by dusty material are blowing
        this bubble, beginning to carve out their own cavity. Astronomers used
        two of Webb’s spectrographs to take a closer look at this region and
        determine the chemical makeup of the star and its surrounding gas. This
        spectral information will tell astronomers about the age of the nebula
        and how many generations of star birth it has seen.
      </h6>
      <br />

      <h2 className="pictureName">Pillars of Creation</h2>
      <Slider {...slider9} />
      <h6 className="pictureDesc">
        The Pillars of Creation are set off in a kaleidoscope of colour in the
        NASA/ESA/CSA James Webb Space Telescope’s near-infrared-light view. The
        pillars look like arches and spires rising out of a desert landscape,
        but are filled with semi-transparent gas and dust, and ever changing.
        This is a region where young stars are forming – or have barely burst
        from their dusty cocoons as they continue to form. Protostars are the
        scene-stealers in this Near-Infrared Camera (NIRCam) image. These are
        the bright red orbs that sometimes appear with eight diffraction spikes.
        When knots with sufficient mass form within the pillars, they begin to
        collapse under their own gravity, slowly heat up, and eventually begin
        shining brightly. Along the edges of the pillars are wavy lines that
        look like lava. These are ejections from stars that are still forming.
        Young stars periodically shoot out jets that can interact within clouds
        of material, like these thick pillars of gas and dust. This sometimes
        also results in bow shocks, which can form wavy patterns like a boat
        does as it moves through water. These young stars are estimated to be
        only a few hundred thousand years old, and will continue to form for
        millions of years.This translucent layer of gas blocks our view of the
        deeper universe. Plus, dust is lit up by the collective light from the
        packed “party” of stars that have burst free from the pillars. It’s like
        standing in a well-lit room looking out a window – the interior light
        reflects on the pane, obscuring the scene outside and, in turn,
        illuminating the activity at the party inside.
      </h6>
      <br />

      <h2 className="pictureName">IC1623</h2>
      <Slider {...slider10} />
      <h6 className="pictureDesc">This image from the NASA/ESA Hubble Space Telescope depicts IC 1623, an entwined pair of 
      interacting galaxies which lies around 270 million light-years from Earth in the constellation Cetus. The two galaxies 
      in IC 1623 are plunging headlong into one another in a process known as a galaxy merger. Their collision has ignited a 
      frenzied spate of star formation known as a starburst, creating new stars at a rate more than twenty times that of the 
      Milky Way galaxy.</h6>
      <br />
    </div>
  );
};

export default App;
