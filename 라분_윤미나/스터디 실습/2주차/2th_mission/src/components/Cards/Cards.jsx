import React from 'react';
import { contents } from '../../mock/contents';
import Card from '../Card/Card';
import { Container } from '../Cards/Cards.style';

const Cards = () => {
  return (
    <Container>
      {contents.map((content) => (
        <Card key={content.id} {...content}></Card>
      ))}
    </Container>
  );
};

export default Cards;
