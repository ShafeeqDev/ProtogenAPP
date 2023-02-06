import { View } from "native-base";
import React from "react";
import SettingCard from "../../../../atoms/Card/SettingCard/SettingCard";
function OverViewPage() {
  return (
    <View style={{ padding: 10 }}>
      <SettingCard
        title={"Tank Capacity"}
        status={"1000 Ltr"}
        icon={"tablet-alt"}
      />
      <SettingCard
        title={"Available Fuel"}
        status={"500 Ltr"}
        icon={"database"}
      />
      <SettingCard
        title={"Fuel Consumption"}
        status={"500 Ltr"}
        icon={"burn"}
      />
    </View>
  );
}

export default OverViewPage;
