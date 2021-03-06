import React from "react";
// import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";

import { Routes } from "./src/routes";
import theme from "./src/styles/theme";

export default function App() {
  // const [fontsLoaded] = useFonts({
  // fonts name here
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
