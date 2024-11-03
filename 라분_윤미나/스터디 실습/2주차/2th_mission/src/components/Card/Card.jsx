import { Container } from '../Card/Card.style';
import PropTypes from 'prop-types';
import React from 'react';

const Card = (props) => {
  const { title, content, image, date } = props;

  return (
    <Container>
      <img src={image}></img>
      <div>
        <h4>{title}</h4>
        <p>{content}</p>
        <br></br>
        <p>{date}</p>
      </div>
    </Container>
  );
};

//'  ' is missing in props validationeslintreact/prop-types 해결 방법
Card.prototype = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
export default Card;
