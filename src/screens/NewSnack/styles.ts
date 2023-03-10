import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Main = styled.View`
  flex: 1;
  margin-top: -28px;
  border-radius: 20px;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  align-items: center;
  flex-direction: column;
`;

export const ContainerInputRow = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 20px;
`;

export const ContainerInput = styled.View`
  flex: 1;
  width: 100%;
  min-height: 68px;
  max-height: 68px;
  margin-top: 24px;
  gap: 4px;
`;

export const ContainerInputsSelect = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 24px;
  gap: 4px;
  margin-bottom: 60px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.FS2}px;
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const ContainerSelect = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 8px;
`;

export const ContainerButton = styled.View`
  flex: 1;
  width: 100%;
  margin-top: auto;
`;

export const ContainerButtonTwo = styled.View`
  width: 100%;
`;

export const SuccessContainer = styled.View`
  flex: 1;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ImageContainer = styled.Image`
  min-height: 288px;
  min-width: 224px;
  max-height: 288px;
  max-width: 224px;
  margin-bottom: 32px;
`;

export const TitleSuccess = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.FS5}px;
    color: ${theme.COLORS.GREEN_DARK};
  `}
`;

export const TitleFailure = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.FS5}px;
    color: ${theme.COLORS.RED_DARK};
  `}
`;

export const TextSuccess = styled.Text`
  margin-bottom: 40px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.FS3}px;
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const TextBold = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
