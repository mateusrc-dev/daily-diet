import AsyncStorage from "@react-native-async-storage/async-storage";
import { DIETS_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { dietsGetAll } from "./dietsGetAll";

type Props = {
  dietName: string | null;
  dietDate: string | null;
};

export async function dietRemove(snack: Props) {
  try {
    const storage = await dietsGetAll();
    const removeDietsByNameAndDate = storage.filter(
      (diet) => diet.dietName !== snack.dietName
    );

    await AsyncStorage.setItem(
      DIETS_COLLECTION,
      JSON.stringify([...removeDietsByNameAndDate])
    );
  } catch (error) {
    throw new AppError("Não foi possível buscar pela refeição!");
  }
}
