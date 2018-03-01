import React, { Component } from 'react';

import TalkList from './components/TalkList';
import Talk from './components/Talk';
import Filter from './components/Filter';

import { talkId } from './utils/helpers';

class App extends Component {

  onTalkClick = () => {
  }

  onFavClick = () => {
  }

  onFilterChange = () => {
  }

  render() {
    /*
     * TODO: these variables should have dynamically assigned values
     */
    const selectedTalk = null;
    const loading = false;
    const talks = [];
    const list = [];
    const favorites = [];
    const filter = 'main'; // Possible values: 'main','area55'

    if (loading) {
      return <div className="message">Loading...</div>;
    } else if (!talks) {
      // Error while fetching talks
      return <div className="message">Something is wrong :(</div>;
    }

    return (
      <div className="main">
        <div className="talk-container">
          <Filter active={filter} onFilterChange={this.onFilterChange} />
          <TalkList
            talks={list}
            selectedTalk={selectedTalk}
            favorites={favorites}
            onTalkClick={this.onTalkClick}
          />
        </div>
        <div className="talk-details">
          {selectedTalk ? <Talk talk={talkId(selectedTalk)} onFavClick={this.onFavClick} /> : 'Select a talk'}
        </div>
      </div>
    );
  }
}

export default App;

