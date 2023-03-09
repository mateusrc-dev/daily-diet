import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsSnack } from "@screens/DetailsSnack";
import { Diets } from "@screens/Diets";
import { EditSnack } from "@screens/EditSnack";
import { NewSnack } from "@screens/NewSnack";
import { ResultDiets } from "@screens/ResultDiets";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="diets" component={Diets} />
      <Screen name="editSnack" component={EditSnack} />
      <Screen name="newSnack" component={NewSnack} />
      <Screen name="resultDiets" component={ResultDiets} />
      <Screen name="detailsSnack" component={DetailsSnack} />
    </Navigator>
  );
}
