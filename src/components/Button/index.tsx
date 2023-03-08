import { TouchableOpacityProps } from "react-native";
import { ButtonTypeProps, Container, TitleButton } from "./styles";
import { Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

type Props = TouchableOpacityProps & {
  type?: ButtonTypeProps;
  title: string;
};

export function Button({ type = "dark", title, ...rest }: Props) {
  const { COLORS } = useTheme();
  return (
    <Container {...rest} type={type}>
      <Plus color={COLORS.GRAY_6} />
      <TitleButton type={type}>{title}</TitleButton>
    </Container>
  );
}
