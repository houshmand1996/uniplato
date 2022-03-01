// import { Anchor } from 'antd';
import { HeaderContainer, LogoContainer, Logo } from './header.styles';
import LogoImg from 'core/assets/logo.svg';
export const Header = () => (
  <HeaderContainer>
    <LogoContainer >
      {/* <Anchor> */}
        <Logo href='#' title="Home" >
          <img src={LogoImg} alt="logo" />
        </Logo>
      {/* </Anchor> */}
    </LogoContainer>
  </HeaderContainer>
);

