import React from 'react'
import DiscView from '../disc-view/disc-view'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './disc-card.scss';

export default function DiscCard(props) {
  const { disc, onDiscClick } = props;
  return (
    <Card className="h-100 m-25 border-0 disc-card">
      <Card.Img className="disc-cover-art" src={disc.imagepath} alt="disc cover art" onClick={() => onDiscClick(disc)} />
      <Card.Body>
        <Card.Title>{disc.recordings[0].composer.givenname} {disc.recordings[0].composer.surname}</Card.Title>
        {disc.recordings.map((recording, index) => (
          <div key={recording._id}>

            <Card.Subtitle>{recording.piece.title} ({recording.piece.year})</Card.Subtitle>
            {/* {recording.performers.map((performer, index) => (
              <div><span key={index}>{performer + (index === recording.performers.length - 1 ? '' : ', ')} </span><br></br></div>
              // <div key={index}>
              //   <Card.Subtitle>{performer}</Card.Subtitle>
              // </div>
            ))} */}
          </div>
        ))}
      </Card.Body>
    </Card>
  )
}
