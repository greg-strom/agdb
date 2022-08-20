import React from 'react'
import DiscView from '../disc-view/disc-view'

export default function DiscCard(props) {
  const { disc, onDiscClick } = props;
  return (
    <div className="disc-card" onClick={() => onDiscClick(disc)}>
      <img src={disc.imagepath} alt="disc cover art"></img>
      <br />
      {disc.recordlabel}
      <br />
      {disc.catalognumber}
    </div>
  )
}
