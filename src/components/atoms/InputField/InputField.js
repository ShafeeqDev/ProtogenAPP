import React from "react";
import { Input } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, Pressable } from "react-native";
import styles from "./Styles";
import colors from "../../../theme/colors/colors";
function InputField(props) {
  return (
    <View style={styles.container}>
      <Input
        InputLeftElement={
          <MaterialIcons
            name={props.icon}
            style={{ color: colors.secondary, paddingLeft: wp("3%") }}
            size={wp('4%')}
          />
        }
        variant="rounded"
        placeholder={props.placeholder}
        style={styles.input}
        borderWidth={"1"}
        borderColor={colors.secondary}
        color={colors.secondary}
        placeholderTextColor={colors.secondary}
        type={props.type}
        InputRightElement={
          <Pressable onPress={props.onPress}>
            <MaterialIcons
              name={props.icon2}
              style={{ color: colors.primaryLight, paddingRight: wp("3%") }}
              size={wp('5%')}
             
            />
          </Pressable>
        }
      />
    </View>
  );
}

export default InputField;
