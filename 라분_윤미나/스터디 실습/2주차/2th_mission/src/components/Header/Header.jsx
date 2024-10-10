import * as S from './Header.style.js';
import React from 'react';
import { MdEmojiFoodBeverage } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <S.Header>
      <Link to={'/'}>
        <MdEmojiFoodBeverage size={'30px'} />
        <h3>미나의 블로그</h3>
      </Link>
    </S.Header>
  );
};

export default Header;
