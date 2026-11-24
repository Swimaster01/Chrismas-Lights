import './style.css'

//Lights
const lights = document.querySelectorAll('.light');

//Buttons
const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('#stop-btn');

//Interval Input
const intervalInput = document.querySelector('#interval');

//Variables
let currentLight = 0;

setInterval(function(){

    lights[currentLight].style.backgroundColor = 'red';

    currentLight = currentLight + 1;

    lights[currentLight - 1].style.backgroundColor = '#444';


},500);





