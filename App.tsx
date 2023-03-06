// import { StatusBar } from 'expo-status-bar';
import { Diets } from "./src/screens/Diets";
import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Diets />
    </ThemeProvider>
  );
}
