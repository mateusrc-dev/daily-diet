import { ContainerInformation } from "@components/ContainerInformation";
import { Header } from "@components/Header";
import { Loading } from "@components/Loading";
import { useFocusEffect } from "@react-navigation/native";
import { StatusTypeProps } from "@screens/Diets";
import { dietsGetAll } from "@storage/diets/dietsGetAll";
import { getSequence } from "@storage/sequence/getSequence";
import { AppError } from "@utils/AppError";
import { useCallback, useState, useEffect } from "react";
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
  const [insideDiet, setInsideDiet] = useState<number>(0);
  const [outsideDiet, setOutsideDiet] = useState<number>(0);
  const [sequence, setSequence] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    function handleResultDiets() {
      setLoading(true);
      for (let i = 0; i < diets.length; i += 1) {
        if (diets[i].dietStatus === "accomplished") {
          setInsideDiet((state) => state + 1);
        } else {
          setOutsideDiet((state) => state + 1);
        }
      }
      setLoading(false);
    }
    handleResultDiets();
  }, [diets]);

  useFocusEffect(
    useCallback(() => {
      async function fetchDiets() {
        try {
          setLoading(true);
          const getDiets = await dietsGetAll();
          setDiets(getDiets);
        } catch (error) {
          if (error instanceof AppError) {
            Alert.alert("Dietas", error.message);
          } else {
            Alert.alert("Dietas", "Não foi possível buscar pelos grupos!");
          }
        } finally {
          setLoading(false);
        }
      }
      fetchDiets();
    }, [])
  );

  useEffect(() => {
    async function handleGetSequenceItems() {
      try {
        setLoading(true);
        const itemsSequence = await getSequence();
        setSequence(itemsSequence);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    handleGetSequenceItems();
  }, [diets]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Header type="percentDetails" />
          <Main>
            <Text>Estatísticas gerais</Text>
            <ContainerSpace height={89}>
              <ContainerInformation
                title={String(Math.max(...sequence))}
                text="melhor sequência de pratos dentro da dieta"
                iconRender={false}
                color={"#EFF0F0"}
                height={89}
              />
            </ContainerSpace>
            <ContainerSpace height={89}>
              <ContainerInformation
                title={String(diets.length)}
                text="refeições registradas"
                iconRender={false}
                color={"#EFF0F0"}
                height={89}
              />
            </ContainerSpace>
            <ContainerSpaceRow height={107}>
              <ContainerSpace height={107}>
                <ContainerInformation
                  title={String(insideDiet)}
                  text="refeições dentro da dieta"
                  iconRender={false}
                  height={107}
                />
              </ContainerSpace>
              <ContainerSpace height={107}>
                <ContainerInformation
                  title={String(outsideDiet)}
                  text="refeições fora da dieta"
                  iconRender={false}
                  color={"#F4E6E7"}
                  height={107}
                />
              </ContainerSpace>
            </ContainerSpaceRow>
          </Main>
        </Container>
      )}
    </>
  );
}
