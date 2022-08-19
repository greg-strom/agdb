import React from 'react';

export default function DiscView(props) {
  const { disc, onBackClick } = props;
  return (
    <div className="disc-view">
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
    </div>
  );
}