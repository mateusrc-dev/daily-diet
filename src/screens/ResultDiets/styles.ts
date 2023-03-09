import styled, { css } from "styled-components/native";
import { View } from "react-native";

export const Container = styled.View`
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
    font-size: ${theme.FONT_SIZE.FS2};
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
    min-height: ${height};
    max-height: ${height};
  `}
  margin-top: 12px;
`;

export const ContainerSpaceRow = styled(View)<Props>`
  flex: 1;
  width: 100%;
  ${({ height }) => css`
    min-height: ${height};
    max-height: ${height};
  `}
  flex-direction: row;
  margin-top: 12px;
  gap: 12px;
`;
