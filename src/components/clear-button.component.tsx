/* Component imports */
import MainButton from "./main-button.component";
/* Enum imports */
import { OperatorsEnum } from "../enums/operators.enum";
/* React imports */
import { Dispatch, SetStateAction } from "react";

class ComponentProps {
  equalIsClicked: boolean;
  n1: string;
  n2: string;
  operator: OperatorsEnum;
  operatorIsClicked: boolean;
  result: string;
  setEqualIsClicked: Dispatch<SetStateAction<typeof this.equalIsClicked>>;
  setN1: Dispatch<SetStateAction<typeof this.n1>>;
  setN2: Dispatch<SetStateAction<typeof this.n2>>;
  setOperator: Dispatch<SetStateAction<typeof this.operator>>;
  setOperatorIsClicked: Dispatch<SetStateAction<typeof this.operatorIsClicked>>;
  setResult: Dispatch<SetStateAction<typeof this.result>>;
}

export default function ClearButton(props: ComponentProps) {
  const clearAllVariables = () => {
    props.setEqualIsClicked(false);

    props.setN1("");

    props.setN2("");

    props.setOperator(null);

    props.setOperatorIsClicked(false);

    props.setResult("");
  };

  return (
    <MainButton
      buttonText="Limpar"
      fixedWidth={false}
      onClick={clearAllVariables}
      variant="danger"
    />
  );
}
