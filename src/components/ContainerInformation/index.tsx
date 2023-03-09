import { Container, Percent, Text, ButtonIcon, Icon } from "./styles";

interface Props {
  height?: number;
  color?: string;
  colorIcon?: string;
  title: string;
  text: string;
  iconRender?: boolean;
}

export function ContainerInformation({
  height = 102,
  color = "#E5F0DB",
  colorIcon = "#639339",
  text,
  title,
  iconRender = true,
}: Props) {
  return (
    <Container height={height} color={color}>
      <ButtonIcon>
        {iconRender && <Icon color={colorIcon} />}
      </ButtonIcon>
      <Percent>{title}</Percent>
      <Text>{text}</Text>
    </Container>
  );
}
