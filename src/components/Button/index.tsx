import { TouchableOpacityProps } from "react-native";
import { ButtonTypeProps, Container, TitleButton } from "./styles";
import { Plus } from "phosphor-react-native";
import { PencilSimpleLine } from "phosphor-react-native";
import { Trash } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

export type IconTypeProps = "null" | "plus" | "pencil" | "trash";

type Props = TouchableOpacityProps & {
  type?: ButtonTypeProps;
  title: string;
  icon?: IconTypeProps;
};

export function Button({
  type = "dark",
  title,
  icon = "null",
  ...rest
}: Props) {
  const { COLORS } = useTheme();
  return (
    <Container {...rest} type={type}>
      {icon === "plus" && (
        <Plus
          color={type === "light" ? COLORS.GRAY_1 : COLORS.GRAY_6}
          size={18}
        />
      )}
      {icon === "pencil" && (
        <PencilSimpleLine
          color={type === "light" ? COLORS.GRAY_1 : COLORS.GRAY_6}
          size={18}
        />
      )}
      {icon === "trash" && (
        <Trash
          color={type === "light" ? COLORS.GRAY_1 : COLORS.GRAY_6}
          size={18}
        />
      )}
      {icon === "null" && null}
      <TitleButton type={type}>{title}</TitleButton>
    </Container>
  );
}
