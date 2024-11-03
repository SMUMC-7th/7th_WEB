import React from 'react';
import * as S from './Footer.style';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <S.Footer>
      <button>
        <FaAngleDoubleLeft />
      </button>
      1
      <button>
        <FaAngleDoubleRight />
      </button>
    </S.Footer>
  );
};

export default Footer;
