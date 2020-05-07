import React, { useState } from "react";
import { View, Text} from "react-native";
import {Ionicons, Feather} from '@expo/vector-icons'
import {
  Container,
  Header,
  HeaderText,
  Box,
  Grid,
  Screen,
  CountBox,
  Count,
  CountText,
  Situation,
  SituationText,
  Description,
  DescriptionText
} from "./styles";

const Home = ({navigation}) => {
  const [picker, setPicker] = useState();
  return (
    <Container>
      <Grid>
        <Header>
          <HeaderText>COVID-19</HeaderText>
        </Header>
        <Screen>
          <Box />
          <Situation onPress={() => navigation.navigate('Situation')}>
              <Ionicons name={'md-pin'} size={32} color={'#4262E9'} />
              <SituationText>Situação</SituationText>
              <Feather name={'chevron-right'} size={32} color={'#4262E9'} />
          </Situation>  
          <Count>
            <CountBox color="#A694C4">
              <CountText>114.715</CountText>
              <DescriptionText>
                    Infectados
              </DescriptionText>
             </CountBox>
            <CountBox color="#EA5467" >
              <CountText>7.921</CountText>
              <DescriptionText>
                    Óbitos
              </DescriptionText>
             </CountBox>
            <CountBox color="#FEC961" >
              <CountText>6,9 </CountText>
              <DescriptionText>
                    Letaldiade
              </DescriptionText>
           </CountBox>
          </Count>
              

        </Screen>
        
      </Grid>
      
    </Container>
  );
};

export default Home;
