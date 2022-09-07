import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import APIURL from '../../data/apiurl.js'

export default function ComposerViewTest(props) {
  const { onBackClick } = props;
  const { surname } = useParams();
  const [composer, setComposer] = useState(null)

  useEffect(() => {
    axios.get(`${APIURL}composers/${surname}`).then((response) => {
      setComposer(response.data);
    })
  }, [surname])

  // Note to self: for reasons sort of explained here -- https://stackoverflow.com/questions/54069253/the-usestate-set-method-is-not-reflecting-a-change-immediately
  // -- the following useEffect is necessary in order for the data received from the axios API calls above to get fixed properly as the values of the useState constants.
  useEffect(() => { }, [surname])

  return (
    <Row className="justify-content-md-start">
      <Col md={4}>
        <Card>
          <Card.Img variant="top" className="composer-photo" alt="composer photo" src={composer && composer.imagepath} />
        </Card>
      </Col>
      <Col md={8}>
        <Card className="border-0">
          <Card.Body>
            <Card.Title>{composer && composer.givenname} {composer && composer.surname}</Card.Title>
            <Card.Subtitle>{composer && composer.moreinfositepath && <span>You can find lots of good info about {composer.surname} <a href={composer.moreinfositepath} target="_blank" rel="noreferrer">here</a>. And </span>}Wikipedia has all the essential facts about {composer && composer.surname} <a href={composer && composer.wikipath} target="_blank" rel="noreferrer">here</a>, so I've written up some personal reflections instead.</Card.Subtitle>
            <br />
            <Card.Text>{composer && composer.description.map(p => (<p>{p}<br /></p>))}</Card.Text>
            <Button className="back-button" variant="primary" type="submit" onClick={() => { onBackClick(null); }}>Back</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}