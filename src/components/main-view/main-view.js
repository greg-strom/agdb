import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import NavBar from '../navbar/navbar';
import DiscCard from '../disc-card/disc-card';
import DiscView from '../disc-view/disc-view';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';

import './main-view.scss';

const APIURL = 'https://avant-garde-api.herokuapp.com/'

export default function MainView() {
  const [selectedDisc, setSelectedDisc] = useState(null)
  const [composers, setComposers] = useState(null)
  const [pieces, setPieces] = useState(null)
  const [recordings, setRecordings] = useState(null)
  const [discs, setDiscs] = useState([])

  useEffect(() => {
    axios.get(`${APIURL}composers`).then((response) => {
      setComposers(response);
    })
    axios.get(`${APIURL}pieces`).then((response) => {
      setPieces(response.data);
    })
    axios.get(`${APIURL}recordings`).then((response) => {
      setRecordings(response.data);
    })
    axios.get(`${APIURL}discs`).then((response) => {
      setDiscs(response.data);
    })
  }, [])


  // Note to self: for reasons sort of explained here -- https://stackoverflow.com/questions/54069253/the-usestate-set-method-is-not-reflecting-a-change-immediately
  // -- the following useEffect is necessary in order for the data received from the axios API calls above to get fixed properly as the values of the useState constants.
  useEffect(() => { console.log(discs) }, [composers, pieces, recordings, discs])

  // This is a useEffect I used to check how the state was changing as I wrote my code. May be useful again some time.
  // useEffect(() => {
  //   if (selectedDisc !== null) {
  //     console.log(selectedDisc)
  //   } else {
  //     console.log('no selection :(')
  //   }
  // }, [selectedDisc]);

  function discClickHandle(disc) {
    setSelectedDisc(disc);
  }

  return (
    <>
      <NavBar />
      <Row className="main-view justify-content-md-start">
        {discs.map(disc => (
          <Col md={3} key={disc._id} >
            <DiscCard disc={disc} />
          </Col>
        ))
        }
      </Row>
    </>
  )
}



//onDiscClick={(disc) => discClickHandle(disc)}

        // selectedDisc
        //   ? (
        //     <Col>
        //       <DiscView disc={selectedDisc} onBackClick={newSelectedDisc => { discClickHandle(newSelectedDisc); }} />
        //     </Col>
        //   )
        //   : 
