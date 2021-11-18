import React from 'react';
import propTypes from 'prop-types';
import '../css/topsection.css';

const TopSection = ({ charactersCount, episodesCount }) => (
  <div className="my-profile">
    <div className="slideshow-container">
      <div className="mySlides fade">
        <img src="https://finalspaceapi.com/api/episode/image/the_happy_place.jpg" alt="the_happy_place" />
      </div>
      <div className="mySlides fade">
        <img src="https://finalspaceapi.com/api/episode/image/the_other_side.jpg" alt="the_other_side" />
      </div>
      <div className="mySlides fade">
        <img src="https://finalspaceapi.com/api/episode/image/the_arachnitects.jpg" alt="the_arachnitects" />
      </div>
      <div className="mySlides fade">
        <img src="https://finalspaceapi.com/api/episode/image/the_remembered.jpg" alt="the_remembered" />
      </div>
      <div className="mySlides fade">
        <img src="https://finalspaceapi.com/api/episode/image/the_descent_into_darkness.jpg" alt="descent_into_darkness" />
      </div>
    </div>
    <div className="my-profile-info">
      <h1>FINAL SPACE</h1>
      <h3>
        {`${charactersCount} `}
        Characters
      </h3>
      <h3>
        {`${episodesCount} `}
        Episodes
      </h3>
    </div>
  </div>
);

TopSection.propTypes = {
  charactersCount: propTypes.number.isRequired,
  episodesCount: propTypes.number.isRequired,
};

export default TopSection;
