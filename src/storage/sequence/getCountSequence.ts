import AsyncStorage from "@react-native-async-storage/async-storage";
import { COUNT_SEQUENCE } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";

type count = number

export async function getCountSequence() {
  try {
    const storage = await AsyncStorage.getItem(COUNT_SEQUENCE);
    const count: count = storage ? JSON.parse(storage) : 0;

    return count;
  } catch (error) {
    throw new AppError("Não foi possível buscar pela contagem!");
  }
}
