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

type Props = {
  Name: string;
  Date: string;
};

export async function dietsGetDietByNameAndDate(snack: Props) {
  try {
    const storage = await AsyncStorage.getItem(DIETS_COLLECTION);
    const diets: DietProps[] = storage ? JSON.parse(storage) : [];
    const filterDietsByNameAndDate = diets.filter(
      (diet) => diet.dietName === snack.Name && diet.dietDate === snack.Date
    );

    return filterDietsByNameAndDate;
  } catch (error) {
    throw new AppError("Não foi possível buscar pela refeição!");
  }
}
