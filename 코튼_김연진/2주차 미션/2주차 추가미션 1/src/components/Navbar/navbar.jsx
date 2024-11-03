import { useState } from 'react'; 
import * as S from './navbar.style';

function Navbar() {
    const [IsClick, setIsClick] = useState(false);

    return (
        <S.Container>
            <S.Toggle onClick={() => setIsClick(!IsClick)}>
                분류 전체보기
            </S.Toggle>
            {IsClick && ( 
                <S.DropdownContent>
                    <S.Button to={'/umc'}>→ UMC-WEB</S.Button>
                    <S.Button to={'/baekjoon'}>→ 백준</S.Button>
                </S.DropdownContent>
            )}
        </S.Container>
    );
}

export default Navbar;