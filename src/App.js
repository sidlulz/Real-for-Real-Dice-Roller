import './App.css';
import { useState } from 'react';

import Dice20Side1 from "./images/Ooz_Dice/D20/Dice1.png";
import Dice20Side2 from "./images/Ooz_Dice/D20/Dice2.png";
import Dice20Side3 from "./images/Ooz_Dice/D20/Dice3.png";
import Dice20Side4 from "./images/Ooz_Dice/D20/Dice4.png";
import Dice20Side5 from "./images/Ooz_Dice/D20/Dice5.png";
import Dice20Side6 from "./images/Ooz_Dice/D20/Dice6.png";
import Dice20Side7 from "./images/Ooz_Dice/D20/Dice7.png";
import Dice20Side8 from "./images/Ooz_Dice/D20/Dice8.png";
import Dice20Side9 from "./images/Ooz_Dice/D20/Dice9.png";
import Dice20Side10 from "./images/Ooz_Dice/D20/Dice10.png";
import Dice20Side11 from "./images/Ooz_Dice/D20/Dice11.png";
import Dice20Side12 from "./images/Ooz_Dice/D20/Dice12.png";
import Dice20Side13 from "./images/Ooz_Dice/D20/Dice13.png";
import Dice20Side14 from "./images/Ooz_Dice/D20/Dice14.png";
import Dice20Side15 from "./images/Ooz_Dice/D20/Dice15.png";
import Dice20Side16 from "./images/Ooz_Dice/D20/Dice16.png";
import Dice20Side17 from "./images/Ooz_Dice/D20/Dice17.png";
import Dice20Side18 from "./images/Ooz_Dice/D20/Dice18.png";
import Dice20Side19 from "./images/Ooz_Dice/D20/Dice19.png";
import Dice20Side20 from "./images/Ooz_Dice/D20/Dice20.png";

import Dice12Side1 from "./images/Ooz_Dice/D12/Dice1.png";
import Dice12Side2 from "./images/Ooz_Dice/D12/Dice2.png";
import Dice12Side3 from "./images/Ooz_Dice/D12/Dice3.png";
import Dice12Side4 from "./images/Ooz_Dice/D12/Dice4.png";
import Dice12Side5 from "./images/Ooz_Dice/D12/Dice5.png";
import Dice12Side6 from "./images/Ooz_Dice/D12/Dice6.png";
import Dice12Side7 from "./images/Ooz_Dice/D12/Dice7.png";
import Dice12Side8 from "./images/Ooz_Dice/D12/Dice8.png";
import Dice12Side9 from "./images/Ooz_Dice/D12/Dice9.png";
import Dice12Side10 from "./images/Ooz_Dice/D12/Dice10.png";
import Dice12Side11 from "./images/Ooz_Dice/D12/Dice11.png";
import Dice12Side12 from "./images/Ooz_Dice/D12/Dice12.png";

import DicePSide1 from "./images/Ooz_Dice/Percentile/Dice1.png";
import DicePSide2 from "./images/Ooz_Dice/Percentile/Dice2.png";
import DicePSide3 from "./images/Ooz_Dice/Percentile/Dice3.png";
import DicePSide4 from "./images/Ooz_Dice/Percentile/Dice4.png";
import DicePSide5 from "./images/Ooz_Dice/Percentile/Dice5.png";
import DicePSide6 from "./images/Ooz_Dice/Percentile/Dice6.png";
import DicePSide7 from "./images/Ooz_Dice/Percentile/Dice7.png";
import DicePSide8 from "./images/Ooz_Dice/Percentile/Dice8.png";
import DicePSide9 from "./images/Ooz_Dice/Percentile/Dice9.png";
import DicePSide10 from "./images/Ooz_Dice/Percentile/Dice10.png";

import Dice10Side1 from "./images/Ooz_Dice/D10/Dice1.png";
import Dice10Side2 from "./images/Ooz_Dice/D10/Dice2.png";
import Dice10Side3 from "./images/Ooz_Dice/D10/Dice3.png";
import Dice10Side4 from "./images/Ooz_Dice/D10/Dice4.png";
import Dice10Side5 from "./images/Ooz_Dice/D10/Dice5.png";
import Dice10Side6 from "./images/Ooz_Dice/D10/Dice6.png";
import Dice10Side7 from "./images/Ooz_Dice/D10/Dice7.png";
import Dice10Side8 from "./images/Ooz_Dice/D10/Dice8.png";
import Dice10Side9 from "./images/Ooz_Dice/D10/Dice9.png";
import Dice10Side10 from "./images/Ooz_Dice/D10/Dice10.png";

import Dice8Side1 from "./images/Ooz_Dice/D8/Dice1.png";
import Dice8Side2 from "./images/Ooz_Dice/D8/Dice2.png";
import Dice8Side3 from "./images/Ooz_Dice/D8/Dice3.png";
import Dice8Side4 from "./images/Ooz_Dice/D8/Dice4.png";
import Dice8Side5 from "./images/Ooz_Dice/D8/Dice5.png";
import Dice8Side6 from "./images/Ooz_Dice/D8/Dice6.png";
import Dice8Side7 from "./images/Ooz_Dice/D8/Dice7.png";
import Dice8Side8 from "./images/Ooz_Dice/D8/Dice8.png";

import Dice6Side1 from "./images/Ooz_Dice/D6/Dice1.png";
import Dice6Side2 from "./images/Ooz_Dice/D6/Dice2.png";
import Dice6Side3 from "./images/Ooz_Dice/D6/Dice3.png";
import Dice6Side4 from "./images/Ooz_Dice/D6/Dice4.png";
import Dice6Side5 from "./images/Ooz_Dice/D6/Dice5.png";
import Dice6Side6 from "./images/Ooz_Dice/D6/Dice6.png";

import Dice4Side1 from "./images/Ooz_Dice/D4/Dice1.png";
import Dice4Side2 from "./images/Ooz_Dice/D4/Dice2.png";
import Dice4Side3 from "./images/Ooz_Dice/D4/Dice3.png";
import Dice4Side4 from "./images/Ooz_Dice/D4/Dice4.png";



function App() {

  var d20Images = [
    Dice20Side1,
    Dice20Side2,
    Dice20Side3,
    Dice20Side4,
    Dice20Side5,
    Dice20Side6,
    Dice20Side7,
    Dice20Side8,
    Dice20Side9,
    Dice20Side10,
    Dice20Side11,
    Dice20Side12,
    Dice20Side13,
    Dice20Side14,
    Dice20Side15,
    Dice20Side16,
    Dice20Side17,
    Dice20Side18,
    Dice20Side19,
    Dice20Side20
  ]

  var d12Images = [
    Dice12Side1,
    Dice12Side2,
    Dice12Side3,
    Dice12Side4,
    Dice12Side5,
    Dice12Side6,
    Dice12Side7,
    Dice12Side8,
    Dice12Side9,
    Dice12Side10,
    Dice12Side11,
    Dice12Side12
  ]

  var dPImages = [
    DicePSide1,
    DicePSide2,
    DicePSide3,
    DicePSide4,
    DicePSide5,
    DicePSide6,
    DicePSide7,
    DicePSide8,
    DicePSide9,
    DicePSide10
  ]

  var d10Images = [
    Dice10Side1,
    Dice10Side2,
    Dice10Side3,
    Dice10Side4,
    Dice10Side5,
    Dice10Side6,
    Dice10Side7,
    Dice10Side8,
    Dice10Side9,
    Dice10Side10
  ]

  var d8Images = [
    Dice8Side1,
    Dice8Side2,
    Dice8Side3,
    Dice8Side4,
    Dice8Side5,
    Dice8Side6,
    Dice8Side7,
    Dice8Side8
  ]

var d6Images = [
    Dice6Side1,
    Dice6Side2,
    Dice6Side3,
    Dice6Side4,
    Dice6Side5,
    Dice6Side6
  ]

var d4Images = [
  Dice4Side1,
  Dice4Side2,
  Dice4Side3,
  Dice4Side4
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
function D8(){
  setNewImage(d8Images[0]);
  setNewDice(8);
}
function D10(){
  setNewImage(d10Images[0]);
  setNewDice(10);
}
function DP(){
  setNewImage(dPImages[0]);
  setNewDice(100);
}
function D12(){
  setNewImage(d12Images[0]);
  setNewDice(12);
}
function D20(){
  setNewImage(d20Images[0]);
  setNewDice(20);
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
if (dice === 8){
  var randomNum3 = Math.floor(Math.random() * 8);
      setNewImage(d8Images[randomNum3]);
}
if (dice === 10){
  var randomNum4 = Math.floor(Math.random() * 10);
      setNewImage(d10Images[randomNum4]);
}
if (dice === 100){
  var randomNum5 = Math.floor(Math.random() * 10);
      setNewImage(dPImages[randomNum5]);
}
if (dice === 12){
  var randomNum6 = Math.floor(Math.random() * 12);
      setNewImage(d12Images[randomNum6]);
}
if (dice === 20){
  var randomNum7 = Math.floor(Math.random() * 20);
      setNewImage(d20Images[randomNum7]);
}
}


  return (
    <div className="App">
      <center>Adventure Dice!</center>
      <button type="button" class="btn btn-primary btn-lg" onClick={D4}>4 Sided</button>
      <button type="button" class="btn btn-primary btn-lg" onClick={D6}>6 Sided</button>
      <button type="button" class="btn btn-primary btn-lg" onClick={D8}>8 Sided</button>
      <button type="button" class="btn btn-primary btn-lg" onClick={D10}>10 Sided</button>
      <button type="button" class="btn btn-primary btn-lg" onClick={DP}>Percentile</button>
      <button type="button" class="btn btn-primary btn-lg" onClick={D12}>12 Sided</button>
      <button type="button" class="btn btn-primary btn-lg" onClick={D20}>20 Sided</button>
        <div className="container">
        <img className="square" src={image}></img>
    </div>
    <button type="button" class="btn btn-outline-dark btn-lg" onClick = {roll}>ROLL</button>
    </div>
  );
}

export default App;
