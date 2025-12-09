/* Enum imports */
import { OperatorsEnum } from "../enums/operators.enum";

interface IComponentProps {
  n1: string;
  n2: string;
  operator: OperatorsEnum;
  result: string;
}

export default function Visor(props: IComponentProps) {
  if (!props.result) {
    return (
      <>
        <p>
          {props.n1} {props.operator} {props.n2}
        </p>
      </>
    );
  }

  return (
    <>
      <p>
        {props.n1} {props.operator} {props.n2} = {props.result}
      </p>
    </>
  );
}
