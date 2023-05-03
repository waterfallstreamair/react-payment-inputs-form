import React from 'react'
import PaymentInputs from './PaymentInputs';
//import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
//import images from 'react-payment-inputs/images';

//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
          <PaymentInputs />
      </header>
    </div>
  );
}

export default App;

/*




export default function PaymentInputs() {
  

  return (
    
  );
}

*/