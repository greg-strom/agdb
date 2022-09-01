import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ComposerView(props) {
  const { composer, onBackClick } = props;

  return (
    <Row className="justify-content-md-start">
      <Col md={4}>
        <Card>
          <Card.Img variant="top" className="disc-cover-art" alt="disc cover art" src={composer.imagepath} />
        </Card>
      </Col>
      <Col md={8}>
        <Card className="border-0">
          <Card.Body>
            <Card.Title>{composer.givenname} {composer.surname}</Card.Title>
            <Card.Subtitle>{composer.DOB}</Card.Subtitle>
            <Card.Text>{composer.description}</Card.Text>
            {/* {disc.recordings.map((recording) => (
              <div key={recording._id}>
                <Card.Subtitle>{recording.piece.title} ({recording.piece.year})</Card.Subtitle>
                <Card.Subtitle>{recording.performers.map((performer, index) => (
                  <span key={index}>{performer + (index === recording.performers.length - 1 ? '' : ', ')} </span>
                ))}
                </Card.Subtitle>
                <br />
              </div>
            ))} */}

            {/* <Link to={`/directors/${movie.Director.Name}`}>
            <Button variant="link">Director</Button>
          </Link>
          <Link to={`/genres/${movie.Genre.Name}`}>
            <Button variant="link">Genre</Button>
          </Link> */}
            <Button className="back-button" variant="primary" type="submit" onClick={() => { onBackClick(null); }}>Back</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}