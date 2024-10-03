import Container from './Card.style';
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ content, isClicked, onClick }) => {
  console.log(isClicked);

  return (
    <Container onClick={onClick}>
      {isClicked ? (
        <p>{content}</p>
      ) : (
        <img src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimg.lovepik.com%2Fpng%2F20231012%2FFour-leaf-clover-with-slender-handle-clipart-thin-handle-lucky_181482_wh860.png&type=a340" />
      )}
    </Container>
  );
};

Card.prototype = {
  content: PropTypes.string.isRequired,
};

export default Card;
