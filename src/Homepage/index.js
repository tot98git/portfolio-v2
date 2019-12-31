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
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu rutrum
          erat, et egestas diam. Curabitur a risus tempus, lobortis velit nec,
          convallis dolor. Sed interdum tempus ligula vitae imperdiet. Nullam
          volutpat eget sapien sed efficitur. Pellentesque urna nisl,
          pellentesque ut nisi ut, posuere fringilla lectus. Duis lacinia
          viverra dolor sed egestas. Fusce at massa at lacus maximus tristique
          posuere et quam. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Suspendisse ut mattis
          lorem.
        </h4>
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
