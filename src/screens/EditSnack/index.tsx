import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { useState, useCallback } from "react";
import {
  Container,
  Main,
  ContainerInput,
  Title,
  ContainerSelect,
  ContainerInputRow,
  ContainerInputsSelect,
  ContainerButton,
} from "./styles";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { dietsGetDietByNameAndDate } from "@storage/diets/dietsGetDietByNameAndDate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";
import { StatusTypeProps } from "@screens/Diets";
import { updateDiet } from "@storage/diets/dietUpdate";

type routeParams = {
  Name: string;
  Date: string;
};
interface DietProps {
  dietName: string;
  dietStatus: StatusTypeProps;
  hour: string;
  dietDate: string;
  description: string;
}

export function EditSnack() {
  const route = useRoute();
  const [snack, setSnack] = useState<DietProps[]>([]);
  const [description, setDescription] = useState<string | null>("");
  const [name, setName] = useState<string | null>("");
  const [date, setDate] = useState<string | null>("");
  const [hour, setHour] = useState<string | null>("");
  const [stateSelect, setStateSelect] = useState<string | null>(null);
  const { Name, Date } = route.params as routeParams;
  const navigation = useNavigation();

  async function handleUpdateDiet() {
    try {
      const snack = {
        dietName: Name,
        dietDate: Date,
      };
      const dietUpdate = {
        dietName: name,
        dietStatus: stateSelect,
        hour: hour,
        dietDate: date,
        description: description,
      };
      await updateDiet(snack, dietUpdate);
      Alert.alert("Sucesso", "Atualização executada com sucesso!")
      navigation.navigate("diets");
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Atualizar", error.message);
      } else {
        Alert.alert("Atualizar", "Não foi possível atualizar a dieta!");
      }
    }
  }

  useFocusEffect(
    useCallback(() => {
      async function fetchDiet() {
        try {
          const snack = {
            Name,
            Date,
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
    }, [])
  );

  useFocusEffect(
    useCallback(() => {
      setStateSelect(snack.length !== 0 ? snack[0].dietStatus : null);
      setName(snack.length !== 0 ? snack[0].dietName : null);
      setDescription(snack.length !== 0 ? snack[0].description : null);
      setHour(snack.length !== 0 ? snack[0].hour : null);
      setDate(snack.length !== 0 ? snack[0].dietDate : null);
    }, [snack])
  );

  return (
    <Container>
      <Header
        pageReturn="detailsSnack"
        dietName={name !== null ? name : ""}
        type="snack"
        color="#DDDEDF"
        title="Editar refeição"
      />
      <Main>
        <ContainerInput>
          <Title>Nome</Title>
          <Input value={name !== null ? name : ""} onChangeText={setName} />
        </ContainerInput>
        <ContainerInput>
          <Title>Descrição</Title>
          <Input
            value={description !== null ? description : ""}
            onChangeText={setDescription}
          />
        </ContainerInput>
        <ContainerInputRow>
          <ContainerInput>
            <Title>Data</Title>
            <Input value={date !== null ? date : ""} onChangeText={setDate} />
          </ContainerInput>
          <ContainerInput>
            <Title>Hora</Title>
            <Input value={hour !== null ? hour : ""} onChangeText={setHour} />
          </ContainerInput>
        </ContainerInputRow>
        <ContainerInputsSelect>
          <Title>Está dentro da dieta?</Title>
          <ContainerSelect>
            <Select
              onSelect={() => setStateSelect("accomplished")}
              children="Sim"
              type="yes"
              select={stateSelect === "accomplished"}
            />
            <Select
              onSelect={() => setStateSelect("defaulted")}
              children="Não"
              type="not"
              select={stateSelect === "defaulted"}
            />
          </ContainerSelect>
        </ContainerInputsSelect>
        <ContainerButton>
          <Button title="Salvar alterações" onPress={handleUpdateDiet} />
        </ContainerButton>
      </Main>
    </Container>
  );
}
