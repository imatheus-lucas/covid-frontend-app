import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
 
    margin:0 16px;
    margin-top:30px;
    margin-bottom:10px;
    align-items:center;
    height:125px;
    border-radius:15px;
    border-width:1px;
    border-color:#ddd;
    elevation:5px;
    padding:1px;
`;
export const Body = styled.View`
    flex:1;
    background-color:#fff;
    border-top-left-radius:15px;
    border-top-right-radius:15px;
    width:100%;
    
`;
export const Divider = styled.View`
   border-width:1px;
   border-color:#ddd;
   width:100%;
`;
export const Footer = styled.View`
    flex:1;
    background-color:#fff;
    border-bottom-left-radius:15px;
    border-bottom-right-radius:15px;
    width:100%;
    flex-direction:row;
    justify-content:space-between;
`;

export const BodyText = styled.Text`
    font-size:25px;
    margin-left:25px;
    color:#000;
    font-weight:bold;
    margin-top:15px;
`;

export const FooterText = styled.Text`
   font-weight:bold;
   font-size:18px;
   color: #a694c4;
`;
export const FooterText1 = styled.Text`
   font-weight:bold;
   font-size:18px;
   color: #EA5467;
`;
export const FooterText2 = styled.Text`
   font-weight:bold;
   font-size:18px;
   color: #FEC961;
`;
export const FooterText3 = styled.Text`
   font-size:16px;
   color: #ddd;
`;


export const FooterBox = styled.View`
   flex:1;
   margin-top:10px;
   align-items:center;
   flex-direction:column;
`;

