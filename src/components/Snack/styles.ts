import { View } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 14px 16px 14px 12px;
  gap: 12px;
  width: 100%;
  height: 49px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
`;

export const Hour = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-style: normal;
  font-weight: 700;
  font-size: ${({ theme }) => theme.FONT_SIZE.FS1};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const Separate = styled.View`
  width: 0px;
  height: 14px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
`;

export const DietName = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.FS3};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export type StatusTypeProps = "accomplished" | "defaulted";

type DietStatusProps = {
  type: StatusTypeProps;
}

export const DietStatus = styled(View)<DietStatusProps>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: absolute;
  right: 16px;
  background-color: ${({ theme, type }) =>
    type === "accomplished" ? theme.COLORS.RED_MID : theme.COLORS.GREEN_MID};
`;
