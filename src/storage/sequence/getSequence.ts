import AsyncStorage from "@react-native-async-storage/async-storage";
import { ITEMS_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";

type items = number

export async function getSequence() {
  try {
    const storage = await AsyncStorage.getItem(ITEMS_COLLECTION);
    const items: items[] = storage ? JSON.parse(storage) : [];

    return items;
  } catch (error) {
    throw new AppError("Não foi possível buscar pelos itens!");
  }
}
