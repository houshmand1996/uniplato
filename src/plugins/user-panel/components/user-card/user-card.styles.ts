import styled from 'styled-components';
import { sassVar } from 'core/sass-var';
import { Button   , Tag} from 'antd';
const  secondaryColor  = sassVar?.secondaryColor;
const  darkColor  = sassVar?.darkColor;

export const UserCardContainer = styled.div`
    width: 300px;
    height: 200px;
    border-radius: 5px;
    padding: 5px;
    display: flex;
   margin-top: 5px;
    background: ${secondaryColor};
    position: relative;
`;


export const DeleteContainer = styled(Button)`
    position: absolute;
    left: 5px;
    top: 5px;
    background: ${darkColor} !important;
    padding: 10px !important;
    cursor: pointer !important;
`;

export const UsernameContainer = styled(Tag)`
    position: absolute;
    left: 5px;
    bottom: 5px;
    color: white;
    font-size: 12px;
    padding: 4px 2px;
    border-radius: 5px;
`;

