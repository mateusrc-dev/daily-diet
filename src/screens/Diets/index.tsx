import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { ContainerInformation } from "@components/ContainerInformation";
import { Container, Date, Title, TitleButton } from "./styles";
import { Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Snack } from "@components/Snack";
import { Select } from "@components/Select";

export function Diets() {
  const theme = useTheme();

  return (
    <Container>
      <Header />
      <ContainerInformation />
      <Title>Refeições</Title>
      <Button type="light">
        <Plus color={theme.COLORS.WHITE} size={18} />{" "}
        <TitleButton type="light">Nova refeição</TitleButton>
      </Button>
      <Date>12.08.22</Date>
      <Snack dietName="Miojo" dietStatus="accomplished" hour="18:00" />
      <Select select={false} type="not">Não</Select>
    </Container>
  );
}
