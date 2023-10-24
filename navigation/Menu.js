import React from "react";
import { TouchableWithoutFeedback, ScrollView, StyleSheet, Image } from "react-native";
import { Block } from "galio-framework";
import { useSafeArea } from "react-native-safe-area-context";

import { Drawer as DrawerCustomItem } from '../components/';
import { Images } from "../constants/";


function CustomDrawerContent({
  drawerPosition,
  navigation,
  profile,
  focused,
  state,
  ...rest
}) {
  const insets = useSafeArea();
  const screens = [
    "Home",
    "Profile",
    "Settings",
    "Components"
  ];

  return (
    <Block
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <Block flex={0.25} style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Home")}
        >
          <Block style={styles.profile}>
            <Image source={{ uri: Images.LogoAB2 }} style={styles.avatar} />
          </Block>
        </TouchableWithoutFeedback>
      </Block>
      <Block flex style={{ marginTop: 10, paddingLeft: 7, paddingRight: 14 }}>
        <ScrollView
          contentContainerStyle={[
            {
              paddingTop: insets.top * 0.4,
              paddingLeft: drawerPosition === "left" ? insets.left : 0,
              paddingRight: drawerPosition === "right" ? insets.right : 0
            }
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
  },
  header: {
    backgroundColor: '#159BC9',
    paddingHorizontal: 28,
    justifyContent: 'center',
  },
  profile: {
    margin: 0,
  },
  avatar: {
    height: 65,
    width: 230,
  },
  seller: {
    marginRight: 16,
  }
});

export default CustomDrawerContent;
