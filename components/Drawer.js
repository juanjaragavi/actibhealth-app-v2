import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Block, Text, theme } from "galio-framework";

import Icon from "./Icon";
import materialTheme from "../constants/Theme";

const proScreens = [
  "Woman",
  "Man",
  "Kids",
  "New Collection",
  "Sign In",
  "Sign Up",
];

class DrawerItem extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props;

    switch (title) {
      case "Home":
        return (
          <Icon
            size={16}
            name="home"
            family="entypo"
            color={focused ? "white" : materialTheme.COLORS.PRIMARY}
          />
        );
      case "My Journey":
        return (
          <Icon
            size={16}
            name="bar-graph"
            family="entypo"
            color={focused ? "white" : materialTheme.COLORS.PRIMARY}
          />
        );
      case "My Behavior":
        return (
          <Icon
            size={16}
            name="emoji-happy"
            family="entypo"
            color={focused ? "white" : materialTheme.COLORS.PRIMARY}
          />
        );
      case "Daily Schedule":
        return (
          <Icon
            size={16}
            name="calendar"
            family="entypo"
            color={focused ? "white" : materialTheme.COLORS.PRIMARY}
          />
        );
      case "Abby":
        return (
          <Icon
            size={16}
            name="user"
            family="entypo"
            color={focused ? "white" : materialTheme.COLORS.PRIMARY}
          />
        );
      case "Rest":
        return (
          <Icon
            size={16}
            name="moon"
            family="entypo"
            color={focused ? "white" : materialTheme.COLORS.PRIMARY}
          />
        );
      case "Hydration":
        return (
          <Icon
            size={16}
            name="drop"
            family="entypo"
            color={focused ? "white" : materialTheme.COLORS.PRIMARY}
          />
        );
      case "Exercise":
        return (
          <Icon
            size={16}
            name="stopwatch"
            family="entypo"
            color={focused ? "white" : materialTheme.COLORS.PRIMARY}
          />
        );
      case "Nutrients":
        return (
          <Icon
            size={16}
            name="leaf"
            family="entypo"
            color={focused ? "white" : materialTheme.COLORS.PRIMARY}
          />
        );
      case "Thoughts":
        return (
          <Icon
            size={16}
            name="light-bulb"
            family="entypo"
            color={focused ? "white" : materialTheme.COLORS.PRIMARY}
          />
        );
      case "Knowledge Center":
        return (
          <Icon
            size={16}
            name="open-book"
            family="entypo"
            color={focused ? "white" : materialTheme.COLORS.PRIMARY}
          />
        );
      case "My Profile":
        return (
          <Icon
            size={16}
            name="user"
            family="entypo"
            color={focused ? "white" : materialTheme.COLORS.PRIMARY}
          />
        );
      case "Contact Us":
        return (
          <Icon
            size={16}
            name="help"
            family="entypo"
            color={focused ? "white" : materialTheme.COLORS.PRIMARY}
          />
        );
      case "Technical Support":
        return (
          <Icon
            size={16}
            name="phone"
            family="entypo"
            color={focused ? "white" : materialTheme.COLORS.PRIMARY}
          />
        );
      case "Logout":
        return (
          <Icon
            size={16}
            name="log-out"
            family="entypo"
            color={focused ? "white" : materialTheme.COLORS.PRIMARY}
          />
        );
      default:
        return null;
    }
  };

  renderLabel = () => {
    const { title } = this.props;

    if (proScreens.includes(title)) {
      return (
        <Block middle style={styles.pro}>
          <Text size={12} color="white">
            PRO
          </Text>
        </Block>
      );
    }

    return null;
  };

  render() {
    const { focused, title, navigation } = this.props;
    const proScreen = proScreens.includes(title);
    return (
      <TouchableOpacity
        style={{ height: 55 }}
        onPress={() => {
          navigation.navigate(title);
        }}
      >
        <Block
          flex
          row
          style={[
            styles.defaultStyle,
            focused ? [styles.activeStyle, styles.shadow] : null,
          ]}
        >
          <Block middle flex={0.1} style={{ marginRight: 28 }}>
            {this.renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text
              size={16}
              color={
                focused
                  ? "white"
                  : proScreen
                  ? materialTheme.COLORS.PRIMARY
                  : "black"
              }
            >
              {title}
            </Text>
            {this.renderLabel()}
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

export default DrawerItem;

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  activeStyle: {
    backgroundColor: materialTheme.COLORS.ACTIVE,
    borderRadius: 10,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginLeft: 8,
    borderRadius: 2,
    height: 16,
    width: 36,
  },
});
