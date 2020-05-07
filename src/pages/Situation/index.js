import React from "react";
import { View,Text,StyleSheet,FlatList } from "react-native";
import Card from '../componente/card'
import { Container, CardBody, CardText, Cardfooter } from "./styles";



const Data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  },
  {
    id: "58694a0f-3da1-47a1f-bd96-1455a71e29d72",
  },
  {
    id: "58694a0f-3da1-471f-bds96-1455a71e29d72",
  },
  {
    id: "58694a0f-3da1-471f-bsd96-145571e29d72",
  },
];


const Situation = () => {
  return (
    <Container>
      <FlatList
        data={Data}
        renderItem={({ item }) => (
            <Card/>
        )
        }
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default Situation;
