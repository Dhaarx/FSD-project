import React from 'react';
import '../screens_css/team.css';

import mech from '../images/mech.jpeg';
import modi from '../images/modi.jpg';
import pinter from '../images/pinter.jpeg';
import sticker from '../images/sticker.jpeg';
import tire from '../images/tire.jpg';
import tune from '../images/tune.jpg';
import wash from '../images/wash.jpg';

const Team=()=> {
  return (
    <div className="team-container">
      <h1>Our Team</h1>
      <div className="team-cards">
        <div className="team-card">
          <img src={mech} alt="Mechanic" />
          <h2>Mechanic</h2>
          <p>Experienced in all types of car repairs and maintenance.</p>
        </div>
        <div className="team-card">
          <img src={wash} alt="Car Washer" />
          <h2>Car Washer</h2>
          <p>Dedicated to keeping your car sparkling clean.</p>
        </div>
        <div className="team-card">
          <img src={pinter} alt="Car Painter" />
          <h2>Car Painter</h2>
          <p>Skilled in giving your car a fresh coat of paint.</p>
        </div>
        <div className="team-card">
          <img src={modi} alt="Modifier" />
          <h2>Modifier</h2>
          <p>Transforms cars to fit your unique style and preferences.</p>
        </div>
        <div className="team-card">
          <img src={tune} alt="Engine Tuning Expert" />
          <h2>Engine Tuning Expert</h2>
          <p>Enhances your car's performance with expert engine tuning.</p>
        </div>
        <div className="team-card">
          <img src={sticker} alt="Car Modification Expert" />
          <h2>Car Modification Expert</h2>
          <p>Specializes in customizing cars for optimal performance and style.</p>
        </div>
        <div className="team-card">
          <img src={tire} alt="Tire Work Expert" />
          <h2>Tire Work Expert</h2>
          <p>Ensures your tires are in top condition for a smooth ride.</p>
        </div>
        <div className="team-card">
          <img src={mech} alt="Detail Work Expert" />
          <h2>Detail Expert</h2>
          <p>Specializes in detailing of cars.</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
