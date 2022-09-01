import React from 'react';
import Button from 'react-bootstrap/Button';

import './about.scss';

export default function About(props) {
  const { onBackClick } = props;
  return (
    <div className="about-container">
      <p>The AGDb is a personal project of mine with many goals...</p>
      <ul className="goal-list">
        <li className="list-item">to share my love for the great generation of avant-garde composers that came into their prime in the 1950s, </li>
        <li className="list-item">to practice and show off my fullstack web development skills by building a cool website from top (React) to bottom (node & MongoDB), and</li>
        <li className="list-item">to use the collection of about 3000 experimental classical music CDs that I’ve been assembling since the 1990s to do something creative, maybe semi-autobiographical, and hopefully useful and informative for other people.</li>
      </ul>
      <p>The site will gradually acquire new features and content as my schedule permits, eventually expanding to include other composers and schools of experimental composition. For now, please check out what I’ve done and let me know what you think. Thanks for reading!</p>
      <Button className="back-button" variant="primary" type="submit" onClick={() => { onBackClick(null); }}>Back</Button>
    </div>
  )
}