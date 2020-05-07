import React from 'react';
import { View } from 'react-native';
import {PieChart} from 'react-native-svg-charts'
import { Container,Box } from './styles';
import {Text} from 'react-native-svg'
const charts = () => {

    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
    const  data  = [30,10,25,18,17];
    const pieData = data.map((value, index) =>({
        value,
        key:`${index}-${value}`,
        svg:{
            fill: randomColor()
        }
    }))
  const Label = ({ slices }) =>{
      return slices.map((slices,index) =>{
          const { pieCentroid ,data,} = slices;

          return(
            <Text 
             key={`label-${index}`}
             x={pieCentroid[0]}
             y={pieCentroid[1]}
             fill="black"
             textAnchor={'middle'}
             alignmentBaseline={'middle'}
             fontSize={18}
             >{data.value}</Text>
          )
      })
  }
  return (
      <Container>
          <Box>
          <PieChart style={{height:150}} data={pieData}>
              <Label/>
            </PieChart>
          </Box>
           
      </Container>
  );
}

export default charts;