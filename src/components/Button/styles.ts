import styled from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";

export type ButtonTypeProps = "dark" | "light";

type ButtonProps = {
  type: ButtonTypeProps;
};

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 50px;
  background: ${({ theme, type }) =>
    type === "dark" ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, type }) =>
    type === "dark" ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_1};
  border-radius: 6px;
`;

export const TitleButton = styled(Text)<ButtonProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.FS2}px;
  color: ${({ theme, type }) =>
    type === "dark" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
`;


