import Container from './Navbar.style';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Container>
      <h3>분류 전체보기</h3>
      <Link to={'/rose'}> ㅁ UMC-rose</Link>
      <a href="https://blog.naver.com/dbsalsk2514"> ㅁ 네이버 블로그</a>
    </Container>
  );
};

export default Navbar;
