import { Container, Percent, Text, ButtonIcon, Icon } from "./styles";

interface Props {
  height?: string,
  color?: string,
}

export function ContainerInformation({ height = "102px", color = "#E5F0DB"}: Props) {
  return (
    <Container height={height} color={color}>
      <ButtonIcon>
        <Icon />
      </ButtonIcon>
      <Percent>90,86%</Percent>
      <Text>das refeições dentro da dieta</Text>
    </Container>
  );
}