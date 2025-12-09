/* Enum imports */
import { OperatorsEnum } from "../enums/operators.enum";
/* React imports */
import { Dispatch, SetStateAction } from "react";

class ComponentProps {
  n1: string;
  operator: OperatorsEnum;
  operatorIsClicked: boolean;
  setOperator: Dispatch<SetStateAction<OperatorsEnum>>;
  setOperatorIsClicked: Dispatch<SetStateAction<typeof this.operatorIsClicked>>;
}

export default function OperatorButton(props: ComponentProps) {
  const updateOperatorAndOperatorIsClicked = () => {
    props.setOperator(props.operator);

    props.setOperatorIsClicked(!props.operatorIsClicked);
  };

  return (
    <button
      disabled={props.operatorIsClicked || !props.n1}
      onClick={updateOperatorAndOperatorIsClicked}
    >
      {props.operator}
    </button>
  );
}
