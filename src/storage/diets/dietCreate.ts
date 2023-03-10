import { DietName } from "@components/Snack/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusTypeProps } from "@screens/Diets";
import { DIETS_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { dietsGetAll } from "./dietsGetAll";

type newDietProps = {
  dietName: string;
  dietStatus: StatusTypeProps;
  hour: string;
  dietDate: string;
  description: string;
};

export async function dietCreate(newDiet: newDietProps) {
  try {
    const Diets = await dietsGetAll();

    const dietAlreadyExists = Diets.filter(
      (diet) =>
        diet.dietName === newDiet.dietDate && diet.dietDate === newDiet.dietDate
    );

    if (dietAlreadyExists.length !== 0) {
      throw new AppError("Essa dieta já existe nessa data!");
    }

    await AsyncStorage.setItem(
      DIETS_COLLECTION,
      JSON.stringify([...Diets, newDiet])
    );
  } catch (error) {
    throw new AppError("Não foi possível criar um novo usuário!");
  }
}
