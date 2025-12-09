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
    return <button disabled>=</button>;
  }

  return <button onClick={updateEqualIsClicked}>=</button>;
}
