
window.onload = function(){




var start = document.getElementById('start');
var bounds =document.getElementsByClassName('boundary');
var end = document.getElementById('end');
var example = document.getElementsByClassName('example')[0];
var all = document.getElementById('game');

// console.log(start.innerHTML);
// console.log(bounds.length);
// console.log(end.innerHTML);
// console.log(example);


var flag,flag1 = false;
var counter = 0;

start.addEventListener('mouseover',function(){
    
    for (i=0;i <6;i++){
        bounds[i].style.borderColor = '#000000';
    }
    flag=false;
    flag1 =true;
    var strc=String(counter);
    example.innerHTML="Start!" + strc;



});

//flag1  is to prevent checking free 5 points after you lose the first time 
end.addEventListener('mouseover',function(){
    if(!flag && flag1 ){
    counter += 5;
    flag=true;
    var strc=String(counter);
    for (i=0;i <6;i++){
        bounds[i].style.borderColor ='#00ff00';
    }
    example.innerHTML="you win!" + strc;}
});

for(i=0;i<5;i++){
    
    bounds[i].addEventListener('mouseover',function(){
    
    if(!flag){
        if(counter>9){
            counter -= 10;
            var strc=String(counter);
            
        }else {counter=0;var strc=String(counter);}
        flag=false;
        flag1 = false;
        for(i=0;i<5;i++){bounds[i].style.borderColor='#ff0000';}
        example.innerHTML='You lose!' +strc;
    }
    })
}
//here flag1 works to prevent that when you lose and trying to restart,you may go out of the main div
//so it will consider you cheating 
all.addEventListener('mouseleave',function(){
    if (!flag && flag1){
        counter=0;
        var strc=String(counter);
        example.innerHTML='CHEATING SCORE RESET!'+ strc;

    }


});




}