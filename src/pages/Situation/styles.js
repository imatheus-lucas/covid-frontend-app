import styled from 'styled-components/native';

export const Container = styled.View`
   flex:1;
   background-color:#fff;
`;


export const CardBody = styled.View`

   background-color:#fff;
`;
export const Cardfooter = styled.View`

   background-color:#ddd;
`;
export const CardText = styled.Text`
    font-size:16px;
    color: ${props => props.color};
`;


