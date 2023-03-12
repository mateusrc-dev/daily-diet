import AsyncStorage from "@react-native-async-storage/async-storage";
import { ITEMS_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { getSequence } from "./getSequence";

type newItem = number

export async function addItemInSequence(newItem: newItem) {
  try {
    const items = await getSequence();

    const itemAlreadyExists = items.filter(
      (item) => item === newItem
    );

    if (itemAlreadyExists.length !== 0) {
      return;
    }

    await AsyncStorage.setItem(
      ITEMS_COLLECTION,
      JSON.stringify([...items, newItem])
    );
  } catch (error) {
    throw new AppError("Não foi possível adicionar um novo item!");
  }
}
