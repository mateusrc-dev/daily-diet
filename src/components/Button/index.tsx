import { PropsWithChildren } from "react";
import { Container } from "./styles";

export function Button({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}
