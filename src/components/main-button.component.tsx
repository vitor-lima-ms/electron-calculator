/* Bootstrap imports */
import Button from "react-bootstrap/Button";
import { Variant } from "react-bootstrap/esm/types";

class ComponentProps {
  buttonText: string;
  disabled?: boolean;
  onClick?: () => void;
  variant: Variant;
}

export default function MainButton(props: ComponentProps) {
  return (
    <Button
      disabled={props.disabled}
      onClick={props.onClick}
      variant={props.variant}
      style={{ width: "100%" }}
    >
      {props.buttonText}
    </Button>
  );
}
