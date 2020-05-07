import React from "react";
import { View } from "react-native";

import Home from "../pages/home";
import Situation from "../pages/Situation";
import Chart from '../pages//charts'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Routes = () => {
  const icons = {
    Charts: {
      lib: Feather,
      name: "pie-chart",
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
          backgroundColor: "#fff",
          borderTopColor: "rgba(255,255,255,0.6)",
          borderTopColor: "#fff",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          height: 60,
        },
        activeTintColor: "#182B78",
        inactiveTintColor: "#4262E9",
      }}
    >
      <Tab.Screen name="Home" options={{ title: "" }} component={Home} />
      <Tab.Screen name="Charts" options={{ title: "" }} component={Chart} />
      <Tab.Screen
        name="Situation"
        options={{ title: "" }}
        component={Situation}
      />
    </Tab.Navigator>
  );
};

export default Routes;
