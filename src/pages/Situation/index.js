import React,{useEffect,useState} from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Card from "../componente/card";
import { Container, CardBody, CardText, Cardfooter } from "./styles";
import api from '../../services/api'
const Situation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    laod();
  }, []);

  async function laod() {
    const response = await api.get("/api/report/v1");
     
    setData(response.data.data);
  }

  return (
    <Container>
      <FlatList
        data={Object.values(data)}
        renderItem={({ item }) => <Card data={item}/>}
        keyExtractor={(item) => item.uf}
        showsHorizontalScrollIndicator={false}
      /> 
      <View style={{flex:1, marginBottom:100}}>
      </View>  
    </Container>
  );
};

export default Situation;
