import React, { useState, useEffect } from "react";
import { View, Text} from "react-native";
import api from '../../services/api';
import {Ionicons, Feather} from '@expo/vector-icons'
import img from '../assets/imagens/menu.png'
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
  DescriptionText,
  Image
} from "./styles";

const Home = ({navigation}) => {
  const [data, setData] = useState([])
  useEffect(() => {
    laod();
  }, []);
  async function laod(){
    const response = await api.get('/api/report/v1/brazil');
    console.log(response.data)
    setData(response.data.data);
  }
 
  return (
    <Container>
      <Grid>
        <Header>
          <HeaderText>COVID-19</HeaderText>
        </Header>
        <Screen>
          <Box>
              <Image source={img} resizeMode='contain'/>
          </Box>  
          <Situation onPress={() => navigation.navigate('Situation')}>
              <Ionicons name={'md-pin'} size={32} color={'#4262E9'} />
              <SituationText>Situação</SituationText>
              <Feather name={'chevron-right'} size={32} color={'#4262E9'} />
          </Situation>  
          <Count>
            <CountBox color="#A694C4">
              <CountText>{data.confirmed}</CountText>
              <DescriptionText>
                    Infectados
              </DescriptionText>
             </CountBox>
            <CountBox color="#EA5467" >
              <CountText>{data.deaths}</CountText>
              <DescriptionText>
                    Óbitos
              </DescriptionText>
             </CountBox>
            <CountBox color="#FEC961" >
              <CountText>{data.recovered}</CountText>
              <DescriptionText>
                    Curados
              </DescriptionText>
           </CountBox>
          </Count>
              

        </Screen>
        
      </Grid>
      
    </Container>
  );
};

export default Home;
