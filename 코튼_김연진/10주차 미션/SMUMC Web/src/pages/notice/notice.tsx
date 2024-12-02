import * as S from './notice.style';
import Question from '../../components/question/question';
import { QNA } from '../../mocks/info';
const Notice = () => {
    return (
        <S.Container>
            <S.Title>자주 묻는 질문</S.Title>
            <S.Contents>
                {QNA.map((questionData, idx) => (
                    <Question key={idx} {...questionData}></Question>
                ))}
            </S.Contents>
        </S.Container>
    );
};

export default Notice;
