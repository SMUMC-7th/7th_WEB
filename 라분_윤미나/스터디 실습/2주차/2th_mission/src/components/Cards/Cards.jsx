import React from 'react';
import { Link } from 'react-router-dom';

import { contents } from '../../mock/contents';
import Card from '../Card/Card';
import { Container } from '../Cards/Cards.style';

const Cards = () => {
  return (
    <Container>
      {contents.map((content) => (
        <Link
          to={`/detailed/${content.id}`}
          key={content.id}
          style={{ textDecoration: 'none' }}
        >
          <Card {...content}></Card>
        </Link>
      ))}
    </Container>
  );
};

export default Cards;
