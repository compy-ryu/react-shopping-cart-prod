import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import * as S from './styles';

function MembersLayout() {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <Outlet />
      </S.Content>
      <Footer />
    </S.Container>
  );
}

export default MembersLayout;
