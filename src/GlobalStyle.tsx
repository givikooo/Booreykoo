import styled, { createGlobalStyle } from 'styled-components';
import Responsive from './Responsive';
 
const GlobalStyle = createGlobalStyle`

`;
export const DashboardContainer = styled.div`
    max-width: 1360px;
    margin-left: 80px;
    margin-right: 80px;
    margin-bottom: 40px;
        ${Responsive.laptop}{
            margin-left: 30px;
            margin-right: 30px;
        }
        ${Responsive.sideBar.mobile}{
            margin-left: 0px;
            margin-right: 0px;
            padding-left: 25px;
            padding-right: 25px;
        }
`;
export const Title = styled.div`
  
`;

export const TrainingInnerContainer = styled.div`
    max-width: 1760px;
    margin-left: 80px;
    margin-right: 80px;
        ${Responsive.laptop}{
            margin-left: 30px;
            margin-right: 30px;
        }
        ${Responsive.tablet}{
            margin-left: 30px;
            margin-right: 30px;
        }
        ${Responsive.sideBar.mobile}{
            margin-left: 0px;
            margin-right: 0px;
            padding-left: 25px;
            padding-right: 25px;
        }
`;
 
export default GlobalStyle;


