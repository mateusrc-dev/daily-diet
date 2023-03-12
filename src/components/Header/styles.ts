import { ArrowLeft } from "phosphor-react-native";
import { View } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px 0px;
`;

export const Logo = styled.Image`
  min-height: 37px;
  min-width: 82px;
  max-height: 37px;
  max-width: 82px;
`;

export const ContainerAvatar = styled.View`
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
  border-radius: 9999px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_1};
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
`;

type Props = {
  color: string
}

export const PercentContainer = styled(View)<Props>`
  width: 100%;
  max-height: 200px;
  min-height: 200px;
  background-color: ${({ color }) => color};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2px;
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

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.FS5,
}))``;

export const ButtonIcon = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: 56px;
`;

export const SnackContainer = styled(View)<Props>`
  width: 100%;
  max-height: 132px;
  min-height: 132px;
  background-color: ${({ color }) => color};
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TextSnack = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.FS4}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const IconSnack = styled(ArrowLeft).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.FS5,
  color: theme.COLORS.GRAY_1,
}))``;

export const ButtonIconSnack = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: 56px;
`;
