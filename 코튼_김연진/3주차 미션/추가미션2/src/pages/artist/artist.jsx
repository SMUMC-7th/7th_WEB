import * as S from './artist.style'

const Artist = () => {
    return <S.Container>
        <S.Title>원하는 아티스트를 클릭하세요!</S.Title>
        <S.Buttons>
            <S.Button to={'/artist/6dhfy4ByARPJdPtMyrUYJK'}>백예린</S.Button>
            <S.Button to={'/artist/6HvZYsbFfjnjFrWF950C9d'}>뉴진스</S.Button>
        </S.Buttons>
    </S.Container>
    
}

export default Artist