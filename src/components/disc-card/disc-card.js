import React from 'react'
import DiscView from '../disc-view/disc-view'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';

import './disc-card.scss';

export default function DiscCard(props) {
  const { disc } = props;
  return (
    <Card className="h-100 m-25 border-0 disc-card">
      <Link to={`/discs/${disc._id}`} className="link">
        <Card.Img src={disc.imagepath} alt="disc cover art" />
      </Link>
      <Card.Body className="card-body">
        <LinkContainer to={`/composers/${disc.recordings[0].composer.surname}`} className="link">
          <Card.Title>{disc.recordings[0].composer.givenname} {disc.recordings[0].composer.surname}</Card.Title>
        </LinkContainer>
        {disc.recordings.map((recording, index) => (
          <div key={recording._id}>
            <Card.Text className="piece-details"><span className="piece-title">{recording.piece.title}</span> ({recording.piece.year})</Card.Text>
          </div>
        ))}
      </Card.Body>
    </Card >
  )
}