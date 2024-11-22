import * as S from './button.style';

const Button = ({
    text,
    onClick,
    disabled,
}: {
    text: string;
    onClick: () => void;
    disabled: boolean;
}) => {
    return (
        <S.Button onClick={onClick} disabled={disabled}>
            {text}
        </S.Button>
    );
};

export default Button;
