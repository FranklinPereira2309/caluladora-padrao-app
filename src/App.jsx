import { evaluate } from 'mathjs';
import { useState } from 'react';
import './App.css';
import Botao from './compnents/Botao';
import BotaoLimpar from './compnents/BotaoLimpar';
import Tela from './compnents/Tela';

function App() {

  const [input, setInput] = useState('')

  function exibirValorNoInput(valor) {
    return setInput(input + valor)
  }

  function calcularValor() {
    return input
    ? setInput(evaluate(input))
    : alert('Por favor clicar primeiro nos valores!')
  }

  
  return (
    <div className="app">
      <div className='container-calc'>
        <Tela input={input} />
        <div className='linha'>
          <Botao exibirValorNoInput={exibirValorNoInput}>1</Botao>
          <Botao exibirValorNoInput={exibirValorNoInput}>2</Botao>
          <Botao exibirValorNoInput={exibirValorNoInput}>3</Botao>
          <Botao exibirValorNoInput={exibirValorNoInput}>+</Botao>
        </div>
        <div className='linha'>
          <Botao exibirValorNoInput={exibirValorNoInput}>4</Botao>
          <Botao exibirValorNoInput={exibirValorNoInput}>5</Botao>
          <Botao exibirValorNoInput={exibirValorNoInput}>6</Botao>
          <Botao exibirValorNoInput={exibirValorNoInput}>-</Botao>
        </div>
        <div className='linha'>
          <Botao exibirValorNoInput={exibirValorNoInput}>7</Botao>
          <Botao exibirValorNoInput={exibirValorNoInput}>8</Botao>
          <Botao exibirValorNoInput={exibirValorNoInput}>9</Botao>
          <Botao exibirValorNoInput={exibirValorNoInput}>*</Botao>
        </div>
        <div className='linha'>
          <Botao exibirValorNoInput={calcularValor}>=</Botao>
          <Botao exibirValorNoInput={exibirValorNoInput}>0</Botao>
          <Botao exibirValorNoInput={exibirValorNoInput}>.</Botao>
          <Botao exibirValorNoInput={exibirValorNoInput}>/</Botao>
        </div>
        <BotaoLimpar exibirValorNoInput={()=> setInput('')} >Clear</BotaoLimpar>
      </div>
    </div>

  );
}

export default App;
