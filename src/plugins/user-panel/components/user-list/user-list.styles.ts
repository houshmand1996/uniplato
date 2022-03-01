import styled from 'styled-components';
export const UserListContainer = styled.div`
    width: 70%;
    height: 820px;
    position: relative;
    overflow: hidden !important;
    @media (max-width: 768px) {
      width: 100%;
      margin: 0 auto;
    }
    div{
      position: absolute;
      will-change: transform, width, height, opacity;
      margin: 0 15px;
    }
`;
