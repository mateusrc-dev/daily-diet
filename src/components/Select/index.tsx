import { TouchableOpacityProps } from "react-native";
import {
  Container,
  ContainerSelected,
  SelectProps,
  Status,
  Title,
  TypeProps,
} from "./styles";

type Props = TouchableOpacityProps & {
  type?: TypeProps;
  select?: SelectProps;
  children: string;
  onSelect: () => void;
};

export function Select({ type = "yes", select = false, children, onSelect, ...rest }: Props) {
  return (
    <>
      {select ? (
        <ContainerSelected type={type} select={select} onPress={onSelect} {...rest}>
          <Status select={select} type={type} />
          <Title>{children}</Title>
        </ContainerSelected>
      ) : (
        <Container type={type} select={select} onPress={onSelect} {...rest}>
          <Status select={select} type={type} />
          <Title>{children}</Title>
        </Container>
      )}
    </>
  );
}
