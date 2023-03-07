import {
  Container,
  DietName,
  DietStatus,
  Hour,
  Separate,
  StatusTypeProps,
} from "./styles";

interface Props {
  hour: string;
  dietName: string;
  dietStatus: StatusTypeProps;
}

export function Snack({ hour, dietName, dietStatus = "accomplished" }: Props) {
  return (
    <Container>
      <Hour>{hour}</Hour>
      <Separate />
      <DietName>{dietName}</DietName>
      <DietStatus type={dietStatus} />
    </Container>
  );
}
