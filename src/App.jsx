import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { calculatorButtons } from '../calculator-base-button-data'

function App() {
  const [number,setNumber] = useState('0');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState(false);

  const handleButtonClick = (btnData) =>{
    if(btnData.type ==="clear"){
      if(btnData.value === "All Clear"){
        setNumber('0');
        setOperator('');
      }else{
        setNumber(number.slice(0,-1) ||'0');
        setOperator(operator.slice(0,-1)||'');      
      }
      return;
    }
    if(btnData.type==="number"){
      if(result){
        setNumber(String(btnData.value));
        setOperator(String(btnData.value));
        setResult(false);
      }else{
        setNumber(number ==='0' ? String(btnData.value) : number + btnData.value);
        setOperator(operator === '0' ? String(btnData.value) : operator + btnData.value);
      }
      return;
    }
    if (btnData.type === "operator") {      
      if (number === '0' || ['+', '-', '*', '/'].includes(number[number.length - 1])) {
        return; 
      }
      
      setResult(false);
      setNumber(number + btnData.text); 
      setOperator(operator + btnData.value); 
      return;
    }
    if(btnData.type ==="enter"){
      try{
        const calculatedResult = eval(operator);
        setNumber(String(calculatedResult));
        setOperator(String(calculatedResult));
        setResult(true);
      }catch(error){
        setNumber('Error');
        setOperator('');
      }
      return;
    }
    if (btnData.type === "decimal") {
      const currentNumber = operator ? number.split(/[\+\-\*\/]/).pop() : number;
      if (currentNumber.includes('.') ) {
        return; // Prevent adding another decimal if there's already one
      } else {
        setNumber(number + '.');
        setOperator(operator + '.');
      }
      return;
    }  
  };
  return (
    <div className="p-6 bg-gray-100 rounded-xl">
      <div className="">
        <h1 className=" text-gray-700">Calculator</h1>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-md mb-6">
          <input
            type="text"
            value={operator || number}
            readOnly
            className="p-4 text-3xl font-semibold text-right bg-gray-200 rounded-lg "
            />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {calculatorButtons.map((btnData) => {
            return (
              <button
                onClick={() => handleButtonClick(btnData)}
                key={btnData.value}
                style={{
                  backgroundColor: btnData.type === 'clear' ? '#F44336' : 'lightgray',
                  color: (btnData.type === 'operator' || btnData.type === 'enter') ? 'red' : 'black',
                }}
                className={`p-6 text-3xl font-medium rounded-lg h-20`}>
                {btnData.text}
              </button>
            );
          })}
        </div>
 
    </div>
  );
}


export default App;
