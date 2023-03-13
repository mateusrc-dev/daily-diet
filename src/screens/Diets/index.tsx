import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { ContainerInformation } from "@components/ContainerInformation";
import { Container, ContainerSpace, Date, Gradient, Title } from "./styles";
import { Snack } from "@components/Snack";
import { useState, useCallback, useEffect } from "react";
import { Alert, SectionList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { dietsGetAll } from "@storage/diets/dietsGetAll";
import { AppError } from "@utils/AppError";
import groupBy from "lodash/groupBy";
import { Loading } from "@components/Loading";

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
  const [loading, setLoading] = useState<boolean>(false);

  function handleNewSnack() {
    navigation.navigate("newSnack");
  }

  function handleNavigationDetailsSnack(dietName: string, dietDate: string) {
    navigation.navigate("detailsSnack", { dietName, dietDate });
  }

  useEffect(() => {
    async function handleResultDiets() {
      setLoading(true);
      let num = 0;
      for (let i = 0; i < diet.length; i += 1) {
        if (diet[i].dietStatus === "accomplished") {
          num = num + 1;
        }
      }
      setInsideDiet(num);
      setLoading(false);
    }
    handleResultDiets();
  }, [diet]);

  useFocusEffect(
    useCallback(() => {
      async function fetchDiets() {
        try {
          setLoading(true);
          const getDiets = await dietsGetAll();

          setDiet(getDiets);
        } catch (error) {
          if (error instanceof AppError) {
            Alert.alert("Dietas", error.message);
          } else {
            Alert.alert("Dietas", "Não foi possível buscar pelos grupos!");
          }
        } finally {
          setLoading(false);
        }
      }
      fetchDiets();
    }, [])
  );

  useEffect(() => {
    function handleDietsByDate() {
      setLoading(true);
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
      setLoading(false);
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
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Header />
          <ContainerSpace>
            <ContainerInformation
              title={
                String(
                  Number((insideDiet * 100) / diet.length).toFixed(2)
                ).replace(".", ",") + "%"
              }
              text="das refeições dentro da dieta"
              color={
                Number((insideDiet * 100) / diet.length) >= 50
                  ? "#E5F0DB"
                  : "#F4E6E7"
              }
              colorIcon={
                Number((insideDiet * 100) / diet.length) >= 50
                  ? "#639339"
                  : "#BF3B44"
              }
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
            renderSectionHeader={({ section: { title } }) => (
              <Date>{title}</Date>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              { paddingBottom: 100 },
              groupDietsByDate.length === 0 && { flex: 1 },
            ]}
            ListEmptyComponent={() => (
              <ListEmpty message="Ainda não tem dietas cadastradas!" />
            )}
          />
          <Gradient colors={["transparent", "#fafafa"]} />
        </Container>
      )}
    </>
  );
}
