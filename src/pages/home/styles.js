import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Grid = styled.View`
  margin: 0 16px;
`;
export const Screen = styled.View`
  align-items: center;
`;
export const Header = styled.SafeAreaView`
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 16px;
`;

export const HeaderText = styled.Text`
  font-size: 30px;
  color: #324ab2;
  font-weight: bold;
`;

export const Box = styled.View`
  width: 300px;
  height: 150px;
  border-radius: 10px;
  elevation: 15px;
  box-shadow: 2px 2px 2px #ddd;
  background-color: #fff;
  margin-bottom: 30px;
  justify-content:center;
  align-items:center;

`;
export const Image = styled.Image`
  width:150px;
  height:150px;
  
  
`;


export const Situation = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  border-width: 1px;
  background-color: #fff;
  border-color: #ddd;
  border-radius: 20px;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  margin: 15px;
`;

export const SituationText = styled.Text`
  font-size: 16px;
  color: #324ab2;
  font-weight: bold;
  margin-right: 80px;
`;

export const Count = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const CountBox = styled.View`
  width: 95px;
  margin: 5px;
  height: 95px;
  border-radius: 15px;
  background-color: ${(props) => props.color};
  align-items: center;
  justify-content: center;
`;
export const CountText = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
`;

export const DescriptionText = styled.Text`
  position: absolute;
  bottom: -20px;
  font-size: 16px;
  font-weight: bold;
  color: #a694c4;
`;
