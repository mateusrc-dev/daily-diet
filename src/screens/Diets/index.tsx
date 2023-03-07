import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { ResultDiet } from "@components/ResultDiet";
import { Container, Date, Title } from "./styles";
import { Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Snack } from "@components/Snack";

export function Diets() {
  const theme = useTheme()

  return (
    <Container>
      <Header />
      <ResultDiet />
      <Title>Refeições</Title>
      <Button>
        <Plus color={theme.COLORS.WHITE} size={18} /> Nova refeição
      </Button>
      <Date>12.08.22</Date>
      <Snack dietName="Miojo" dietStatus="accomplished" hour="18:00" />
    </Container>
  );
}
