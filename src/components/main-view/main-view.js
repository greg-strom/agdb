import React from 'react';
import NavBar from '../navbar/navbar';

export default function MainView() {
  return (
    <>
      <NavBar />
      <div className="main-view">
        {/* In the fulness of time the following will be replaced with something more or less like this:
          <div className="main-view">
            {pieces.map(piece => <div key={piece._id}>{piece.title}</div>)}
          </div>
        */}
        <div>Stockhausen, "Stimmung"</div>
        <div>Feldman, "Piano and String Quartet"</div>
        <div>Cage, "Sonatas and Interludes"</div>
        <div>Stockhausen, "Unsichtbare Chöre"</div>
      </div>
    </>
  )
}