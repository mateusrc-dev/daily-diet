import { Avatar, Container, ContainerAvatar, Logo } from "./styles";
import LogoImg from "@assets/Logo.png";

export function Header() {
  return (
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
  );
}
