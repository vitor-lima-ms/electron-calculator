/* Component imports */
import ClearButton from "./components/clear-button.component";
import EqualButton from "./components/equal-button.component";
import NumberButton from "./components/number-button.component";
import OperatorButton from "./components/operator-button.component";
import Visor from "./components/visor.component";
/* Enum imports */
import { OperatorsEnum } from "./enums/operators.enum";
/* React imports */
import { createRoot } from "react-dom/client";
import { JSX, useState } from "react";

const root = createRoot(document.getElementById("app"));

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

    setResult(numberResult.toString());
  }

  /**
   * Função para auxiliar a geração dos botões com os números da calculadora
   * @returns Lista com componentes NumberButton
   */
  const generateNumberButtons = () => {
    const numberButtonsList: JSX.Element[] = [];

    for (let n = 0; n < 10; n++) {
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

  const numberButtonsList = generateNumberButtons();

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
  console.log("n1:", n1);
  console.log("n2:", n2);
  console.log("operator:", operator);
  console.log("operatorIsClicked:", operatorIsClicked);
  console.log("equalIsClicked:", equalIsClicked);
  console.log("result:", result);
  console.log("==========");

  return (
    <>
      <Visor n1={n1} n2={n2} operator={operator} result={result} />
      {numberButtonsList.map((numberButton) => (
        <li key={Math.random()}>{numberButton}</li>
      ))}
      {operatorButtonsList.map((operatorButton) => (
        <li key={Math.random()}>{operatorButton}</li>
      ))}
      <EqualButton
        equalIsClicked={equalIsClicked}
        n2={n2}
        result={result}
        setEqualIsClicked={setEqualIsClicked}
      />
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
    </>
  );
}

root.render(<App></App>);
