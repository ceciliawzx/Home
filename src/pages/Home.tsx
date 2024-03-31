import React, { useState } from 'react';
import '../css/Home.css';

const Home = () => {
  const [moonPath, setMoonPath] = useState('url(/bg/home/home-bg-moon1.png)');
  const [catRiverPath, setCatRiverPath] = useState(
    'url(/bg/home/home-bg-catriver1.png)'
  );
  const [skyPath, setSkyPath] = useState('url(/bg/home/home-bg-sky1.png)');

  const [showDialogue, setShowDialogue] = useState(true);
  const [showIntro, setShowIntro] = useState(false);

  const setBg = () => {
    setMoonPath('url(/bg/home/home-bg-moon2.png)');
    setCatRiverPath('url(/bg/home/home-bg-catriver2.png)');
    setSkyPath('url(/bg/home/home-bg-sky2.png)');
    setShowIntro(true);
    setShowDialogue(false);
  };

  return (
    <>
      <div
        style={{
          height: '100vh',
          width: '100vw',
          backgroundImage: skyPath,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center', // Center the background image
          overflow: 'hidden', // Prevent image overflow during transitions
          transition: 'background-image 0.8s ease',
        }}
      >
        <BgMoonImg moonPath={moonPath} />
        <BgCatRiverImg catRiverPath={catRiverPath} />
        <div
          className='dialogue'
          style={{
            opacity: showDialogue ? 1 : 0,
            cursor: showDialogue ? 'pointer' : 'default',
          }}
          onClick={() => setBg()}
        >
          Hi
        </div>
        <div
          className='home-intro'
          style={{
            color: 'white',
            opacity: showIntro ? 1 : 0,
            transition: 'opacity 0.8s ease',
          }}
        >
          <h1>Hi, I am Zixi Wang</h1>
          <p>
            I'm a penultimate year Computing student at Imperial College London.
          </p>
        </div>
      </div>
    </>
  );
};

const BgCatRiverImg = ({ catRiverPath }: { catRiverPath: string }) => {
  return (
    <div
      className='bg-img'
      style={{
        backgroundImage: catRiverPath,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', // Center the background image
        position: 'absolute',
        height: '30%',
        width: '95%',
        maxHeight: '100vh',
        maxWidth: '100vw',
        right: 0,
        bottom: 0,
        transition: 'background-image 0.8s ease', // Smooth transition
      }}
    />
  );
};

const BgMoonImg = ({ moonPath }: { moonPath: string }) => {
  return (
    <div
      className='bg-img'
      style={{
        backgroundImage: moonPath,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', // Center the background image
        position: 'absolute',
        height: '90%',
        width: '30%',
        maxHeight: '100vh',
        maxWidth: '100vw',
        right: 0,
        top: '5%',
        transition: 'background-image 0.8s ease', // Smooth transition
      }}
    />
  );
};

export default Home;
