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

const card = ({data}) => {
  console.log(data)
  return (
    <Container>
      <Body>
  <BodyText>{data.state} - {data.uf}</BodyText>
      </Body>
      <Divider />
      <Footer>
        <FooterBox>
  <FooterText cor="#a694c4">{data.cases}</FooterText>
          <FooterText3>Confirmados</FooterText3>
        </FooterBox>
        <FooterBox>
          <FooterText1 cor="#EA5467">{data.deaths}</FooterText1>
          <FooterText3>Óbitos</FooterText3>
        </FooterBox>
        <FooterBox>
          <FooterText2  cor="#FEC961">{data.suspects}</FooterText2>
          <FooterText3>Suspeitos</FooterText3>
        </FooterBox>
      </Footer>
    </Container>
  );
};

export default card;
