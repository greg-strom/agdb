import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import { useParams } from "react-router-dom";

import MainView from "./components/main-view/main-view";
import NavBar from "./components/navbar/navbar";
import DiscView from "./components/disc-view/disc-view";
import DiscCard from "./components/disc-card/disc-card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { getDiscs } from './data/discs';

// note to self: for reasons sort of explained here -- https://stackoverflow.com/questions/71832720/link-tag-inside-browserrouter-changes-only-the-url-but-doesnt-render-the-compo --
// it is necessary to use react-router-dom 5.3.3, not any earlier version, to get Link compatible with React.

// For reasons explained elsewhere (no link, sorry), react-router-dom 6 and higher will not work for my needs given how I want data to flow from one component to another.

const APIURL = 'https://avant-garde-api.herokuapp.com/'

export default function AppRouter() {
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
  useEffect(() => { }, [composers, pieces, recordings, discs])


  return (
    <>
      <NavBar />
      <Router>
        <Row className="main-view justify-content-md-start">
          <Route exact path="/" render={() => {
            return discs.map(d => (
              <Col md={3} key={d._id.$oid}>
                <DiscCard disc={d} />
              </Col>
            ))
          }} />
          <Route path="/discs/:discId" render={({ match, history }) => {
            return <Col md={8}>
              <DiscView disc={discs.find(d => d._id === match.params.discId)} onBackClick={() => history.goBack()} />
            </Col>
          }} />

          {/* <Route exact path="discs/:discId">
            <DiscView />
          </Route> */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />

        </Row>
      </Router>
    </>
  );
}