import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.FS3}px;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  margin-bottom: 8px;
  margin-top: 40px;
`;

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.FS4}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  margin-top: 32px; 
`;

export const ContainerSpace = styled.View`
  margin-top: 32px;
`
