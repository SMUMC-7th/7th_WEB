import styled from "styled-components";

import Profile from "./Profile";
import Navbar from "./Navbar";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const ProfileSection = styled.div`
    height: 30vh;
`;

const NavbarSection = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const Sidebar = () => {
    return (
        <Container>
            <ProfileSection>
                <Profile />
            </ProfileSection>
            <NavbarSection>
                <Navbar />
            </NavbarSection>
        </Container>
    )
}

export default Sidebar;