import styled from 'styled-components';
import { sassVar } from 'core/sass-var';
const  tertiaryColor  = sassVar?.tertiaryColor;
export const UserListContainer = styled.div`
  width: 70%;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  /* align-content: space-between; */
  flex-wrap: wrap;
  /* background-color: ${tertiaryColor}; */
  @media screen and (max-width: 800px) {
    /* height: 60px; */
    padding: 10px;
    /* margin-bottom: 20px; */
  }
`;
