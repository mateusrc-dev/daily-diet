import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 66px 24px 0px;
`

export const Logo = styled.Image`
  height: 37px;
  width: 82px;
`

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid ${({theme}) => theme.COLORS.GRAY_2};
`