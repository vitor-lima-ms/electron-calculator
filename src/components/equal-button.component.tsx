/* Component imports */
import MainButton from "./main-button.component";
/* React imports */
import { Dispatch, SetStateAction } from "react";

class ComponentProps {
  equalIsClicked: boolean;
  n2: string;
  result: string;
  setEqualIsClicked: Dispatch<SetStateAction<typeof this.equalIsClicked>>;
}

export default function EqualButton(props: ComponentProps) {
  const updateEqualIsClicked = () => props.setEqualIsClicked(true);

  if (props.result || !props.n2) {
    return (
      <MainButton buttonText="=" disabled fixedWidth variant="secondary" />
    );
  }

  return (
    <MainButton
      buttonText="="
      fixedWidth
      onClick={updateEqualIsClicked}
      variant="secondary"
    />
  );
}
