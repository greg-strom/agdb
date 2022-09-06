import React, { useState, useEffect } from 'react';
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import axios from 'axios';

import NavBar from "../navbar/navbar";
import DiscView from "../disc-view/disc-view";
import DiscCard from "../disc-card/disc-card";
import ComposerView from "../composer-view/composer-view";
import About from "../about-view/about";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// note to self: for reasons sort of explained here -- https://stackoverflow.com/questions/71832720/link-tag-inside-browserrouter-changes-only-the-url-but-doesnt-render-the-compo --
// it is necessary to use react-router-dom 5.3.3, not any earlier version, to get Link compatible with React.

// For reasons explained elsewhere (no link, sorry), react-router-dom 6 and higher will not work for my needs given how I want data to flow from one component to another.

import './main-view.scss';

import APIURL from '../../data/apiurl.js'

export default function MainView() {
  // there are a lot of useStates here that I might some day have a use for, so I'm keeping them in commented out form
  // const [composers, setComposers] = useState(null)
  // const [pieces, setPieces] = useState(null)
  // const [recordings, setRecordings] = useState(null)
  const [discs, setDiscs] = useState([])

  useEffect(() => {
    // there are a lot of get requests here that I might some day have a use for, so I'm keeping them in commented out form
    // axios.get(`${APIURL}composers`).then((response) => {
    //   setComposers(response.data);
    // })
    // axios.get(`${APIURL}pieces`).then((response) => {
    //   setPieces(response.data);
    // })
    // axios.get(`${APIURL}recordings`).then((response) => {
    //   setRecordings(response.data);
    // })
    axios.get(`${APIURL}discs`).then((response) => {
      setDiscs(response.data);
    })
  }, [])


  // Note to self: for reasons sort of explained here -- https://stackoverflow.com/questions/54069253/the-usestate-set-method-is-not-reflecting-a-change-immediately
  // -- the following useEffect is necessary in order for the data received from the axios API calls above to get fixed properly as the values of the useState constants.
  useEffect(() => { }, [discs])


  return (
    <HashRouter basename="/AGDb" >
      <NavBar key={"NavBar"} />
      <Row className="main-view justify-content-md-start">
        <Switch>
          <Route exact path="/" render={() => {
            return discs.map(d => (
              <Col md={3} key={d._id} className="disc-card-col">
                <DiscCard disc={d} />
              </Col>
            ))
          }} />
          <Route path="/discs/:discId" render={({ match, history }) => {
            return <Col>
              <DiscView key={match.params.discId || 'empty'} disc={discs.find(d => d._id === match.params.discId)} onBackClick={() => history.goBack()} />
            </Col>
          }} />
          <Route path="/composers/:surname" render={({ match, history }) => {
            return <Col>
              <ComposerView key={match.params.surname || 'empty'} onBackClick={() => history.goBack()} />
            </Col>
          }} />
          <Route path="/about" render={({ history }) => {
            return <Col>
              <About key={"about"} onBackClick={() => history.goBack()} />
            </Col>
          }} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Switch>
      </Row>
    </HashRouter>
  );
}