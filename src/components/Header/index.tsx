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

interface HeaderProps {
  type?: "default" | "percentDetails" | "snack";
  color?: string;
  colorIcon?: string;
  title?: string
}

export function Header({
  type = "default",
  color = "#E5F0DB",
  colorIcon = "#639339",
  title = "Nova refeição"
}: HeaderProps) {
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
          <ButtonIcon>
            <Icon color={colorIcon} />
          </ButtonIcon>
        </PercentContainer>
      )}
      {type === "snack" && (
        <SnackContainer color={color}>
          <TextSnack>{title}</TextSnack>
          <ButtonIconSnack>
            <IconSnack />
          </ButtonIconSnack>
        </SnackContainer>
      )}
    </>
  );
}
