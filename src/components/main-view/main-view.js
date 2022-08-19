import React, { useState, useEffect } from 'react';
import NavBar from '../navbar/navbar';
import DiscCard from '../disc-card/disc-card';
import DiscView from '../disc-view/disc-view';

export default function MainView() {
  const [selectedDisc, setSelectedDisc] = useState(null)
  // This is a useEffect I used to check how the state was changing as I wrote my code. May be useful again some time.
  // useEffect(() => {
  //   if (selectedDisc !== null) {
  //     console.log(selectedDisc)
  //   } else {
  //     console.log('no selection :(')
  //   }
  // }, [selectedDisc]);


  const discs = [
    { "_id": { "$oid": "62f555fef660347b7da4c3be" }, "recordings": [{ "$oid": "62f5092ee125b0b40874d02b" }], "recordlabel": "Nonesuch", "catalognumber": "9 79320-2", "imagepath": "https://i.discogs.com/gwX0zlJ-l_ZfB3xpcADUqWeqFDxRMHL5UAvy2-Vtys0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNjUw/OTAtMTM0MDU0MzYw/NC04MjM3LmpwZWc.jpeg", "discogspath": "https://www.discogs.com/release/1165090-Morton-Feldman-Kronos-Quartet-With-Aki-Takahashi-Piano-And-String-Quartet" },
    { "_id": { "$oid": "62f55607f660347b7da4c3bf" }, "recordings": [{ "$oid": "62f509c1e125b0b40874d02c" }], "recordlabel": "Mode", "catalognumber": "50", "imagepath": "https://moderecords.com/app/uploads/2020/11/mode050-Cage-EPS.jpg", "discogspath": "https://www.discogs.com/release/722982-John-Cage-Philipp-Vandr%C3%A9-The-Piano-Works-2-Sonatas-And-Interludes-For-Prepared-Piano" },
    { "_id": { "$oid": "62f5560ef660347b7da4c3c0" }, "recordings": [{ "$oid": "62f50a98e125b0b40874d02d" }], "recordlabel": "Hyperion", "catalognumber": "CDA66115", "imagepath": "https://i.discogs.com/zGrbsR1YISv4-9YoduiQwA-sQZkwLm8O1t6taiM5UWg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc5NDc0/Ny0xMjQ0MjExMzI0/LmpwZWc.jpeg", "discogspath": "https://www.discogs.com/release/794747-Stockhausen-Singcircle-Gregory-Rose-Stimmung" },
    { "_id": { "$oid": "62f55b3af660347b7da4c3c2" }, "recordings": [{ "$oid": "62f55a87f660347b7da4c3c1" }], "recordlabel": "hat hut", "catalognumber": "hat[now]ART 128", "imagepath": "https://i.discogs.com/R_tQu0oNuLwmcJIDI4Pma1E-jS0eI7p_L5B_DZF1OZg/rs:fit/g:sm/q:90/h:528/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNTE0/NDktMTU3NzIyODYy/OC0zMjg0LmpwZWc.jpeg", "discogspath": "https://www.discogs.com/release/1151449-Morton-Feldman-Ives-Ensemble-Piano-And-String-Quartet" },
    { "_id": { "$oid": "62f56391f660347b7da4c3c7" }, "recordings": [{ "$oid": "62f56310f660347b7da4c3c5" }, { "$oid": "62f56314f660347b7da4c3c6" }], "recordlabel": "Mode", "catalognumber": "27", "imagepath": "https://moderecords.com/app/uploads/2020/11/mode27_Cage-cover.jpg", "discogspath": "https://www.discogs.com/release/1081923-John-Cage-The-Arditti-Quartet-The-Complete-String-Quartets-Vol-2" }
  ]

  function discClickHandle(disc) {
    setSelectedDisc(disc);
  }

  return (
    <>
      <NavBar />
      <button onClick={() => { alert('Nice!') }}>Click me!</button>
      <div className="main-view">
        {selectedDisc
          ? <DiscView disc={selectedDisc} onBackClick={newSelectedDisc => { discClickHandle(newSelectedDisc); }} />
          : discs.map(disc => <DiscCard key={disc._id.$oid} disc={disc} onDiscClick={(disc) => discClickHandle(disc)} />)
        }
      </div>
    </>
  )
}