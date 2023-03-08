import { ContainerInformation } from "@components/ContainerInformation";
import { Header } from "@components/Header";
import {
  Container,
  ContainerSpace,
  ContainerSpaceRow,
  Main,
  Text,
} from "./styles";

export function ResultDiets() {
  return (
    <Container>
      <Header type="percentDetails" />
      <Main>
        <Text>Estatísticas gerais</Text>
        <ContainerSpace>
          <ContainerInformation
            title="22"
            text="melhor sequência de pratos dentro da dieta"
            iconRender={false}
            color={"#EFF0F0"}
            height="89px"
          />
        </ContainerSpace>
        <ContainerSpace>
          <ContainerInformation
            title="109"
            text="refeições registradas"
            iconRender={false}
            color={"#EFF0F0"}
            height="89px"
          />
        </ContainerSpace>
        <ContainerSpaceRow>
          <ContainerInformation
            title="99"
            text="refeições dentro da dieta"
            iconRender={false}
            height="107px"
          />
          <ContainerInformation
            title="10"
            text="refeições fora da dieta"
            iconRender={false}
            color={"#F4E6E7"}
            height="107px"
          />
        </ContainerSpaceRow>
      </Main>
    </Container>
  );
}
