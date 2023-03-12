import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { ContainerInformation } from "@components/ContainerInformation";
import { Container, ContainerSpace, Date, Title } from "./styles";
import { Snack } from "@components/Snack";
import { useState, useCallback, useEffect } from "react";
import { Alert, SectionList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { dietsGetAll } from "@storage/diets/dietsGetAll";
import { AppError } from "@utils/AppError";
import groupBy from "lodash/groupBy";

export type StatusTypeProps = "accomplished" | "defaulted" | null;
interface DietProps {
  dietName: string;
  dietStatus: StatusTypeProps;
  hour: string;
  dietDate: string;
  description: string;
}

export function Diets() {
  const [diet, setDiet] = useState<DietProps[]>([]);
  const [groupDietsByDate, setGroupDietsByDate] = useState([]);
  const navigation = useNavigation();
  const [insideDiet, setInsideDiet] = useState<number>(0);

  console.log(insideDiet);

  function handleNewSnack() {
    navigation.navigate("newSnack");
  }

  function handleNavigationDetailsSnack(dietName: string, dietDate: string) {
    navigation.navigate("detailsSnack", { dietName, dietDate });
  }

  useEffect(() => {
    function handleResultDiets() {
      let num = 0;
      for (let i = 0; i < diet.length; i += 1) {
        if (diet[i].dietStatus === "accomplished") {
          num = num + 1;
        }
      }
      setInsideDiet(num)
    }
    handleResultDiets();
  }, [diet]);

  useFocusEffect(
    useCallback(() => {
      async function fetchDiets() {
        try {
          const getDiets = await dietsGetAll();

          setDiet(getDiets);
        } catch (error) {
          if (error instanceof AppError) {
            Alert.alert("Dietas", error.message);
          } else {
            Alert.alert("Dietas", "Não foi possível buscar pelos grupos!");
          }
        }
      }
      fetchDiets();
    }, [])
  );

  useEffect(() => {
    function handleDietsByDate() {
      if (diet.length !== 0) {
        const groupedList = Object.values(
          groupBy(diet, function (d) {
            return d.dietDate;
          })
        );
        var data: any = [];
        groupedList.map((date) => {
          let section = {
            title: date[0].dietDate,
            data: [...date],
          };
          data.push(section);
        });
        setGroupDietsByDate(data);
      }
    }
    handleDietsByDate();
  }, [diet]);

  function renderDiet(item: any) {
    return (
      <Snack
        dietName={item.dietName}
        dietStatus={item.dietStatus}
        hour={item.hour}
        onPress={() =>
          handleNavigationDetailsSnack(item.dietName, item.dietDate)
        }
      />
    );
  }

  return (
    <Container>
      <Header />
      <ContainerSpace>
        <ContainerInformation
          title={String((insideDiet * 100) / diet.length + "%")}
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

      <SectionList
        sections={groupDietsByDate}
        keyExtractor={(item) => String(item.dietName)}
        renderItem={({ item }) => renderDiet(item)}
        renderSectionHeader={({ section: { title } }) => <Date>{title}</Date>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 50 },
          groupDietsByDate.length === 0 && { flex: 1 },
        ]}
        ListEmptyComponent={() => (
          <ListEmpty message="Ainda não tem dietas cadastradas!" />
        )}
      />
    </Container>
  );
}
