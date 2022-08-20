import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function DiscView(props) {
  const { disc, onBackClick } = props;
  return (
    <Row className="justify-content-md-center">
      <Col md={8}>
        <Card className="disc-view">
          <Card.Img variant="top" className="disc-cover-art" alt="disc cover art" src={disc.imagepath} />
          <Card.Body>
            <Card.Title className="record-label">{disc.recordlabel}</Card.Title>
            <Card.Subtitle className="catalog-number">{disc.catalognumber}</Card.Subtitle>
            {/* <Link to={`/directors/${movie.Director.Name}`}>
            <Button variant="link">Director</Button>
          </Link>
          <Link to={`/genres/${movie.Genre.Name}`}>
            <Button variant="link">Genre</Button>
          </Link> */}
            <Button variant="primary" type="submit" onClick={() => { onBackClick(null); }}>Back</Button>
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
