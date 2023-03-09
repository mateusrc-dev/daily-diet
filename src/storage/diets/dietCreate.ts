import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusTypeProps } from "@screens/Diets";
import { DIETS_COLLECTION } from "@storage/storageConfig";
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
    const Diets = await dietsGetAll()

    await AsyncStorage.setItem(DIETS_COLLECTION, JSON.stringify([...Diets, newDiet]))
  } catch (error) {
    throw error;
  }
}
