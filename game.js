
window.onload = function(){


var start = document.getElementById('start');
var bounds = document.getElementsByClassName('boundary');
var end = document.getElementById('end');
var example = document.getElementsByClassName('example')[0];


// console.log(start.innerHTML);
// console.log(bounds.length);
// console.log(end.innerHTML);
// console.log(example);


var flag = false;
var counter = 0;

start.addEventListener('click',function(){
    for(let i=0;bounds.length -1;i++){
    bounds[i].style.borderColor = "red";}
    
});




}