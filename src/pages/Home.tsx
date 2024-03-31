import React, { useState } from 'react';
import '../css/home/Home.css';
import ShootingStars from '../components/home/ShootingStarts';
import Profile from '../components/home/Profile';

const Home = () => {
  const [moonPath, setMoonPath] = useState('url(/bg/home/home-bg-moon1.png)');
  const [catPath, setCatPath] = useState('url(/bg/home/home-bg-cat1.png)');
  const [skyPath, setSkyPath] = useState('url(/bg/home/home-bg-sky1.png)');

  const [showDialogue, setShowDialogue] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const [showStars, setShowStars] = useState(false);

  const setBg = () => {
    setMoonPath('url(/bg/home/home-bg-moon2.png)');
    setCatPath('url(/bg/home/home-bg-cat2.png)');
    setSkyPath('url(/bg/home/home-bg3.png)');
    setShowIntro(true);
    setShowDialogue(false);
    setShowStars(true);
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
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {showStars && <ShootingStars />}
        <BgCatImg catPath={catPath} />
        {showIntro && <Profile />}
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
      </div>
    </>
  );
};

const BgCatImg = ({ catPath }: { catPath: string }) => {
  return (
    <div
      className='bg-img'
      style={{
        backgroundImage: catPath,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', // Center the background image
        position: 'absolute',
        height: '30%',
        width: '15%',
        maxHeight: '100vh',
        maxWidth: '100vw',
        left: '5%',
        bottom: 0,
        transition: 'background-image 0.8s ease', // Smooth transition
      }}
    />
  );
};

export default Home;
