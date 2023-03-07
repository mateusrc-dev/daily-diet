import {
  Container,
  ContainerSelected,
  SelectProps,
  Status,
  Title,
  TypeProps,
} from "./styles";

type Props = {
  type?: TypeProps;
  select?: SelectProps;
  children: string;
};

export function Select({ type = "yes", select = false, children }: Props) {
  return (
    <>
      {select ? (
        <ContainerSelected type={type} select={select}>
          <Status select={select} type={type} />
          <Title>{children}</Title>
        </ContainerSelected>
      ) : (
        <Container type={type} select={select}>
          <Status select={select} type={type} />
          <Title>{children}</Title>
        </Container>
      )}
    </>
  );
}
