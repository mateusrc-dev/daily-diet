import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

export type TypeProps = "yes" | "not" | null;
export type SelectProps = true | false;

type Props = {
  type: TypeProps;
  select: SelectProps;
};

export const ContainerSelected = styled(TouchableOpacity)<Props>`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 8px;
  height: 50px;
  border-radius: 6px;
  background-color: ${({ theme, type }) =>
    type === "yes" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  border-width: ${({ select }) => (select === true ? 1 : 0)}px;
  border-style: solid;
  border-color: ${({ type, theme }) =>
    type === "yes" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 8px;
  height: 50px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_8};

  border-width: ${({ select }) => (select === true ? 1 : 0)}px;
  border-style: solid;
  border-color: ${({ type, theme }) =>
    type === "yes" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.FS2}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const Status = styled(View)<Props>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, type }) =>
    type === "yes" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 9999px;
`;
