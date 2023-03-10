import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusTypeProps } from "@screens/Diets";
import { DIETS_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";

type DietProps = {
  dietName: string;
  dietStatus: StatusTypeProps;
  hour: string;
  dietDate: string;
  description: string;
};

export async function dietsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(DIETS_COLLECTION);
    const diets: DietProps[] = storage ? JSON.parse(storage) : [];

    return diets;
  } catch (error) {
    throw new AppError("Não foi possível buscar pelos usuários!");
  }
}
