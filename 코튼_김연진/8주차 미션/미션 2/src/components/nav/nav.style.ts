import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';

const Container = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
`;
const Logo = styled(Link)`
    display: flex;
    text-decoration: none;
    color: black;
    font-weight: 600;
    font-size: 20px;
`;

const Search = styled(Link)`
    display: flex;
    margin-left: auto;
    color: black;
`;

const SearchIcon = styled(CiSearch)`
    width: 25px;
    height: 25px;
`;
export { Container, Logo, Search, SearchIcon };
