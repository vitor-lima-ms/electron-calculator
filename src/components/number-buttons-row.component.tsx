/* Bootstrap imports */
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
/* React imports */
import { JSX } from "react";

class ComponentProps {
  key: number;
  numberButtons: JSX.Element[];
}

export default function NumberButtonsRow(props: ComponentProps) {
  return (
    <Row key={Math.random()} style={{ margin: "9px" }}>
      {props.numberButtons.map((numberButton) => (
        <Col key={Math.random()} style={{ textAlign: "center" }}>
          {numberButton}
        </Col>
      ))}
    </Row>
  );
}
