import React from 'react';
import Card from '../components/Card/Card';
import { contents } from '../mock/contents';
import { Container } from '../components/Cards/Cards.style';

const RosePage = () => {
  return (
    <Container>
      {contents
        .filter((content) => content.category === 'rose')
        .map((content) => (
          <Card key={content.id} {...content}></Card>
        ))}
    </Container>
  );
};

export default RosePage;
