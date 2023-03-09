import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { ContainerInformation } from "@components/ContainerInformation";
import { Container, ContainerSpace, Date, Title } from "./styles";
import { Snack } from "@components/Snack";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { useNavigation } from "@react-navigation/native";

export type StatusTypeProps = "accomplished" | "defaulted";
interface DietProps {
  dietName: string;
  dietStatus: StatusTypeProps;
  hour: string;
  dietDate: string;
  description: string;
}

export function Diets() {
  const [diet, setDiet] = useState<DietProps[]>([
    {
      dietName: "Nissin",
      dietStatus: "accomplished",
      hour: "14:00",
      dietDate: "12.02.2023",
      description:
        "Comida muito boa e saudável que vai aumentar o seu tempo de vida",
    },
    {
      dietName: "Mini Pizza",
      dietStatus: "accomplished",
      hour: "15:00",
      dietDate: "12.02.2023",
      description:
        "Comida muito boa e saudável que vai aumentar o seu tempo de vida",
    },
    {
      dietName: "Coxinha",
      dietStatus: "accomplished",
      hour: "16:00",
      dietDate: "12.02.2023",
      description:
        "Comida muito boa e saudável que vai aumentar o seu tempo de vida",
    },
  ]);
  const navigation = useNavigation();

  function handleNewSnack() {
    navigation.navigate("newSnack");
  }

  function handleNavigationDetailsSnack(dietName: string) {
    navigation.navigate("detailsSnack", { dietName });
  }

  return (
    <Container>
      <Header />
      <ContainerSpace>
        <ContainerInformation
          title="90,86%"
          text="das refeições dentro da dieta"
        />
      </ContainerSpace>
      <Title>Refeições</Title>
      <Button
        type="dark"
        title="Nova refeição"
        icon="plus"
        onPress={handleNewSnack}
      />
      <Date>12.02.2023</Date>
      <FlatList
        data={diet}
        keyExtractor={(item) => item.dietName}
        renderItem={({ item }) => (
          <Snack
            dietName={item.dietDate}
            dietStatus={item.dietStatus}
            hour={item.hour}
            onPress={() => handleNavigationDetailsSnack(item.dietName)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={diet.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Você ainda não adicionou nenhuma dieta!" />
        )}
      />
    </Container>
  );
}
