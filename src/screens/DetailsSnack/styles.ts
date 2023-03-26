import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { View } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Main = styled.View`
  flex: 1;
  margin-top: -28px;
  border-radius: 20px;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  flex-direction: column;
`;

export const Text = styled.Text`
  margin-top: 8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.FS3}px;
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const TitleOne = styled.Text`
  margin-top: 40px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  font-size: 20px;
`;

export const TitleTwo = styled.Text`
  margin-top: 24px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.FS2}px;
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const ContainerDietState = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 144px;
  min-height: 34px;
  max-height: 34px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_8};
  border-radius: 1000px;
  margin-top: 24px;
`;

export const TextDietState = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.FS2}px;
    color: ${theme.COLORS.GRAY_1};
  `}
`;

type Props = {
  type: "success" | "failure";
};
export const StateDiet = styled(View)<Props>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, type }) =>
    type === "success" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 1000px;
`;

export const ContainerButton = styled.View`
  flex: 1;
  gap: 10px;
  margin-bottom: 40px;
`;

export const BackgroundModal = styled.View`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  top: 25px;
  left: 0;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.View`
  width: 327px;
  max-height: 192px;
  padding: 24px;
  margin: auto;
  background: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const TextModal = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.FS4}px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  gap: 12px;
`;
