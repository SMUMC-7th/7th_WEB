import * as S from './not-found.style'

const NotFound = () => {
    return (
        <S.Container>
            <h1>😭잘못 들어오셨어요😭</h1>
            <S.Button to={'/'}>홈으로 돌아가기</S.Button>
        </S.Container>
    );
};

export default NotFound;