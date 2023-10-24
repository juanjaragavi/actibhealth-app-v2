import React from "react";
import { theme } from "galio-framework";
import CustomDrawerContent from "./Menu";
import { Dimensions } from "react-native";
import { Header, Icon } from "../components";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { materialTheme } from "../constants/";

import HomeScreen from "../screens/Home";
import AbbyScreen from "../screens/Abby";
import RestScreen from "../screens/Rest";
import LogInScreen from "../screens/LogIn";
import LogoutScreen from "../screens/Logout";
import ProfileScreen from "../screens/Profile";
import SettingsScreen from "../screens/Settings";
import ExerciseScreen from "../screens/Exercise";
import ThoughtsScreen from "../screens/Thoughts";
import ContactUsScreen from "../screens/ContactUs";
import MyJourneyScreen from "../screens/MyJourney";
import HydrationScreen from "../screens/Hydration";
import NutrientsScreen from "../screens/Nutrients";
import MyBehaviorScreen from "../screens/MyBehavior";
import OnboardingScreen from "../screens/Onboarding";
import ComponentsScreen from "../screens/Components";
import DailyScheduleScreen from "../screens/DailySchedule";
import ForgotPasswordScreen from "../screens/ForgotPassword";
import KnowledgeCenterScreen from "../screens/KnowledgeCenter";
import TechnicalSupportScreen from "../screens/TechnicalSupport";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AppStack() {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => (
        <CustomDrawerContent {...props} />
      )}
      drawerStyle={{
        backgroundColor: materialTheme.COLORS.PRIMARY,
        width: width * 1,
      }}
      drawerContentOptions={{
        activeTintColor: "white",
        inactiveTintColor: materialTheme.COLORS.WHITE,
        activeBackgroundColor: materialTheme.COLORS.ACTIVE,
        inactiveBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.74,
          paddingHorizontal: 10,
          justifyContent: "center",
          alignContent: "center",
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 16,
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
        name="My Journey"
        component={MyJourneyStack}
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
        name="My Behavior"
        component={MyBehaviorStack}
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
        name="Daily Schedule"
        component={DailyScheduleStack}
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
        name="Abby"
        component={AbbyStack}
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
        name="Rest"
        component={RestStack}
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
        name="Hydration"
        component={HydrationStack}
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
        name="Exercise"
        component={ExerciseStack}
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
        name="Nutrients"
        component={NutrientsStack}
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
        name="Thoughts"
        component={ThoughtsStack}
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
        name="Knowledge Center"
        component={KnowledgeCenterStack}
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
        name="My Profile"
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
        name="Contact Us"
        component={ContactUsStack}
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
        name="Technical Support"
        component={TechnicalSupportStack}
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
        name="Logout"
        component={LogoutStack}
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
    </Drawer.Navigator>
  );
}

function AbbyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Abby"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Abby"
        component={AbbyScreen}
        options={{
          header: ({ scene }) => <Header white transparent scene={scene} />,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function ContactUsStack() {
  return (
    <Stack.Navigator
      initialRouteName="ContactUs"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="ContactUs"
        component={ContactUsScreen}
        options={{
          header: ({ scene }) => <Header white transparent scene={scene} />,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function DailyScheduleStack() {
  return (
    <Stack.Navigator
      initialRouteName="DailySchedule"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="DailySchedule"
        component={DailyScheduleScreen}
        options={{
          header: ({ scene }) => <Header white transparent scene={scene} />,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function HydrationStack() {
  return (
    <Stack.Navigator
      initialRouteName="Hydration"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Hydration"
        component={HydrationScreen}
        options={{
          header: ({ scene }) => <Header white transparent scene={scene} />,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function ExerciseStack() {
  return (
    <Stack.Navigator
      initialRouteName="Exercise"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Exercise"
        component={ExerciseScreen}
        options={{
          header: ({ scene }) => <Header white transparent scene={scene} />,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function KnowledgeCenterStack() {
  return (
    <Stack.Navigator
      initialRouteName="KnowledgeCenter"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="KnowledgeCenter"
        component={KnowledgeCenterScreen}
        options={{
          header: ({ scene }) => <Header white transparent scene={scene} />,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function LogoutStack() {
  return (
    <Stack.Navigator
      initialRouteName="Logout"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          header: ({ scene }) => <Header white transparent scene={scene} />,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function MyBehaviorStack() {
  return (
    <Stack.Navigator
      initialRouteName="MyBehavior"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="MyBehavior"
        component={MyBehaviorScreen}
        options={{
          header: ({ scene }) => <Header white transparent scene={scene} />,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function MyJourneyStack() {
  return (
    <Stack.Navigator
      initialRouteName="MyJourney"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="MyJourney"
        component={MyJourneyScreen}
        options={{
          header: ({ scene }) => <Header white transparent scene={scene} />,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function NutrientsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Nutrients"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Nutrients"
        component={NutrientsScreen}
        options={{
          header: ({ scene }) => <Header white transparent scene={scene} />,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function RestStack() {
  return (
    <Stack.Navigator
      initialRouteName="Rest"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Rest"
        component={RestScreen}
        options={{
          header: ({ scene }) => <Header white transparent scene={scene} />,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function TechnicalSupportStack() {
  return (
    <Stack.Navigator
      initialRouteName="TechnicalSupport"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="TechnicalSupport"
        component={TechnicalSupportScreen}
        options={{
          header: ({ scene }) => <Header white transparent scene={scene} />,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function ThoughtsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Thoughts"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Thoughts"
        component={ThoughtsScreen}
        options={{
          header: ({ scene }) => <Header white transparent scene={scene} />,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

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

function LogInStack() {
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

function ComponentsStack() {
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

export default function OnboardingStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      headerTransparent: true,
      headerTitle: false,
    }}
    >
      <Stack.Screen name="App" component={AppStack} />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Rest"
        component={RestScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Abby"
        component={AbbyScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="LogIn"
        component={LogInScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Logout"
        component={LogoutScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Exercise"
        component={ExerciseScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Thoughts"
        component={ThoughtsScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Nutrients"
        component={NutrientsScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Hydration"
        component={HydrationScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUsScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="MyJourney"
        component={MyJourneyScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="MyBehavior"
        component={MyBehaviorScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="DailySchedule"
        component={DailyScheduleScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="KnowledgeCenter"
        component={KnowledgeCenterScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="TechnicalSupport"
        component={TechnicalSupportScreen}
        option={{
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
