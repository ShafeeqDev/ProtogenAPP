import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./customDrawer";
import { Image, StyleSheet } from "react-native";
import NotificationIcon from "../components/molecules/NotificationIcon/NotificationIcon";
const HeaderBackground = require("./../../assets/images/ProfileBackGround.jpg");
import {
  horizontalScale as hs,
  verticalScale as vs,
  moderateScale as ms,
} from "../theme/Dimensions/Dimensions";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../theme/colors/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Profile from "../screens/Profile/Profile";
import BottomNavigationProtogen from "./bottomNavigationProtogen";
import Home from "../screens/Protogen/Home/Home";
import OverView from "../screens/Protogen/Home/OverView";
const Drawer = createDrawerNavigator();
const FontSize = ms(15);
const IconSize = ms(18);
const DrawerContent = () => {
  const [first ,setFirst] = React.useState(false)
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      initialRouteName="Protogen"
      screenOptions={{
        drawerActiveBackgroundColor: colors.primary,
        drawerInactiveTintColor: colors.secondary,
        drawerActiveTintColor: colors.secondary,
        drawerLabelStyle: { marginLeft: ms(-10), fontSize: FontSize },
        drawerStyle: { width: wp("72%") },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
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
              style={styles.image}
              source={HeaderBackground}
              resizeMode="cover"
            />
          ),
        }}
        name="Protogen"
        component={first === false ? OverView : BottomNavigationProtogen }
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons
              name={"person"}
              size={IconSize}
              color={colors.secondary}
            />
          ),
          headerTitle: "Profile",
          headerTitleAlign: "center",
          headerTintColor: colors.secondary,
          headerTransparent: true,
        }}
        name="Profile"
        component={Profile}
      />
    </Drawer.Navigator>
  );
};

export default DrawerContent;
const styles = StyleSheet.create({
  image: { width: wp("100%"), flex: 1 },
});
