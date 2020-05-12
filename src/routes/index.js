import React from "react";
import { View } from "react-native";

import Home from "../pages/home";
import Situation from "../pages/Situation";
import Mundial from '../pages/mundial'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome5, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Routes = () => {
  const icons = {
    Mundial: {
      lib: FontAwesome5,
      name: "globe-americas",
    },
    Home: {
      lib: AntDesign,
      name: "home",
    },
    Situation: {
      lib: MaterialCommunityIcons,
      name: "map-marker-outline",
    },
  };

  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          const { lib: Icon, name } = icons[route.name];
          return (
            <Icon
              name={name}
              size={30}
              color={color}
              style={{ marginTop: 15 }}
            />
          );
        },
      })}
      tabBarOptions={{
        style: {
          position: 'absolute',
          backgroundColor: "#fff",
          borderTopColor: "#fff",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          borderBottomLeftRadius:25,
          borderBottomRightRadius:25,
          height: 60,
          bottom:10,
        
        },
        activeTintColor: "#182B78",
        inactiveTintColor: "#4262E9",
      }}
    >
     
      <Tab.Screen name="Mundial" options={{ title: "" }} component={Mundial} />
      <Tab.Screen name="Home" options={{ title: "" }} component={Home} />
      <Tab.Screen
        name="Situation"
        options={{ title: "" }}
        component={Situation}
      />
    </Tab.Navigator>
  );
};

export default Routes;
