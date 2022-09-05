import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const APIURL = 'https://avant-garde-api.herokuapp.com/'

export default function ComposerViewTest(props) {
  const { onBackClick } = props;

  const { surname } = useParams();

  const [composer, setComposer] = useState(null)

  useEffect(() => {
    axios.get(`${APIURL}composers/${surname}`).then((response) => {
      setComposer(response.data);
      console.log("the first useEffect in composerview thinks that the surname is " + surname);
    })
  }, [])


  // Note to self: for reasons sort of explained here -- https://stackoverflow.com/questions/54069253/the-usestate-set-method-is-not-reflecting-a-change-immediately
  // -- the following useEffect is necessary in order for the data received from the axios API calls above to get fixed properly as the values of the useState constants.
  useEffect(() => { console.log("the second useEffect in composerview thinks that the surname is " + surname) }, [composer])

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
            <Card.Subtitle>(You can get the <a href={composer && composer.wikipath}>facts</a> about {composer && composer.surname} at Wikipedia, so I've written up some personal reflections instead.)</Card.Subtitle>
            <br />
            <Card.Text>{composer && composer.description}</Card.Text>
            <Button className="back-button" variant="primary" type="submit" onClick={() => { onBackClick(null); }}>Back</Button>
          </Card.Body>
        </Card>
      </Col>

    </Row>
    //         {/* {disc.recordings.map((recording) => (
    //           <div key={recording._id}>
    //             <Card.Subtitle>{recording.piece.title} ({recording.piece.year})</Card.Subtitle>
    //             <Card.Subtitle>{recording.performers.map((performer, index) => (
    //               <span key={index}>{performer + (index === recording.performers.length - 1 ? '' : ', ')} </span>
    //             ))}
    //             </Card.Subtitle>
    //             <br />
    //           </div>
    //         ))} */}

    //         {/* <Link to={`/directors/${movie.Director.Name}`}>
    //         <Button variant="link">Director</Button>
    //       </Link>
    //       <Link to={`/genres/${movie.Genre.Name}`}>
    //         <Button variant="link">Genre</Button>
    //       </Link> */}
  )
}