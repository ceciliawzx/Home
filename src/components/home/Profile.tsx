import React from 'react';
import '../../css/home/profile.css';

const Profile = () => {
  return (
    <div id='profile-container' data-aos='fade-down'>
      <div
        style={{
          textAlign: 'center',
          color: 'white',
          fontFamily: 'Georgia, serif',
        }}
      >
        <h2>Hello I'm</h2>
        <h1
          style={{
            fontWeight: 'bolder',
            textShadow: '3px 3px 8px black',
            fontSize: '300%',
          }}
        >
          Zixi Wang
        </h1>
        <p style={{ fontSize: '120%' }}>
          I'm a penultimate year Computing student at Imperial College London.
          <br />
          "Your best and wisest refuge from all troubles is in your science."
        </p>
        <a href='./files/CV.pdf' target='_blank' id='download_cv_btn'>
          Download Resume &gt;
        </a>
      </div>
    </div>
  );
};

export default Profile;
