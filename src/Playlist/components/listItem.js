import React from 'react';
import { YoutubeIcon } from './icons';

const ListItem = ({ song, singer, date }) => {
  return (
    <div className="list-item">
      <div className="block _width-70">
        <h1>{song}</h1>
        <h4>{singer}</h4>
      </div>
      <div className="block _blue _bold _width-20">
        <span>{date}</span>
      </div>
      <div className="block icon _width-10">
        <YoutubeIcon />
      </div>
    </div>
  );
};

export default ListItem;
