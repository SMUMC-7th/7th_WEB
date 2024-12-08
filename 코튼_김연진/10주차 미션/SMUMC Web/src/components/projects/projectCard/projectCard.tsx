import * as S from './projectCard.style';
import { Project } from '../../../mocks/projectData';
import { useState, useEffect } from 'react';
import ProjectModal from '../projectModal/projectModal';
import errImg from '../../../images/recruitingposter.webp';

function ProjectCard(props: Project) {
    const { name, description, img, year } = props;
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => {
        if (!modalOpen) {
            setModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {}, [modalOpen]);

    return (
        <S.Container onClick={handleOpenModal}>
            {modalOpen && (
                <ProjectModal onClose={handleCloseModal} {...props} />
            )}
            <S.Img>
                <img
                    src={
                        'https://raw.githubusercontent.com/SMU-UMC/SMUMC-NEXT/refs/heads/main/public' +
                        img
                    }
                    alt={name}
                    onError={(e) => {
                        e.currentTarget.src = errImg;
                    }}
                />
            </S.Img>
            <S.Content className="card">
                <S.Text>{year}기</S.Text>
                <S.Title>{name}</S.Title>
                <S.Description>{description}</S.Description>
            </S.Content>
        </S.Container>
    );
}

export default ProjectCard;
