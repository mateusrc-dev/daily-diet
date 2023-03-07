import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 50px;
  line-height: 130%;
  background: ${({ theme }) => theme.COLORS.GRAY_2};
  border-radius: 6px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size:  ${({ theme }) => theme.FONT_SIZE.FS2};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
