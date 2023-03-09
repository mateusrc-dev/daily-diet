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

export function DetailsSnack() {
  return (
    <Container>
      <Header title="Refeição" type="snack" color="#E5F0DB" />
      <Main>
        <TitleOne>Sanduíche</TitleOne>
        <Text>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </Text>
        <TitleTwo>Data e hora</TitleTwo>
        <Text>12/08/2022 às 16:00</Text>
        <ContainerDietState>
          <StateDiet type="success" />
          <TextDietState>dentro da dieta</TextDietState>
        </ContainerDietState>
        <ContainerButtonOne>
          <Button icon="pencil" title="Editar refeição" />
        </ContainerButtonOne>
        <ContainerButtonTwo>
          <Button icon="trash" type="light" title="Excluir refeição" />
        </ContainerButtonTwo>
      </Main>
    </Container>
  );
}
