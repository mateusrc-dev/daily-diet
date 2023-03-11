import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusTypeProps } from "@screens/Diets";
import { DIETS_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { dietsGetAll } from "./dietsGetAll";

type newDietProps = {
  dietName: string | null;
  dietStatus: string | null;
  hour: string | null;
  dietDate: string | null;
  description: string | null;
};

export async function dietCreate(newDiet: newDietProps) {
  try {
    const Diets = await dietsGetAll();

    const dietAlreadyExists = Diets.filter(
      (diet) => diet.dietName === newDiet.dietName
    );

    if (dietAlreadyExists.length !== 0) {
      throw new AppError("Essa dieta já existe!");
    }

    await AsyncStorage.setItem(
      DIETS_COLLECTION,
      JSON.stringify([...Diets, newDiet].reverse())
    );
  } catch (error) {
    throw new AppError("Não foi possível criar uma nova dieta!");
  }
}
