import { useFocusEffect } from "@react-navigation/native";
import { StatusTypeProps } from "@screens/Diets";
import { dietsGetAll } from "@storage/diets/dietsGetAll";
import { useCallback, useEffect, useState } from "react";
import { Alert, Text } from "react-native";
import { AppError } from "../utils/AppError";

interface DietProps {
  dietName: string;
  dietStatus: StatusTypeProps;
  hour: string;
  dietDate: string;
  description: string;
}

export function PercentResult() {
  const [diets, setDiets] = useState<DietProps[]>([]);
  const [insideDiet, setInsideDiet] = useState<number>(0);

  useEffect(() => {
    function handleResultDiets() {
      for (let i = 0; i < diets.length; i += 1) {
        if (diets[i].dietStatus === "accomplished") {
          setInsideDiet((state) => state + 1);
        }
      }
    }
    handleResultDiets();
  }, [diets]);

  useFocusEffect(
    useCallback(() => {
      async function fetchDiets() {
        try {
          const getDiets = await dietsGetAll();
          setDiets(getDiets);
        } catch (error) {
          if (error instanceof AppError) {
            Alert.alert("Dietas", error.message);
          } else {
            Alert.alert("Dietas", "Não foi possível buscar pelos grupos!");
          }
        }
      }
      fetchDiets();
    }, [])
  );

  return <Text>{(insideDiet * 100) / diets.length}%</Text>;
}
