import styled, { css } from "styled-components/native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Main = styled.View`
  flex: 1;
  margin-top: -32px;
  border-radius: 20px;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.FS2}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-top: 33px;
  margin-bottom: 23px;
`;

type Props = {
  height: number;
};

export const ContainerSpace = styled(View)<Props>`
  flex: 1;
  width: 100%;
  ${({ height }) => css`
    min-height: ${height}px;
    max-height: ${height}px;
  `}
  margin-top: 12px;
`;

export const ContainerSpaceRow = styled(View)<Props>`
  flex: 1;
  ${({ height }) => css`
    min-height: ${height}px;
    max-height: ${height}px;
  `}
  flex-direction: row;
  gap: 12px;
`;
