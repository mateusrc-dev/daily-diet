import { Container, Percent, Text, ButtonIcon, Icon } from "./styles";

interface Props {
  height?: string,
  color?: string,
  colorIcon?: string,
}

export function ContainerInformation({ height = "102px", color = "#E5F0DB", colorIcon = "#639339"}: Props) {
  return (
    <Container height={height} color={color}>
      <ButtonIcon>
        <Icon color={colorIcon} />
      </ButtonIcon>
      <Percent>90,86%</Percent>
      <Text>das refeições dentro da dieta</Text>
    </Container>
  );
}