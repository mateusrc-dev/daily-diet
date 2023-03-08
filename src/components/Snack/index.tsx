import {
  Container,
  DietName,
  DietStatus,
  Hour,
  Separate,
  StatusTypeProps,
} from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  hour: string;
  dietName: string;
  dietStatus: StatusTypeProps;
}

export function Snack({ hour, dietName, dietStatus = "accomplished", ...rest }: Props) {
  return (
    <Container {...rest}>
      <Hour>{hour}</Hour>
      <Separate />
      <DietName>{dietName}</DietName>
      <DietStatus type={dietStatus} />
    </Container>
  );
}
