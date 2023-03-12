import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  max-height: 200px;
  min-height: 200px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
}))``;
