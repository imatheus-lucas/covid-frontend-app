import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #4262e9;
  justify-content: space-evenly;
  align-items: center;
`;
export const MiniContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 16px;
`;

export const BodyText = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: #fff;
  margin-top: 20px;
`;

export const FooterText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  margin: 0 25px;
`;

export const Button = styled.TouchableOpacity`
  width: 200px;
  background-color: #fff;
  height: 46px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  elevation: 5px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #182b78;
`;
