function forLoop(array){
for(int i=0;i<25;i++){
if(i==1){
array.push('I am 1 strange loop');
} else {
array.push('I am ${i} strange loop');
}
}
}

function whileLoop(n){
let countdown = n;
while(countdown > 0){
countdown--;
}
if(countdown == 0){
return 'done';
}
}

function doWhileLoop(array){
while(array.length>0 && maybeTrue()){
array.pop();
}
return array;
}
