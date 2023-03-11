import { Container, Percent, Text, ButtonIcon, Icon } from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { PercentResult } from "@components/percentResult";
import { useState, useEffect, useCallback } from "react";
import { Alert } from "react-native";
import { StatusTypeProps } from "@screens/Diets";
import { AppError } from "@utils/AppError";
import { dietsGetAll } from "@storage/diets/dietsGetAll";

interface Props {
  height?: number;
  color?: string;
  colorIcon?: string;
  title?: string;
  text: string;
  iconRender?: boolean;
  percent?: boolean;
}

export function ContainerInformation({
  height = 102,
  color = "#E5F0DB",
  colorIcon = "#639339",
  text,
  title = "Hello world!",
  iconRender = true,
  percent = false,
}: Props) {
  const navigation = useNavigation();

  function handleReturnPageResultDiets() {
    navigation.navigate("resultDiets");
  }

  interface DietProps {
    dietName: string;
    dietStatus: StatusTypeProps;
    hour: string;
    dietDate: string;
    description: string;
  }

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

  useEffect(() => {
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
  }, []);

  return (
    <Container height={height} color={color}>
      <ButtonIcon onPress={handleReturnPageResultDiets}>
        {iconRender && <Icon color={colorIcon} />}
      </ButtonIcon>
      <Percent>{percent ? (insideDiet * 100) / diets.length + "%" : title}</Percent>
      <Text>{text}</Text>
    </Container>
  );
}
