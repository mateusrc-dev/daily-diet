import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-size: 16px;
  line-height: 1.3;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
