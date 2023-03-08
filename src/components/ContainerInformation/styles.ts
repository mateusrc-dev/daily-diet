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
  flex: 1;
  max-height: ${({ height }) => height};
  min-height: ${({ height }) => height};
  background: ${({ color }) => color};
  border-radius: 8px;
`;

export const Percent = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.FS6}px;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.FS2}px;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.FS5,
}))``;

export const ButtonIcon = styled.TouchableOpacity`
  position: absolute;
  right: 8px;
  top: 8px;
`;
