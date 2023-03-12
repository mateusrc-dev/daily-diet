import {
  Avatar,
  ButtonIcon,
  ButtonIconSnack,
  Container,
  ContainerAvatar,
  Icon,
  IconSnack,
  Logo,
  Percent,
  PercentContainer,
  SnackContainer,
  Text,
  TextSnack,
} from "./styles";
import LogoImg from "@assets/Logo.png";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useEffect, useState, useCallback } from "react";
import { StatusTypeProps } from "@screens/Diets";
import { dietsGetAll } from "@storage/diets/dietsGetAll";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

interface HeaderProps {
  type?: "default" | "percentDetails" | "snack";
  color?: string;
  colorIcon?: string;
  title?: string;
  dietName?: string;
  dietDate?: string;
  pageReturn?:
    | "detailsSnack"
    | "diets"
    | "editSnack"
    | "resultDiets"
    | "newSnack";
}

interface DietProps {
  dietName: string;
  dietStatus: StatusTypeProps;
  hour: string;
  dietDate: string;
  description: string;
}

export function Header({
  type = "default",
  color = "#E5F0DB",
  colorIcon = "#639339",
  title = "Nova refeição",
  pageReturn = "diets",
  dietName = "miojo",
  dietDate = "12/12/2022",
}: HeaderProps) {
  const navigation = useNavigation();

  function handleReturnPage() {
    pageReturn === "diets" && navigation.navigate("diets");
    pageReturn === "detailsSnack" &&
      navigation.navigate("detailsSnack", { dietName, dietDate });
    pageReturn === "editSnack" &&
      navigation.navigate("editSnack", { Name: dietName, Date: dietDate });
    pageReturn === "newSnack" && navigation.navigate("newSnack");
    pageReturn === "resultDiets" && navigation.navigate("resultDiets");
  }

  const [diets, setDiets] = useState<DietProps[]>([]);
  const [insideDiet, setInsideDiet] = useState<number>(0);

  useEffect(() => {
    function handleResultDiets() {
      for (let i = 0; i < diets.length; i += 1) {
        if (diets[i].dietStatus === "accomplished") {
          setInsideDiet((state) => state + 1);
        }
      }
    }
    handleResultDiets();
  }, [diets]);

  useFocusEffect(
    useCallback(() => {
      async function fetchDiets() {
        try {
          const getDiets = await dietsGetAll();
          setDiets(getDiets);
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

  return (
    <>
      {type === "default" && (
        <Container>
          <Logo source={LogoImg} />
          <ContainerAvatar>
            <Avatar
              source={{
                uri: "https://avatars.githubusercontent.com/u/109779094?v=4",
              }}
            />
          </ContainerAvatar>
        </Container>
      )}
      {type === "percentDetails" && (
        <PercentContainer color={color}>
          <Percent>{(insideDiet * 100) / diets.length}%</Percent>
          <Text>das refeições dentro da dieta</Text>
          <ButtonIcon onPress={handleReturnPage}>
            <Icon color={colorIcon} />
          </ButtonIcon>
        </PercentContainer>
      )}
      {type === "snack" && (
        <SnackContainer color={color}>
          <TextSnack>{title}</TextSnack>
          <ButtonIconSnack onPress={handleReturnPage}>
            <IconSnack />
          </ButtonIconSnack>
        </SnackContainer>
      )}
    </>
  );
}
