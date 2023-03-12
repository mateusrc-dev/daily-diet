import AsyncStorage from "@react-native-async-storage/async-storage";
import { ITEMS_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";

export async function getSequence() {
  try {
    const storage = await AsyncStorage.getItem(ITEMS_COLLECTION);
    const items: number[] = storage ? JSON.parse(storage) : [];

    return items;
  } catch (error) {
    throw new AppError("Não foi possível buscar pelos itens!");
  }
}
