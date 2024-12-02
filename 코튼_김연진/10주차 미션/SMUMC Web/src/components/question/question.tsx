import * as S from './question.style';
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
export interface IQuestionType {
    question: string;
    answer: string;
}

const Question = ({ question, answer }: IQuestionType) => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useContext(ThemeContext);
    const toggleAnswer = () => setIsOpen((prev) => !prev);
    return (
        <S.Container onClick={toggleAnswer}>
            <S.Question islight={theme}>{question}</S.Question>
            <S.AnswerContainer isOpen={isOpen}>
                <S.Answer islight={theme}>{answer}</S.Answer>
            </S.AnswerContainer>
            {isOpen ? (
                <S.ArrowUp islight={theme} />
            ) : (
                <S.ArrowDown islight={theme} />
            )}
        </S.Container>
    );
};

export default Question;
