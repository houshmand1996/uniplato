import styled from 'styled-components';


export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: auto;
  @media screen and (max-width: 800px) {
    width: 50px;
  }
`;



export const Logo = styled.a`
  height: 100%;
  width: 70px;
  @media screen and (max-width: 800px) {
    width: 50px;
  }
`;
