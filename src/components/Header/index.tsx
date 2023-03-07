import { Avatar, Container, Logo } from "./styles"
import LogoImg from "@assets/logo.png"

export function Header() {
  return (
      <Container>
        <Logo source={LogoImg} />
        <Avatar source={{uri: "https://avatars.githubusercontent.com/u/109779094?v=4"}} />
      </Container>
    )
}