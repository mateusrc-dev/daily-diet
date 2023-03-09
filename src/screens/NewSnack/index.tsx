import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { useState } from "react";
import ImageSuccess from "../../assets/Illustration.png";
import ImageFailure from "../../assets/Failure.png";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Main,
  ContainerInput,
  Title,
  ContainerSelect,
  ContainerInputRow,
  ContainerInputsSelect,
  ContainerButton,
  SuccessContainer,
  ImageContainer,
  TitleSuccess,
  TextSuccess,
  TitleFailure,
  TextBold,
} from "./styles";
import { dietCreate } from "@storage/diets/dietCreate";

export function NewSnack() {
  const [stateSelect, setStateSelect] = useState<
    "accomplished" | "defaulted" | null
  >(null);
  const [changePage, setChangePage] = useState<
    "accomplished" | "defaulted" | null
  >(null);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [hour, setHour] = useState<string>("");
  const navigation = useNavigation();

  async function handleNewDiet() {
    const newDiet = {
      dietName: name,
      dietStatus: stateSelect,
      hour: hour,
      dietDate: date,
      description: description,
    };
    if (
      name.length !== 0 &&
      description.length !== 0 &&
      date.length !== 0 &&
      hour.length !== 0 &&
      stateSelect !== null
    ) {
      try {
        await dietCreate(newDiet);
        setChangePage(stateSelect);
      } catch (error) {
        alert(error);
      }
    } else {
      alert(
        "Preencha todos os campos e selecione se a refeição está dentro da dieta ou não!"
      );
    }
  }

  function handleReturnPage() {
    navigation.navigate("diets");
  }

  return (
    <>
      {changePage === null && (
        <Container>
          <Header type="snack" color="#DDDEDF" />
          <Main>
            <ContainerInput>
              <Title>Nome</Title>
              <Input onChangeText={setName} />
            </ContainerInput>
            <ContainerInput>
              <Title>Descrição</Title>
              <Input onChangeText={setDescription} />
            </ContainerInput>
            <ContainerInputRow>
              <ContainerInput>
                <Title>Data</Title>
                <Input onChangeText={setDate} />
              </ContainerInput>
              <ContainerInput>
                <Title>Hora</Title>
                <Input onChangeText={setHour} />
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
              <Button onPress={handleNewDiet} title="Cadastrar refeição" />
            </ContainerButton>
          </Main>
        </Container>
      )}
      {changePage === "accomplished" && (
        <SuccessContainer>
          <TitleSuccess>Continue assim!</TitleSuccess>
          <TextSuccess>
            Você continua <TextBold>dentro da dieta</TextBold>. Muito bem!
          </TextSuccess>
          <ImageContainer source={ImageSuccess} />
          <Button title="Ir para a página inicial" onPress={handleReturnPage} />
        </SuccessContainer>
      )}
      {changePage === "defaulted" && (
        <SuccessContainer>
          <TitleFailure>Que pena!</TitleFailure>
          <TextSuccess>
            Você <TextBold>saiu da dieta</TextBold> dessa vez, mas continue se
            esforçando e não desista!
          </TextSuccess>
          <ImageContainer source={ImageFailure} />
          <Button title="Ir para a página inicial" onPress={handleReturnPage} />
        </SuccessContainer>
      )}
    </>
  );
}
