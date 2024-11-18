import * as S from './root-layout.style';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <S.Container>
      <S.Header>⭐ UMC TodoList ⭐</S.Header>
      <Outlet />
    </S.Container>
  );
};

export { RootLayout };
