import React from 'react';
import './Styles.scss';

const activities = [
  'Toti is working hard to bring this website to life.',
  'Toti is learning Flutter.',
  'Toti is studying.',
  'Toti is working.',
  'Toti is thinking.',
  'Toti is doing great stuff.'
];
const Homepage = ({ history }) => {
  const handleNav = (url) => () => history.push(url);

  return (
    <div className="home-wrapper">
      <div className="container">
        <div className="title">
          <h1>Toti</h1>
          <h1>.dev</h1>
        </div>
        <h4>{activities[Math.floor(Math.random() * activities.length)]}</h4>
        <div className="nav">
          <button className="item" onClick={handleNav('playlist')}>
            Coding playlist
          </button>
        </div>
        <div className="social">
          <a href="https://github.com/tot98git">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="Github logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
