import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Auth/LogIn/Login";
import SignUp from "../screens/Auth/SignUp/SignUp";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import DrawerContent from "./DrawerContant";
import BottomNavigationProtogen from "./bottomNavigationProtogen";
import NotificationIcon from "../components/molecules/NotificationIcon/NotificationIcon";
const HeaderBackground = require("./../../assets/images/ProfileBackGround.jpg");
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import colors from "../theme/colors/colors";
import { ms } from "react-native-size-matters";
const Stack = createNativeStackNavigator();
const IconSize = ms(18);
function Auth() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={SignUp}
      />
    </Stack.Navigator>
  );
}

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerContent"
          component={DrawerContent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigationProtogen}
          options={{
            headerStyle: {
              // height: ms(75),
            },
            drawerIcon: ({ focused }) => (
              <MaterialIcons
                name={"backup-table"}
                size={IconSize}
                color={focused ? colors.secondary : colors.secondary}
              />
            ),
            headerTitle: "Protogen",
            headerTitleAlign: "center",
            headerTintColor: colors.secondary,
            headerTitleStyle: {
              fontSize: hp("2%"),
              fontWeight: "bold",
            },
            headerRight: (colors) => <NotificationIcon />,
            headerBackground: () => (
              <Image
                style={{ width: wp("100%"), flex: 1 }}
                source={HeaderBackground}
                resizeMode="cover"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
