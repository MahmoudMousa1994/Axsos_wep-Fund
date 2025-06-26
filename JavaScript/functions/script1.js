var x=10 , y=20;
function abc(x,y){
    x=x+10;
    y=y+10;
    return x*10
}
z=abc(x,y) +abc(y,x);
console.log(z);
