import React from "react";
import { View, Text } from "react-native";

import {
  Container,
  Body,
  Footer,
  BodyText,
  FooterText,
  Divider,
  FooterBox,
  FooterText1,
  FooterText2,
  FooterText3
} from "./styles";

const card = () => {
  return (
    <Container>
      <Body>
        <BodyText> Acre </BodyText>
      </Body>
      <Divider />
      <Footer>
        <FooterBox>
          <FooterText cor="#a694c4">817</FooterText>
          <FooterText3>Confirmados</FooterText3>
        </FooterBox>
        <FooterBox>
          <FooterText1 cor="#EA5467">80</FooterText1>
          <FooterText3>Óbitos</FooterText3>
        </FooterBox>
        <FooterBox>
          <FooterText2  cor="#FEC961">24</FooterText2>
          <FooterText3>Letalidade</FooterText3>
        </FooterBox>
      </Footer>
    </Container>
  );
};

export default card;
