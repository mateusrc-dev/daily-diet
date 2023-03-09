import { Diets } from "./src/screens/Diets";
import { ResultDiets } from "@screens/ResultDiets";
import { NewSnack } from "@screens/NewSnack";
import { DetailsSnack } from "@screens/DetailsSnack";
import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { Loading } from "@components/Loading";
import { StatusBar } from "react-native"

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <DetailsSnack /> : <Loading />}
    </ThemeProvider>
  );
}
