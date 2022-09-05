import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './disc-view.scss';

const APIURL = 'https://avant-garde-api.herokuapp.com/';

export default function DiscView(props) {
  const { onBackClick } = props;
  const { discId } = useParams();
  const [disc, setDisc] = useState(null)

  useEffect(() => {
    axios.get(`${APIURL}discs/${discId}`).then((response) => {
      setDisc(response.data);
    })
  }, [])

  // Note to self: for reasons sort of explained here -- https://stackoverflow.com/questions/54069253/the-usestate-set-method-is-not-reflecting-a-change-immediately
  // -- the following useEffect is necessary in order for the data received from the axios API calls above to get fixed properly as the values of the useState constants.
  useEffect(() => { }, [disc])

  return (
    <Row className="justify-content-md-start">
      <Col md={4}>
        <Card className="border-0">
          <Card.Img variant="top" className="disc-cover-art" alt="disc cover art" src={disc && disc.imagepath} />
          <Card.Subtitle className="record-data">{disc && disc.recordlabel} - {disc && disc.catalognumber}</Card.Subtitle>
          <Card.Body>
            <LinkContainer to={`/composers/${disc && disc.recordings[0].composer.surname}`} className="link">
              <Card.Title>{disc && disc.recordings[0].composer.givenname} {disc && disc.recordings[0].composer.surname}</Card.Title>
            </LinkContainer>
            <div className="recording-info-wrapper">
              {disc && disc.recordings.map((recording) => (
                <div key={recording._id} className="recording-info">
                  <Card.Subtitle className="piece-title-and-year"><span className="piece-title-span">{recording.piece.title}</span> <span className="piece-year-span">({recording.piece.year}</span>)</Card.Subtitle>
                  <Card.Subtitle className="performers-info">{recording.performers.map((performer, index) => (
                    <span key={index}>{performer + (index === recording.performers.length - 1 ? '' : ', ')} </span>
                  ))}
                  </Card.Subtitle>
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={8}>
        <Card className="border-0">
          <Card.Body>
            {disc && disc.comments
              ?
              <Card.Text className="post">{disc && disc.comments}</Card.Text>
              :
              <Card.Text className="post">In the fullness of time, I will post some commentary about this CD here.</Card.Text>
            }
            <Button className="back-button" variant="primary" type="submit" onClick={() => { onBackClick(null); }}>Back</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}