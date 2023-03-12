import AsyncStorage from "@react-native-async-storage/async-storage";
import { ITEMS_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { getSequence } from "./getSequence";

export async function addItemInSequence(newItem: number) {
  try {
    const items = await getSequence();

    const itemAlreadyExists = items.filter(
      (item) => item === newItem
    );

    if (itemAlreadyExists.length !== 0) {
      throw new AppError("Esse item já existe!");
    }

    await AsyncStorage.setItem(
      ITEMS_COLLECTION,
      JSON.stringify([...items, newItem])
    );
  } catch (error) {
    throw new AppError("Não foi possível adicionar um novo item!");
  }
}
