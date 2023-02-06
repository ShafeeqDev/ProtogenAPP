import MonitringCard from "../../../../atoms/Card/MoniteringCard/Card";
import React from "react";
import { Text, View, ScrollView, RefreshControl } from "react-native";
import styles from "./Styles";
import { Card } from "@rneui/base";
import CircularProgressbar from "../../../../molecules/CircularProgressBar/CircularProgress";
import { ms } from "react-native-size-matters";
import OverViewCard from "../../../../atoms/Card/OverViewCard/OverViewCard";
import SettingCard from "../../../../atoms/Card/SettingCard/SettingCard";
const Monitering = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ height: "82%" }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      > 
      <SettingCard
          title={"Genset Status"}
          bgcolor ={'red'}
          status={" Off"}
          icon={"power-off"}
        />
      
        <SettingCard title={"Fuel Lid"} status={" Close"} icon={"sliders-h"} />
        <SettingCard
          title={"Battery-status"}
          status={" Connected"}
          icon={"car-battery"}
        />
        <SettingCard
          title={"Door-status"}
          status={" Open"}
          icon={"door-open"}
        />
        <SettingCard
          title={"Temperature"}
          status={" 50 °"}
          icon={"temperature-high"}
        />
      </ScrollView>
    </View>
  );
};

export default Monitering;
