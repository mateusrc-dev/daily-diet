import { ArrowUpRight } from "phosphor-react-native";
import { View } from "react-native";
import styled from "styled-components/native";

interface Props {
  height: string,
  color: string,
}

export const Container = styled(View)<Props>`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 16px;
  gap: 2px;
  width: 100%;
  height: ${({ height }) => height};
  background: ${({ color }) => color};
  border-radius: 8px;
  margin-top: 32px;
`;

export const Percent = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 32px;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 14px;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.FS5,
  color: theme.COLORS.GREEN_DARK,
}))``;

export const ButtonIcon = styled.TouchableOpacity`
  position: absolute;
  right: 8px;
  top: 8px;
`;
