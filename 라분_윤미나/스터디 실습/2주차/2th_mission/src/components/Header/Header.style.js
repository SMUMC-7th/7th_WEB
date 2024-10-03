import styled from 'styled-components';

const Header = styled.header`
  a {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 10%;
    color: black;
    text-decoration: none;
  }
  h3 {
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export { Header };
