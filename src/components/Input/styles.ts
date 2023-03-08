import styled from "styled-components/native";
import { TextInput } from "react-native"

export const InputContainer = styled(TextInput)`
  padding: 14px;
  width: 100%;
  height: 48px;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_6};
  border-radius: 6px;
  background-color: transparent;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.FS3}px;
  color: ${({theme}) => theme.COLORS.GRAY_1};
`