import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 14px;
`;

const Logo = styled(Link)`
  color: red;
  cursor: pointer;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;

  &:visited {
    color: red;
  }
`;

export { Nav, Logo };
