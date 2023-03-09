import styled from "styled-components/native";

export const Container = styled.View`
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
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.FS2};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const ContainerSelect = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 8px;
`;

export const ContainerButton = styled.View`
  width: 100%;
  margin-bottom: 40px;
`

export const SuccessContainer = styled.View`
   flex: 1;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  align-items: center;
  flex-direction: column;
`

export const ImageContainer = styled.Image`
  min-height: 288px;
  min-width: 224px;
  max-height: 288px;
  max-width: 224px;
`;
