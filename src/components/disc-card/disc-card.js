import React from 'react'
import DiscView from '../disc-view/disc-view'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function DiscCard(props) {
  const { disc, onDiscClick } = props;
  return (
    <Card>
      <Card.Img variant="top" src={disc.imagepath} alt="disc cover art" />
      <Card.Body>
        <Card.Title>{disc.recordlabel}</Card.Title>
        <Card.Subtitle>{disc.catalognumber}</Card.Subtitle>
        <Button onClick={() => onDiscClick(disc)} variant="link">Open</Button>
      </Card.Body>
    </Card>
  )
}
