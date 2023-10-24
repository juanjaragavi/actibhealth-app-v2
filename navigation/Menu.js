import React from "react";
import { TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";
import { Block } from "galio-framework";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Drawer as DrawerCustomItem } from "../components/";
import { Images } from "../constants/";

function CustomDrawerContent({
  drawerPosition,
  navigation,
  profile,
  focused,
  state,
  ...rest
}) {
  const insets = useSafeAreaInsets();
  const screens = [
    "Home",
    "My Journey",
    "My Behavior",
    "Daily Schedule",
    "Abby",
    "Rest",
    "Hydration",
    "Exercise",
    "Nutrients",
    "Thoughts",
    "Knowledge Center",
    "My Profile",
    "Contact Us",
    "Technical Support",
    "Logout",
  ];

  return (
    <Block
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <Block style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={{ uri: Images.LogoAB2 }} style={styles.logo} />
        </TouchableOpacity>
      </Block>
      <Block flex style={styles.drawerContainer}>
        <ScrollView
          contentContainerStyle={[
            {
              paddingTop: insets.top * 0.2,
              paddingLeft: drawerPosition === "left" ? insets.left : 0,
              paddingRight: drawerPosition === "right" ? insets.right : 0,
            },
          ]}
          showsVerticalScrollIndicator={false}
        >
          {screens.map((item, index) => {
            return (
              <DrawerCustomItem
                title={item}
                key={index}
                navigation={navigation}
                focused={state.index === index ? true : false}
              />
            );
          })}
        </ScrollView>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    backgroundColor: "#159BC9",
    paddingVertical: 5,
    marginTop: 35,
    paddingHorizontal: 38,
    justifyContent: "center",
  },
  logo: {
    marginBottom: 0,
    padding: 0,
    height: 55,
    width: 195,
  },
  drawerContainer: {
    marginTop: 5,
    paddingHorizontal: 5,
  },
});

export default CustomDrawerContent;
