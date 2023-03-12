import AsyncStorage from "@react-native-async-storage/async-storage";
import { COUNT_SEQUENCE } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { addItemInSequence } from "./addItemInSequence";
import { getCountSequence } from "./getCountSequence";
import { getSequence } from "./getSequence";

type Num = number;

export async function changeCountSequence(num: Num) {
  try {
    const allCount = await getCountSequence();
    const allSequence = await getSequence();

    if (num === 1) {
      const newCount = num + allCount;
      if (Math.max(...allSequence) < newCount) {
        await addItemInSequence(newCount);
        await AsyncStorage.setItem(COUNT_SEQUENCE, JSON.stringify(newCount));
      } else {
        await AsyncStorage.setItem(COUNT_SEQUENCE, JSON.stringify(newCount));
      }
    } else {
      await addItemInSequence(allCount);
      await AsyncStorage.setItem(COUNT_SEQUENCE, JSON.stringify(0));
    }
  } catch (error) {
    throw new AppError("Não foi possível modificar a contagem da sequência!");
  }
}
