
window.onload = function(){




var start = document.getElementById('start');
var bounds =document.getElementsByClassName('boundary');
var end = document.getElementById('end');
var example = document.getElementsByClassName('example')[0];


// console.log(start.innerHTML);
// console.log(bounds.length);
// console.log(end.innerHTML);
// console.log(example);


var flag = false;
var counter = 0;

start.addEventListener('mouseover',function(){
    for (i=0;i <6;i++){
        bounds[i].style.borderColor = '#ffffff';
    }
   
    var strc=String(counter);
    example.innerHTML="good for now " + strc;

});


end.addEventListener('mouseover',function(){
    counter += 5;
    var strc=String(counter);
    for (i=0;i <6;i++){
        bounds[i].style.borderColor ='#00ff00';
    }
    example.innerHTML="you win!" + strc;
    

})







}