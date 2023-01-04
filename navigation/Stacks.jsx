import styled from "@emotion/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text } from "react-native";
import Detail from "../components/movies/Detail";
import useDarkMode from "../hooks/useDarkMode";

const Stack = createNativeStackNavigator();

const Stacks = ({ navigation: { goBack } }) => {
  const { theme } = useDarkMode();
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: theme.background0,
        },
        tabBarActiveTintColor: theme.brand50,
        headerStyle: { backgroundColor: theme.brand50 },
        headerTintColor: theme.reverseColor,
        headerTitleAlign: "left",
        headerTintColor: theme.reverseColor,
        headerLeft: () => (
          <TouchableOpacity onPress={() => goBack()}>
            <GoBackText>Go Back</GoBackText>
          </TouchableOpacity>
        ),
      }}
      sceneContainerStyle={{
        backgroundColor: theme.background0,
      }}
    >
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

const GoBackText = styled.Text`
  color: ${({ theme }) => theme.brand100};
`;

export default Stacks;
