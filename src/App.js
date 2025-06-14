import { Container, Content, Row, } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import  { useState } from "react";
const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const handleClear = () => {
    setCurrentNumber('0');
  }

  const handleAddNumber = (number) => {
      setCurrentNumber (prev => `${number}${prev === '0' ? '' : prev}`);
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      handleClear();
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));  
    }
  }


  return (
    <div className="App">
      <Container> 
        <Content>
          <Input value={currentNumber}/> 
           <Row>
            <Button onClick={() => handleAddNumber('x')} label="x" />
            <Button onClick={() => handleAddNumber('/')} label="/" />
            <Button onClick={handleClear} label="C" />
            <Button onClick={() => handleAddNumber('')} label="X" />
          </Row>
          <Row>
            <Button onClick={() => handleAddNumber('7')} label="7" />
            <Button onClick={() => handleAddNumber('8')} label="8" />
            <Button onClick={() => handleAddNumber('9')} label="9" />
            <Button onClick={() => handleAddNumber('-')} label="-" />
          </Row>
          <Row>
            <Button onClick={() => handleAddNumber('4')} label="4" />
            <Button onClick={() => handleAddNumber('5')} label="5" />
            <Button onClick={() => handleAddNumber('6')} label="6" />
            <Button onClick={() => handleAddNumber('+')} label="+" />
          </Row>
          <Row>
            <Button onClick={() => handleAddNumber('1')} label="1" />
            <Button onClick={() => handleAddNumber('2')} label="2" />
            <Button onClick={() => handleAddNumber('3')} label="3" />
            <Button onClick={() => handleAddNumber('=')} label="=" />
          </Row>

        </Content>  
      </Container>
    </div>
  );
}

export default App;
