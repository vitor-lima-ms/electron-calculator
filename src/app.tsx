/* Bootstrap imports */
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
/* Component imports */
import ClearButton from "./components/clear-button.component";
import EqualButton from "./components/equal-button.component";
import NumberButton from "./components/number-button.component";
import NumberButtonsRow from "./components/number-buttons-row.component";
import OperatorButton from "./components/operator-button.component";
import Visor from "./components/visor.component";
/* Enum imports */
import { OperatorsEnum } from "./enums/operators.enum";
/* React imports */
import { createRoot } from "react-dom/client";
import { JSX, useState } from "react";

function App() {
  /**
   * Primeiro número da operação.
   */
  const [n1, setN1] = useState("");

  /**
   * Segundo número da operação.
   */
  const [n2, setN2] = useState("");

  /**
   * Operador.
   */
  const [operator, setOperator] = useState<null | OperatorsEnum>(null);

  const [operatorIsClicked, setOperatorIsClicked] = useState(false);

  /**
   * Variável para controlar o acionamento do botão =.
   */
  const [equalIsClicked, setEqualIsClicked] = useState(false);

  /**
   * Resultado
   */
  const [result, setResult] = useState("");

  if (equalIsClicked) {
    let numberResult: number;

    switch (operator) {
      case OperatorsEnum.ASTERISK:
        numberResult = parseFloat(n1) * parseFloat(n2);
        break;

      case OperatorsEnum.BAR:
        numberResult = parseFloat(n1) / parseFloat(n2);
        break;

      case OperatorsEnum.MINUS:
        numberResult = parseFloat(n1) - parseFloat(n2);
        break;

      case OperatorsEnum.PLUS:
        numberResult = parseFloat(n1) + parseFloat(n2);
        break;
    }

    switch (numberResult) {
      case 13:
        setResult("👆🏼🇻🇳🫏");
        break;

      case 17:
        setResult("🇧🇷🐂🔫");
        break;

      case 22:
        setResult("🇧🇷🐂🔫");
        break;

      case 24:
        setResult("🦌🏳️‍🌈");
        break;

      case 69:
        setResult("😏");
        break;

      case 666:
        setResult("😈");
        break;

      default:
        setResult(numberResult.toString());
        break;
    }
  }

  /**
   * Função para auxiliar a geração dos botões com os números da calculadora
   * @returns Lista com componentes NumberButton
   */
  const generateNumberButtonsFrom1To9 = () => {
    const numberButtonsList: JSX.Element[] = [];

    for (let n = 1; n < 10; n++) {
      numberButtonsList.push(
        <NumberButton
          buttonNumber={n.toString()}
          n1={n1}
          n2={n2}
          operatorIsClicked={operatorIsClicked}
          setN1={setN1}
          setN2={setN2}
        />
      );
    }

    return numberButtonsList;
  };

  const numberButtonsList = generateNumberButtonsFrom1To9();

  /**
   * Função para auxiliar a geração das linhas com botões numéricos da calculadora
   * @returns Lista com componentes NumberButtonsRow
   */
  const generateNumberButtonsRows = () => {
    const buttonsPerRow = 3;

    const numberButtonsRowsList: JSX.Element[] = [];

    let numberButtonsForOneRow: JSX.Element[] = [];

    for (let i = 0; i <= numberButtonsList.length; i++) {
      if (i !== 0 && i % buttonsPerRow === 0) {
        numberButtonsRowsList.push(
          <NumberButtonsRow
            key={Math.random()}
            numberButtons={numberButtonsForOneRow}
          />
        );

        numberButtonsForOneRow = [numberButtonsList[i]];

        continue;
      }

      const numberButton = numberButtonsList[i];

      numberButtonsForOneRow.push(numberButton);
    }

    return numberButtonsRowsList;
  };

  const numberButtonsRowsList = generateNumberButtonsRows().reverse();

  /**
   * Função para auxiliar a geração dos botões com os operadores da calculadora
   * @returns Lista com componentes OperatorButton
   */
  const generateOperatorButtons = () => {
    const operatorsEnumValues = Object.values(OperatorsEnum);

    const operatorButtonsList: JSX.Element[] = [];

    for (let i = 0; i < operatorsEnumValues.length; i++) {
      operatorButtonsList.push(
        <OperatorButton
          n1={n1}
          operator={operatorsEnumValues[i]}
          operatorIsClicked={operatorIsClicked}
          setOperator={setOperator}
          setOperatorIsClicked={setOperatorIsClicked}
        />
      );
    }

    return operatorButtonsList;
  };

  const operatorButtonsList = generateOperatorButtons();

  if (equalIsClicked) {
    setEqualIsClicked(false);
  }

  /**
   * console.log(s)
   */

  return (
    <Container>
      <Visor n1={n1} n2={n2} operator={operator} result={result} />

      <Row>
        <Col>
          {numberButtonsRowsList.map((numberButtonRow) => numberButtonRow)}
          <Row style={{ margin: "9px" }}>
            <Col>
              <EqualButton
                equalIsClicked={equalIsClicked}
                n2={n2}
                result={result}
                setEqualIsClicked={setEqualIsClicked}
              />
            </Col>

            <Col>
              <NumberButton
                buttonNumber="0"
                n1={n1}
                n2={n2}
                operatorIsClicked={operatorIsClicked}
                setN1={setN1}
                setN2={setN2}
              />
            </Col>

            <Col>
              <ClearButton
                equalIsClicked={equalIsClicked}
                n1={n1}
                n2={n2}
                operator={operator}
                operatorIsClicked={operatorIsClicked}
                result={result}
                setEqualIsClicked={setEqualIsClicked}
                setN1={setN1}
                setN2={setN2}
                setOperator={setOperator}
                setOperatorIsClicked={setOperatorIsClicked}
                setResult={setResult}
              />
            </Col>
          </Row>
        </Col>

        <Col>
          {operatorButtonsList.map((operatorButton) => (
            <Row style={{ margin: "9px" }}>{operatorButton}</Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

createRoot(document.getElementById("app")).render(<App></App>);
