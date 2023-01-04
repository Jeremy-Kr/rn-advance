import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import useDarkMode from "../hooks/useDarkMode";
import Movies from "../screen/Movies";
import My from "../screen/My";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const { theme } = useDarkMode();

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: theme.background0,
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.background0,
        },
        tabBarActiveTintColor: theme.brand50,
        headerStyle: { backgroundColor: theme.brand50 },
        headerTintColor: theme.reverseColor,
      }}
    >
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="My" component={My} />
    </Tab.Navigator>
  );
};

export default Tabs;
