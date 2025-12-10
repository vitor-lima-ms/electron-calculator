/* Component imports */
import MainButton from "./main-button.component";
/* React imports */
import { Dispatch, SetStateAction } from "react";

class ComponentProps {
  buttonNumber: string;
  n1: string;
  n2: string;
  operatorIsClicked: boolean;
  setN1: Dispatch<SetStateAction<typeof this.n1>>;
  setN2: Dispatch<SetStateAction<typeof this.n2>>;
}

export default function NumberButton(props: ComponentProps) {
  const updateN1 = () => props.setN1(props.n1.concat(props.buttonNumber));

  const updateN2 = () => props.setN2(props.n2.concat(props.buttonNumber));

  if (!props.operatorIsClicked) {
    if (props.buttonNumber === "0" && !props.n1) {
      return (
        <MainButton
          buttonText={props.buttonNumber}
          disabled={true}
          variant="primary"
        />
      );
    }
    return (
      <MainButton
        buttonText={props.buttonNumber}
        onClick={updateN1}
        variant="primary"
      />
    );
  }

  if (props.buttonNumber === "0" && !props.n2) {
    return (
      <MainButton
        buttonText={props.buttonNumber}
        disabled={true}
        variant="primary"
      />
    );
  }
  return (
    <MainButton
      buttonText={props.buttonNumber}
      onClick={updateN2}
      variant="primary"
    />
  );
}
