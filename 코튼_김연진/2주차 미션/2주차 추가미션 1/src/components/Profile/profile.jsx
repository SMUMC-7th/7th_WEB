import * as S from './profile.style';
import { useState } from 'react';
import LuckyCards from '../LuckyCardList/luckycardlist';

function Profile() {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <S.Container>
                <S.ProfileImage />
                <S.NickName>차나핑</S.NickName>
                <S.Description>지친 차나핑</S.Description>
                <S.Lucky onClick={handleOpenModal}>오늘의 운세🍀</S.Lucky>
                {modalOpen && <LuckyCards onClose={handleCloseModal} />}
            </S.Container>
        </>
    );
}

export default Profile;