import React from 'react';

import './Styles.scss';

const Playlist = () => {
  return (
    <div className="playlist-wrapper">
      <div className="playlist-container">
        <iframe
          title="coding playlist"
          allow="autoplay *; encrypted-media *;"
          frameBorder="0"
          height="450"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/bg/playlist/coding/pl.u-zPyLl96IkDdG6D"
        />
      </div>
    </div>
  );
};

export default Playlist;
