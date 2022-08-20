import React from 'react';
import axios from 'axios';

import DiscCard from '../disc-card/disc-card';
import DiscView from '../disc-view/disc-view';

export default class TestComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      discs: [],
      selectedDisc: null
    }
  }


  componentDidMount() {
    axios.get('https://avant-garde-api.herokuapp.com/discs')
      .then(response => {
        this.setState({
          discs: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  discClickHandle(disc) {
    this.setState({ selectedDisc: disc });
  }


  render() {
    // const { discs, selectedDisc } = this.state;

    // if (discs.length === 0) return <div className="main-view" />;

    return (
      <div className="main-view">Nothing much going on here...
        {/* {selectedDisc
          ? <DiscView disc={selectedDisc} onBackClick={newSelectedDisc => { this.discClickHandle(newSelectedDisc); }} />
          : discs.map(disc => <DiscCard key={disc._id.$oid} disc={disc} onDiscClick={(disc) => this.discClickHandle(disc)} />)
        } */}
      </div>
    );
  }
}