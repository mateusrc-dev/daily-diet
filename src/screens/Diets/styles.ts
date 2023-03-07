import styled from "styled-components/native";
import { Text } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.FS3};
  align-items: center;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  margin-bottom: 8px;
  margin-top: 40px;
`;

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.FS4};
  line-height: 130%;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export type ButtonTypeProps = "dark" | "light";

type ButtonProps = {
  type: ButtonTypeProps;
};

export const TitleButton = styled(Text)<ButtonProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.FS2};
  color: ${({ theme, type }) =>
    type === "dark" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
`;
