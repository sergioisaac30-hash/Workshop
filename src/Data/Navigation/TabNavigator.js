import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GameListScreen from "../screens/GameListScreen";
import AddGameScreen from "../screens/AddGameScreen";
import GamingNewsScreen from "../screens/GamingNewsScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Games" component={GameListScreen} />
      <Tab.Screen name="AddGame" component={AddGameScreen} />
      <Tab.Screen name="News" component={GamingNewsScreen} />
    </Tab.Navigator>
  );
}