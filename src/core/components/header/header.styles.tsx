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
  display: flex;
  align-items: center;
`;



export const Logo = styled.a`
`;
