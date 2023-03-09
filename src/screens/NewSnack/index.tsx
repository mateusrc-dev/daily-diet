import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { useState } from "react";
import ImageSuccess from "../../assets/Illustration.png";
import ImageFailure from "../../assets/Failure.png";
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

export function NewSnack() {
  const [stateSelect, setStateSelect] = useState<string | null>(null);

  return (
    <>
      {stateSelect === null && (
        <Container>
          <Header type="snack" color="#DDDEDF" />
          <Main>
            <ContainerInput>
              <Title>Nome</Title>
              <Input />
            </ContainerInput>
            <ContainerInput>
              <Title>Descrição</Title>
              <Input />
            </ContainerInput>
            <ContainerInputRow>
              <ContainerInput>
                <Title>Data</Title>
                <Input />
              </ContainerInput>
              <ContainerInput>
                <Title>Hora</Title>
                <Input />
              </ContainerInput>
            </ContainerInputRow>
            <ContainerInputsSelect>
              <Title>Está dentro da dieta?</Title>
              <ContainerSelect>
                <Select
                  onSelect={() => setStateSelect("yes")}
                  children="Sim"
                  type="yes"
                  select={stateSelect === "yes"}
                />
                <Select
                  onSelect={() => setStateSelect("not")}
                  children="Não"
                  type="not"
                  select={stateSelect === "not"}
                />
              </ContainerSelect>
            </ContainerInputsSelect>
            <ContainerButton>
              <Button title="Cadastrar refeição" />
            </ContainerButton>
          </Main>
        </Container>
      )}
      {stateSelect === "yes" && (
        <SuccessContainer>
          <TitleSuccess>Continue assim!</TitleSuccess>
          <TextSuccess>
            Você continua <TextBold>dentro da dieta</TextBold>. Muito bem!
          </TextSuccess>
          <ImageContainer source={ImageSuccess} />
          <Button title="Ir para a página inicial" />
        </SuccessContainer>
      )}
      {stateSelect === "not" && (
        <SuccessContainer>
          <TitleFailure>Que pena!</TitleFailure>
          <TextSuccess>
            Você <TextBold>saiu da dieta</TextBold> dessa vez, mas continue se
            esforçando e não desista!
          </TextSuccess>
          <ImageContainer source={ImageFailure} />
          <Button title="Ir para a página inicial" />
        </SuccessContainer>
      )}
    </>
  );
}
