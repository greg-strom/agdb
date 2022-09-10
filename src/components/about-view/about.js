import React from 'react';
import Button from 'react-bootstrap/Button';

import './about.scss';

export default function About(props) {
  const { onBackClick } = props;
  return (
    <div className="about-container">
      <p>The AGDb is a personal project of mine with many goals...</p>
      <ul className="goal-list">
        <li className="list-item">to share my love for the great generation of avant-garde composers who came into their prime in the 1950s, </li>
        <li className="list-item">to practice and show off my fullstack web development skills by building a cool website from top (React) to bottom (node & MongoDB), and</li>
        <li className="list-item">to use the collection of about 3000 experimental classical music CDs that I’ve been assembling since the 1990s to do something creative, maybe semi-autobiographical, and potentially useful and informative for other people.</li>
      </ul>
      <p>I’ll be writing up little essays to accompany the CDs and composers I put on display here, which I hope it will be fun for people to read. I should maybe remark that although I know a fair amount about this music,
        I am not at all a professional musician. I did study a bit of music theory when I was younger (enough that terms like “Neapolitan chord,” “Picardy third” and “hemiola” are still in my active vocabulary), and
        I briefly fantasized about becoming a composer, but I sort of half chickened out, half got really interested in philosophy instead, so I took a different path while cultivating an intense amateur interest in
        contemporary composition. I like to think I’m the sort of person these composers fantasize about reaching: a relatively ordinary person, who just happens to find their music fascinating. I think this music has
        the potential to appeal to many more people than the specialists, and that’s something I hope to show by how I write about it.
      </p>
      <p>The site will gradually acquire new features and content as my schedule permits, eventually expanding to include other composers and schools of experimental composition. For now, please check out what I’ve done and <a href="mailto:gbstrom@gmail.com">let me know</a> what you think. Thanks for reading!</p>
      <Button className="back-button" variant="primary" type="submit" onClick={() => { onBackClick(null); }}>Back</Button>
    </div>
  )
}