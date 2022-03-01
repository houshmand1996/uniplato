import styled from 'styled-components';
import { sassVar } from 'core/sass-var';

const textColor = sassVar?.textColor;

export const UserPanelContainer = styled.div`
  min-height: 600px;
  width: calc(100% - 20px);
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  /* background-color: ${textColor}; */
  @media screen and (max-width: 800px) {
    /* height: 60px; */
    padding: 10px;
    /* margin-bottom: 20px; */
  }
`;
