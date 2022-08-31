import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";

import './disc-view.scss';

export default function DiscView(props) {
  const { disc, onBackClick } = props;
  return (
    <Row className="justify-content-md-start">
      <Col md={3}>
        <Card>
          <Card.Img variant="top" className="disc-cover-art" alt="disc cover art" src={disc.imagepath} />
        </Card>
      </Col>
      <Col md={9}>
        <Card className="border-0">
          <Card.Body>
            <Card.Title>{disc.recordings[0].composer.givenname} {disc.recordings[0].composer.surname}</Card.Title>
            {disc.recordings.map((recording) => (
              <div key={recording._id}>
                <Card.Subtitle>{recording.piece.title} ({recording.piece.year})</Card.Subtitle>
                <Card.Subtitle>{recording.performers.map((performer, index) => (
                  <span key={index}>{performer + (index === recording.performers.length - 1 ? '' : ', ')} </span>
                ))}
                </Card.Subtitle>
                <br />
              </div>
            ))}

            {/* <Link to={`/directors/${movie.Director.Name}`}>
            <Button variant="link">Director</Button>
          </Link>
          <Link to={`/genres/${movie.Genre.Name}`}>
            <Button variant="link">Genre</Button>
          </Link> */}
            <Card.Text className="post">{disc.comments}</Card.Text>
            <Card.Subtitle className="record-label">{disc.recordlabel} - {disc.catalognumber}</Card.Subtitle>
            <Button className="back-button" variant="primary" type="submit" onClick={() => { onBackClick(null); }}>Back</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

/* <div className="disc-view">
      <div className="disc-image">
        <img alt="" src={disc.imagepath} />
      </div>
      <div className="disc-title">
        <span className="label">Record Label: </span>
        <span className="value">{disc.recordlabel}</span>
      </div>
      <div className="disc-catalognumber">
        <span className="label">Catalog Number: </span>
        <span className="value">{disc.catalognumber}</span>
      </div>
      <button onClick={() => { onBackClick(null); }}>Go Back</button>
    </div> */
