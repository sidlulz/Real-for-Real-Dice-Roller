import './App.css';
import { useState } from 'react';

import D6_1 from "./images/D6/D6_1.png";
import D6_2 from "./images/D6/D6_2.png";
import D6_3 from "./images/D6/D6_3.png";
import D6_4 from "./images/D6/D6_4.png";
import D6_5 from "./images/D6/D6_5.png";
import D6_6 from "./images/D6/D6_6.png";

import D4_1 from "./images/D4/D4_1.png";
import D4_2 from "./images/D4/D4_2.png";
import D4_3 from "./images/D4/D4_3.png";
import D4_4 from "./images/D4/D4_4.png";



function App() {

var d6Images = [
    D6_1,
    D6_2,
    D6_3,
    D6_4,
    D6_5,
    D6_6
  ]

var d4Images = [
  D4_1,
  D4_2,
  D4_3,
  D4_4
]



const [image, setNewImage] = useState(d4Images[0])
const [dice, setNewDice] = useState(4)

function D4(){
  setNewImage(d4Images[0]);
  setNewDice(4);
}
function D6(){
  setNewImage(d6Images[0]);
  setNewDice(6);
}

function roll() {
  if (dice === 4){
      var randomNum1 = Math.floor(Math.random() * 4);
      setNewImage(d4Images[randomNum1]);
}
if (dice === 6){
  var randomNum2 = Math.floor(Math.random() * 6);
      setNewImage(d6Images[randomNum2]);
}
}


  return (
    <div className="App">
      <center>Adventure Dice!</center>
      <button type="button" class="btn btn-primary btn-lg" onClick={D4}>4 Sided</button>
      <button type="button" class="btn btn-primary btn-lg" onClick={D6}>6 Sided</button>
        <div className="container">
        <img className="square" src={image}></img>
    </div>
    <button type="button" class="btn btn-outline-dark btn-lg" onClick = {roll}>ROLL</button>
    </div>
  );
}

export default App;
