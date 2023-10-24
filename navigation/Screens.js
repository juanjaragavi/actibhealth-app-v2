import { Dimensions } from "react-native";
import { theme } from "galio-framework";
import { Header, Icon } from "../components";
import { Images, materialTheme } from "../constants/";
import ComponentsScreen from "../screens/Components";
import CustomDrawerContent from "./Menu";
import HomeScreen from "../screens/Home";
import OnboardingScreen from "../screens/Onboarding";
import ProScreen from "../screens/Pro";
import ProfileScreen from "../screens/Profile";
import React from "react";
import SettingsScreen from "../screens/Settings";
import ForgotPasswordScreen from "../screens/ForgotPassword";
import LogInScreen from "../screens/LogIn";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const profile = {
  avatar: Images.Profile,
  name: "Rachel Brown",
  type: "Seller",
  plan: "Pro",
  rating: 4.8,
};

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: ({ scene }) => <Header white transparent scene={scene} />,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: ({ scene }) => <Header white transparent scene={scene} />,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          header: ({ scene }) => <Header white transparent scene={scene} />,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

import { TouchableOpacity } from "react-native";

function ForgotPasswordStack() {
  return (
    <Stack.Navigator
      initialRouteName="ForgotPassword"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={({ navigation }) => ({
          headerTitle: "Back to Log in",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                style={{ marginLeft: 15 }}
                name="chevron-left"
                family="feather"
                size={theme.SIZES.BASE + 5}
                color={theme.COLORS.BLACK}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

function LogInStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="LogIn"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="LogIn"
        component={LogInScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Log in" scene={scene} navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function ComponentsStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Components"
        component={ComponentsScreen}
        options={{
          header: ({ scene }) => <Header white transparent scene={scene} />,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => (
        <CustomDrawerContent {...props} profile={profile} />
      )}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintColor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: materialTheme.COLORS.ACTIVE,
        inactiveBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.74,
          paddingHorizontal: 12,
          // paddingVertical: 4,
          justifyContent: "center",
          alignContent: "center",
          // alignItems: 'center',
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          fontWeight: "normal",
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="shop"
              family="GalioExtra"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
              style={{ marginLeft: 4, marginRight: 4 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Woman"
        component={HomeStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="md-woman"
              family="ionicon"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
              style={{ marginLeft: 4, marginRight: 4 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Man"
        component={ProScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="man"
              family="entypo"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Kids"
        component={ProScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="baby"
              family="GalioExtra"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="New Collection"
        component={ProScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="grid-on"
              family="material"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="circle-10"
              family="GalioExtra"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="gears"
              family="font-awesome"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
              style={{ marginRight: -3 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Components"
        component={ComponentsStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="toggle"
              family="ionicon"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
              style={{ marginRight: 2, marginLeft: 2 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Sign In"
        component={LogInStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="ios-log-in"
              family="ionicon"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Sign Up"
        component={ProScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="md-person-add"
              family="ionicon"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
      <Stack.Screen name="Profile" component={ProfileStack} />
      <Stack.Screen name="LogIn" component={LogInStack} />
      <Stack.Screen name="Settings" component={SettingsStack} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordStack} />
    </Stack.Navigator>
  );
}
