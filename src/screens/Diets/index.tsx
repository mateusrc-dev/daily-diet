import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { ResultDiet } from "@components/ResultDiet";
import { Container, Title } from "./styles";
import { Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

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
    </Container>
  );
}
