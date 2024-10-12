import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = styled.div`
  width: 200px;
  margin: 10px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  background-color: rgb(20, 20, 20);
`

const SidebarLink = styled(Link)`
    color: white;
    margin: 5px;
    border: none;
    text-decoration: none;
    &:hover{
        filter: brightness(0.5);
    }
`

export {Sidebar, SidebarLink}