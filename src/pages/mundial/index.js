import React,{useEffect,useState} from 'react';

import { Container,Box, HeaderText} from './styles';
import api from '../../services/api'

const mundial = () => {

    const [data, setData] =useState([]);
    useEffect(() => {
      load();
    }, []);
    
    async function load() {
        const response = await api.get("/api/report/v1");
         console.log(response.data)
        setData(Object.values(response.data.data));
      }
  return (
      <Container>
          <Box>
              <HeaderText>Situação(Global)</HeaderText>
          </Box>
           
      </Container>
  );
}

export default mundial;