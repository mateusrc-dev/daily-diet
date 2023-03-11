import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusTypeProps } from "@screens/Diets";
import { DIETS_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { dietCreate } from "./dietCreate";
import { dietRemove } from "./dietRemove";
import { dietsGetAll } from "./dietsGetAll";

type DietProps = {
  dietName: string;
  dietStatus: StatusTypeProps;
  hour: string;
  dietDate: string;
  description: string;
};

type Props = {
  dietName: string | null;
  dietDate: string | null;
};

type updateDietProps = {
  dietName: string | null;
  dietStatus: string | null;
  hour: string | null;
  dietDate: string | null;
  description: string | null;
};

export async function updateDiet(snack: Props, dietUpdate: updateDietProps) {
  try {
    await dietRemove(snack)
    await dietCreate(dietUpdate)

    /*await AsyncStorage.setItem(
      DIETS_COLLECTION,
      JSON.stringify([...removeDietsByName, dietUpdate])
    );*/
  } catch (error) {
    throw new AppError("Não foi possível atualizar a refeição!");
  }
}
