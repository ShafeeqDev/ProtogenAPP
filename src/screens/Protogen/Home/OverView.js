import { Card } from "@rneui/base";
import { Divider, View } from "native-base";
import React from "react";
import { Pressable, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
function OverView({ navigation }) {
  return (
    <>
      <Card containerStyle={{ borderRadius: 20 }}>
        <Pressable onPress={() => navigation.navigate("BottomNavigation")}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Fuel Monitoring System 1
            </Text>
          </View>

          <Divider />
          <View>
            <View
              style={{
                paddingTop: 5,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16 }}>Genset Status</Text>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 40,
                }}
              >
                <Ionicons name="md-power-sharp" size={30} />
              </View>
            </View>

            <View
              style={{
                //   paddingVertical: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16 }}>Device Status</Text>
              <View
                style={{
                  // paddingHorizontal: 10,
                  flexDirection: "row",
                  // justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text>Connected </Text>
                <Octicons name="dot-fill" size={30} color={"green"} />
              </View>
            </View>
            <View
              style={{
                //   paddingVertical: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16 }}>Device Location</Text>
              <View
                style={{
                  // paddingHorizontal: 10,
                  flexDirection: "row",
                  // justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text>DHA PHASE 8 </Text>
                {/* <Octicons name="dot-fill" size={30} color={"red"} /> */}
              </View>
            </View>
          </View>
        </Pressable>
      </Card>
      <Card containerStyle={{ borderRadius: 20 }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Fuel Monitoring System
          </Text>
        </View>

        <Divider />
        <View>
          <View
            style={{
              paddingTop: 5,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16 }}>Genset Status</Text>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 40,
              }}
            >
              <Ionicons name="md-power-sharp" size={30} />
            </View>
          </View>

          <View
            style={{
              //   paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16 }}>Device Status</Text>
            <View
              style={{
                // paddingHorizontal: 10,
                flexDirection: "row",
                // justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>Disconnect </Text>
              <Octicons name="dot-fill" size={30} color={"red"} />
            </View>
          </View>
          <View
            style={{
              //   paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16 }}>Device Location</Text>
            <View
              style={{
                // paddingHorizontal: 10,
                flexDirection: "row",
                // justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>DHA PHASE 8 </Text>
              {/* <Octicons name="dot-fill" size={30} color={"red"} /> */}
            </View>
          </View>
        </View>
      </Card>
      <Card containerStyle={{ borderRadius: 20 }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Fuel Monitoring System
          </Text>
        </View>

        <Divider />
        <View>
          <View
            style={{
              paddingTop: 5,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16 }}>Genset Status</Text>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 40,
              }}
            >
              <Ionicons name="md-power-sharp" size={30} />
            </View>
          </View>

          <View
            style={{
              //   paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16 }}>Device Status</Text>
            <View
              style={{
                // paddingHorizontal: 10,
                flexDirection: "row",
                // justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>Disconnect </Text>
              <Octicons name="dot-fill" size={30} color={"red"} />
            </View>
          </View>
          <View
            style={{
              //   paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16 }}>Device Location</Text>
            <View
              style={{
                // paddingHorizontal: 10,
                flexDirection: "row",
                // justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>DHA PHASE 8 </Text>
              {/* <Octicons name="dot-fill" size={30} color={"red"} /> */}
            </View>
          </View>
        </View>
      </Card>
      <Card containerStyle={{ borderRadius: 20 }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Fuel Monitoring System
          </Text>
        </View>

        <Divider />
        <View>
          <View
            style={{
              paddingTop: 5,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16 }}>Genset Status</Text>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 40,
              }}
            >
              <Ionicons name="md-power-sharp" size={30} />
            </View>
          </View>

          <View
            style={{
              //   paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16 }}>Device Status</Text>
            <View
              style={{
                // paddingHorizontal: 10,
                flexDirection: "row",
                // justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>Disconnect </Text>
              <Octicons name="dot-fill" size={30} color={"red"} />
            </View>
          </View>
          <View
            style={{
              //   paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16 }}>Device Location</Text>
            <View
              style={{
                // paddingHorizontal: 10,
                flexDirection: "row",
                // justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>DHA PHASE 8 </Text>
              {/* <Octicons name="dot-fill" size={30} color={"red"} /> */}
            </View>
          </View>
        </View>
      </Card>
    </>
  );
}

export default OverView;
