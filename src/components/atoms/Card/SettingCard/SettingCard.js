import { Card } from "@rneui/themed";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Pressable, Text, View } from "react-native";
import colors from "../../../../theme/colors/colors";
import { Divider } from "native-base";
import styles from "./styles";
import BottomSheet from "../../../molecules/ActionSheet/BottomSheet";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { ms } from "react-native-size-matters";
function SettingCard(props) {
  console.log('++++++++++++++++++',props.bgcolor)
  return (
    <Card containerStyle={styles.card}>
      <View>
        <View style={styles.cardTitleView}>
          <Text style={styles.cardTitle}>{props.title}</Text>
        </View>
        <Divider />
        <View style={styles.container}>
          {props.thresh === true ? (
            <>
              <Text style={styles.text}>{props.status}</Text>
              <View style={{ width: 200 }}>
                <BottomSheet />
              </View>
            </>
          ) : props.btn === true ? (
            <View style={{ flexDirection: "row" }}>
              <Pressable style={{ backgroundColor: colors.primary }}>
                <Text style={{ paddingHorizontal: 10, fontWeight: "bold" }}>
                  ARM
                </Text>
              </Pressable>
              <Pressable>
                <Text style={{ paddingHorizontal: 10, fontWeight: "bold" }}>
                  DISARM
                </Text>
              </Pressable>
            </View>
          ) : (
            <Text style={styles.text}>{props.status}</Text>
          )}

          <View style={[styles.avatar,{backgroundColor:props.bgcolor === undefined ? colors.primary : props.bgcolor}]}>
          <FontAwesome5
            name={props.icon}
            color={props.bgcolor === undefined ? colors.secondary : 'white'}
            size={ms(20)}
          />
          </View>
        </View>
      </View>
    </Card>
  );
}

export default SettingCard;
