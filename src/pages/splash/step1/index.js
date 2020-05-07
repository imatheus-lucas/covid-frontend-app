import React from "react";
import { View, Image } from "react-native";
import logo from "../../assets/imagens/image1.png";
import {
  Container,
  BodyText,
  FooterText,
  Button,
  ButtonText,
  MiniContainer,
} from "./styles";

const Step1 = ({navigation}) => {
  return (
    <Container>
      <BodyText>COVID-19</BodyText>
      <MiniContainer>
        <Image
          source={logo}
          style={{ width: 300, height: 300, opacity: 0.8 }}
        />
        <FooterText>
          Estamos juntos nessa luta fique informado com o nosso app.
        </FooterText>
      </MiniContainer>

      <Button>
        <ButtonText onPress={() => navigation.navigate('Main')}>Vamos Começar</ButtonText>
      </Button>
    </Container>
  );
};

export default Step1;
