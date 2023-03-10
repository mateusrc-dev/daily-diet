import { Button } from "@components/Button";
import { Header } from "@components/Header";
import {
  Container,
  ContainerDietState,
  Main,
  StateDiet,
  Text,
  TextDietState,
  TitleOne,
  TitleTwo,
  ContainerButtonOne,
  ContainerButtonTwo,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { AppError } from "@utils/AppError";
import { dietsGetDietByNameAndDate } from "@storage/diets/dietsGetDietByNameAndDate";
import { StatusTypeProps } from "@screens/Diets";

type routeParams = {
  dietName: string;
  dietDate: string;
};
interface DietProps {
  dietName: string;
  dietStatus: StatusTypeProps;
  hour: string;
  dietDate: string;
  description: string;
}

export function DetailsSnack() {
  const [snack, setSnack] = useState<DietProps[]>([]);
  const navigation = useNavigation();
  const route = useRoute();
  const { dietName, dietDate } = route.params as routeParams;

  console.log(dietName, dietDate);

  function handleEditSnack(Name: string, Date: string) {
    navigation.navigate("editSnack", { Name, Date });
  }

  useEffect(() => {
    async function fetchDiet() {
      try {
        const snack = {
          Name: dietName,
          Date: dietDate,
        };
        const getDiet = await dietsGetDietByNameAndDate(snack);
        setSnack(getDiet);
      } catch (error) {
        if (error instanceof AppError) {
          Alert.alert("Refeição", error.message);
        } else {
          Alert.alert("Refeição", "Não foi possível buscar pela refeição!");
        }
      }
    }
    fetchDiet();
  }, []);

  return (
    <Container>
      <Header title="Refeição" type="snack" color="#E5F0DB" />
      <Main>
        <TitleOne>{dietName}</TitleOne>
        <Text>{snack.length !== 0 && snack[0].description}</Text>
        <TitleTwo>Data e hora</TitleTwo>
        <Text>
          {snack.length !== 0 && snack[0].dietDate} às{" "}
          {snack.length !== 0 && snack[0].hour}
        </Text>
        <ContainerDietState>
          <StateDiet
            type={
              snack.length !== 0 && snack[0].dietStatus === "accomplished"
                ? "success"
                : "failure"
            }
          />
          <TextDietState>
            {snack.length !== 0 && snack[0].dietStatus === "accomplished"
              ? "dentro da dieta"
              : "fora da dieta"}
          </TextDietState>
        </ContainerDietState>
        <ContainerButtonOne>
          <Button
            icon="pencil"
            title="Editar refeição"
            onPress={() =>
              handleEditSnack(snack[0].dietName, snack[0].dietDate)
            }
          />
        </ContainerButtonOne>
        <ContainerButtonTwo>
          <Button icon="trash" type="light" title="Excluir refeição" />
        </ContainerButtonTwo>
      </Main>
    </Container>
  );
}
