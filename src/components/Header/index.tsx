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
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  type?: "default" | "percentDetails" | "snack";
  color?: string;
  colorIcon?: string;
  title?: string;
  dietName?: string;
  pageReturn?:
    | "detailsSnack"
    | "diets"
    | "editSnack"
    | "resultDiets"
    | "newSnack";
}

export function Header({
  type = "default",
  color = "#E5F0DB",
  colorIcon = "#639339",
  title = "Nova refeição",
  pageReturn = "diets",
  dietName = "miojo",
}: HeaderProps) {
  const navigation = useNavigation();

  function handleReturnPage() {
    pageReturn === "diets" && navigation.navigate("diets");
    pageReturn === "detailsSnack" &&
      navigation.navigate("detailsSnack", { dietName });
    pageReturn === "editSnack" &&
      navigation.navigate("editSnack", { dietName });
    pageReturn === "newSnack" && navigation.navigate("newSnack");
    pageReturn === "resultDiets" && navigation.navigate("resultDiets");
  }

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
          <Percent>90,86%</Percent>
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
