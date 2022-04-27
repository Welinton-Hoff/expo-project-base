import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { InitialPage } from "../screens/InitialPage";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  const screenOptions = { headerShown: false };

  return (
    <Navigator screenOptions={screenOptions} initialRouteName="InitialPage">
      <Screen name="InitialPage" component={InitialPage} />
    </Navigator>
  );
}
