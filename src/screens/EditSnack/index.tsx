import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { useState } from "react";
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
import { useRoute } from "@react-navigation/native"

type routeParams = {
  dietName: string
}

export function EditSnack() {
  const route = useRoute()
  const { dietName } = route.params as routeParams
  const [stateSelect, setStateSelect] = useState<string | null>(null);

  return (
    <Container>
      <Header
        pageReturn="detailsSnack"
        dietName={dietName}
        type="snack"
        color="#DDDEDF"
        title="Editar refeição"
      />
      <Main>
        <ContainerInput>
          <Title>Nome</Title>
          <Input value={dietName} />
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
          <Button title="Salvar alterações" />
        </ContainerButton>
      </Main>
    </Container>
  );
}
