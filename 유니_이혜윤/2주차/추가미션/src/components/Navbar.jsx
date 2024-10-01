import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa6";

const Container = styled.div`
    padding: 10px;

    h4 {
        padding-bottom: 10px;
    }

    ul {
        list-style: none;
        font-size :14px;
    }

    li {
        display: flex;
        cursor: pointer;
        padding-bottom: 2px;
    }
`;

const Navbar = () => {
    return (
        <Container>
            <h4>분류 전체보기</h4>
            <ul>
                <li><FaAngleRight />UMC-WEB</li>
                <li><FaAngleRight />백준</li>
            </ul>
        </Container>
    )
}

export default Navbar;