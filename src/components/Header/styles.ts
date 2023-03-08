import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 66px 0px 0px;
`

export const Logo = styled.Image`
  min-height: 37px;
  min-width: 82px;
  max-height: 37px;
  max-width: 82px;
`

export const ContainerAvatar = styled.View`
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
  border-radius: 9999px;
  border: 2px solid ${({theme}) => theme.COLORS.GRAY_1};
  overflow: hidden;
  align-items: center;
  justify-content: center;
`

export const Avatar = styled.Image`
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
`