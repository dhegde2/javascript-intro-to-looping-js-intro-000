function forLoop(array){
for(let i=0;i<25;i++){
if(i===1){
array.push('I am 1 strange loop');
} else {
array.push('I am ${i} strange loop');
}
}
return array;
}

function whileLoop(number){
while(number > 0){
number--;
}
if(countdown == 0){
return 'done';
}
return 'done';
}

function maybeTrue() {
 +  return Math.random() >= 0.5
 +}

function doWhileLoop(array){
while(array.length>0 && maybeTrue()){
array.pop();
}
return array;
}
