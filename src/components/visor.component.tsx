/* Bootstrap imports */
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
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
      <Row
        style={{
          alignItems: "center",
          height: "100px",
        }}
      >
        <Col>
          <h1 style={{ textAlign: "center" }}>
            {props.n1} {props.operator} {props.n2}
          </h1>
        </Col>
      </Row>
    );
  }

  return (
    <Row
      style={{
        alignItems: "center",
        height: "100px",
      }}
    >
      <Col>
        <h1 style={{ textAlign: "center" }}>
          {props.n1} {props.operator} {props.n2} = {props.result}
        </h1>
      </Col>
    </Row>
  );
}
