import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NavBar from '../navbar/navbar';
import DiscCard from '../disc-card/disc-card';
import DiscView from '../disc-view/disc-view';

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
  useEffect(() => { }, [composers, pieces, recordings, discs])

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
    console.log('now the selected disc is ' + selectedDisc);
  }

  return (
    <>
      <NavBar />
      <button onClick={() => { alert('Nice!') }}>Click me!</button>
      <div className="main-view">
        {selectedDisc
          ? <DiscView disc={selectedDisc} onBackClick={newSelectedDisc => { discClickHandle(newSelectedDisc); }} />
          : discs.map(disc => <DiscCard key={disc._id} disc={disc} onDiscClick={(disc) => discClickHandle(disc)} />)
        }
      </div>
    </>
  )
}