import { ReactNode } from "react";
import { ButtonTypeProps, Container } from "./styles";

interface Props {
  type?: ButtonTypeProps;
  children: ReactNode;
}

export function Button({ type = "dark", children }: Props) {
  return (
    <Container type={type}>{children}</Container>
  );
}
