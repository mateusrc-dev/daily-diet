import { ContainerInformation } from "@components/ContainerInformation";
import { Header } from "@components/Header";
import { useFocusEffect } from "@react-navigation/native";
import { StatusTypeProps } from "@screens/Diets";
import { dietsGetAll } from "@storage/diets/dietsGetAll";
import { AppError } from "@utils/AppError";
import { useCallback, useState } from "react";
import { Alert } from "react-native";
import {
  Container,
  ContainerSpace,
  ContainerSpaceRow,
  Main,
  Text,
} from "./styles";

interface DietProps {
  dietName: string;
  dietStatus: StatusTypeProps;
  hour: string;
  dietDate: string;
  description: string;
}

export function ResultDiets() {
  const [diets, setDiets] = useState<DietProps[]>([]);

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

  return (
    <Container>
      <Header type="percentDetails" />
      <Main>
        <Text>Estatísticas gerais</Text>
        <ContainerSpace height={89}>
          <ContainerInformation
            title="22"
            text="melhor sequência de pratos dentro da dieta"
            iconRender={false}
            color={"#EFF0F0"}
            height={89}
          />
        </ContainerSpace>
        <ContainerSpace height={89}>
          <ContainerInformation
            title="109"
            text="refeições registradas"
            iconRender={false}
            color={"#EFF0F0"}
            height={89}
          />
        </ContainerSpace>
        <ContainerSpaceRow height={107}>
          <ContainerSpace height={107}>
            <ContainerInformation
              title="99"
              text="refeições dentro da dieta"
              iconRender={false}
              height={107}
            />
          </ContainerSpace>
          <ContainerSpace height={107}>
            <ContainerInformation
              title="10"
              text="refeições fora da dieta"
              iconRender={false}
              color={"#F4E6E7"}
              height={107}
            />
          </ContainerSpace>
        </ContainerSpaceRow>
      </Main>
    </Container>
  );
}
