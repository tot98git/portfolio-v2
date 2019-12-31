import React, { useState } from 'react';
import ranking from './components/ranking';
import ListItem from './components/listItem';

import './Styles.scss';

const Playlist = () => {
  const [current, setCurrent] = useState(0);

  const handleSetCurrent = (num) => () => setCurrent(num * 6);

  return (
    <div className="playlist-wrapper">
      <div className="playlist-container">
        <h1>My top ranking</h1>
        <div className="list-container">
          {ranking.slice(current, current + 6).map(({ id, ...item }) => (
            <ListItem key={id} {...item} />
          ))}
        </div>

        <div className="btn-container">
          {Array(Math.floor(ranking.length / 6))
            .fill(1)
            .map((item, index) => (
              <button
                onClick={handleSetCurrent(index)}
                className={`nav-btn ${
                  index * 6 === current ? '_selected' : ''
                } ?`}
                type="button"
              >
                {index + 1}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
