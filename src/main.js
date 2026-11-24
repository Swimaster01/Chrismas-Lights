import './style.css'

//Lights
const lights = document.querySelectorAll('.light');

//Buttons
const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('stop-btn');

//Interval Input
const intervalInput = document.querySelector('#interval');

lights.forEach(function(light){
    light.style.backgroundColor = 'red';
});
