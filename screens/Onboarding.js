import React, { Component } from "react";
import {
  ScrollView,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Dimensions,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Block, Text, Button, theme } from "galio-framework";
import { Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const { height, width } = Dimensions.get("screen");

import materialTheme from "../constants/Theme";
import Images from "../constants/Images";

StatusBar.setBackgroundColor("#159BC9");

export default class Onboarding extends Component {
  state = {
    activeSlide: 0,
  };

  changeSlide = (slide) => {
    this.scrollView.scrollTo({ x: slide * width, animated: true });
    this.setState({ activeSlide: slide });
  };

  render() {
    const { navigation } = this.props;
    const { activeSlide } = this.state;

    return (
      <Block flex style={styles.container}>
        <StatusBar setBackgroundColor="#159BC9" />

        {/* Header and `Already Subscribed` title */}
        <View
          style={{
            paddingBottom: 12,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#159BC9",
          }}
        >
          <Block style={{ zIndex: 10, marginTop: 10 }}>
            <Text
              style={{ textAlign: "center", fontWeight: 800 }}
              color="white"
              size={28}
            >
              Already subscribed?{" "}
              <Text
                onPress={() => this.changeSlide(3)}
                style={{ textDecorationLine: "underline" }}
              >
                Log in
              </Text>
            </Text>
          </Block>
        </View>

        {/* Onboarding Slideshow */}
        <ScrollView
          ref={(view) => (this.scrollView = view)}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            const slide = Math.ceil(event.nativeEvent.contentOffset.x / width);
            this.setState({ activeSlide: slide });
          }}
        >
          {/* Onboarding Screen 1 */}
          <Block flex center style={styles.slide}>
            <ImageBackground
              source={{ uri: Images.Onboarding1 }}
              style={{
                height: height,
                width: width,
              }}
            />
          </Block>

          {/* Onboarding Screen 2 */}
          <Block flex center style={styles.slide}>
            <ImageBackground
              source={{ uri: Images.Onboarding2 }}
              style={{
                height: height,
                width: width,
              }}
            />
          </Block>

          {/* Onboarding Screen 3 */}
          <Block flex center style={styles.slide}>
            <ImageBackground
              source={{ uri: Images.Onboarding3 }}
              style={{
                height: height,
                width: width,
              }}
            />
          </Block>
          {/* Onboarding Screen 4 */}
          <Block flex center style={styles.slide}>
            <Block
              flex
              center
              style={{
                width: "90%",
                height: height,
                padding: 0,
                backgroundColor: "white",
                borderRadius: 15,
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  paddingTop: "4%",
                }}
              >
                <Text
                  style={{ marginBottom: 5, fontSize: 24, color: "#159BC9" }}
                >
                  Login
                </Text>

                <View>
                  {/* Starts Form */}
                  <TextInput
                    style={{
                      height: 40,
                      minWidth: "80%",
                      textAlign: "center",
                      borderColor: "#159BC9",
                      borderWidth: 2,
                      borderRadius: 20,
                      marginBottom: 15,
                      fontSize: 18,
                      backgroundColor: "#ffffff",
                      textTransform: "none",
                    }}
                    placeholder="Email"
                    keyboardType="email-address"
                    tabIndex={0}
                    onSubmitEditing={() => {
                      passwordInput.focus();
                    }}
                    blurOnSubmit={false}
                    autoCapitalize="none"
                  />

                  <TextInput
                    ref={(input) => {
                      passwordInput = input;
                    }}
                    style={{
                      height: 40,
                      minWidth: "80%",
                      textAlign: "center",
                      borderWidth: 2,
                      borderRadius: 20,
                      marginBottom: 15,
                      fontSize: 18,
                      borderWidth: 2,
                      borderColor: "#159BC9",
                      backgroundColor: "#ffffff",
                    }}
                    placeholder="Password"
                    secureTextEntry={true}
                    onSubmitEditing={() => {
                      loginButton.focus();
                    }}
                    blurOnSubmit={false}
                    autoCapitalize="none"
                  />

                  <TouchableOpacity
                    ref={(button) => {
                      loginButton = button;
                    }}
                    style={{
                      backgroundColor: "#159BC9",
                      borderRadius: 20,
                      paddingVertical: 10,
                      paddingHorizontal: 50,
                      marginBottom: 20,
                    }}
                    onPress={() => navigation.navigate("Home")}                    
                  >
                    <Text
                      style={{
                        color: "#fff",
                        textAlign: "center",
                        minWidth: "75%",
                        fontSize: 20,
                        fontWeight: 800,
                        margin: 0,
                      }}
                    >
                      LOGIN
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity>
                  <Text
                    onPress={() => navigation.navigate("ForgotPassword")}
                    style={{ color: "#159BC9", marginTop: -10 }}
                  >
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
                {/* Ends Form */}
              </View>
            </Block>
          </Block>
        </ScrollView>

        {/* Footer */}
        <Block style={styles.footer}>
          <Button
            shadowless
            style={styles.footerButton}
            color={materialTheme.COLORS.GREEN_BUTTON_COLOR}
            onPress={() => Linking.openURL("https://actibhealth.com")}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: 800,
                marginTop: 11,
                marginBottom: -4,
                color: "black",
              }}
            >
              START YOUR TRANSFORMATIONAL JOURNEY
            </Text>
            <Text
              style={{
                fontSize: 34,
                marginBottom: 5,
                fontWeight: "bold",
                color: "white",
              }}
            >
              CLICK HERE
            </Text>
          </Button>
          <Block style={styles.navDots}>
            {[0, 1, 2, 3].map((index) => (
              <Icon
                key={index}
                name={activeSlide === index ? "circle" : "circle"}
                size={activeSlide === index ? 11 : 8}
                color={activeSlide === index ? "#159BC9" : "#333"}
                style={{
                  margin: 5,
                }}
                onPress={() => this.changeSlide(index)}
              />
            ))}
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: "#159BC9",
  },
  slide: {
    width: width,
    position: "relative",
  },
  footer: {
    width: width,
    height: 0,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  footerButton: {
    width: width - theme.SIZES.BASE * 7,
    height: theme.SIZES.BASE * 5,
    borderRadius: 15,
    shadowRadius: 0,
    shadowOpacity: 0,
    bottom: 70,
  },
  navDots: {
    height: theme.SIZES.BASE * 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    bottom: 85,
  },
});
