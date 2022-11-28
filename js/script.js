//Question 1:
function reverseThisString(string){
    let returnString='';
for(let i=0; i<string.length; i++){
    returnString+=string.charAt(string.length-1-i);
}
return returnString;
}

console.log(reverseThisString("Hello"));
//Question 2:
function swapCase(string){
    let returnString='';
for(let i=0; i<string.length; i++){
    if(string.substr(i)>='a' && string.substr(i)<='z' ){
        returnString+=string.charAt(i).toUpperCase();
    }
    else{
        returnString+=string.charAt(i).toLowerCase();
    }
}
return returnString;
}

console.log(swapCase("Hello World"));

//Question 3:
const tempArray=new Array(23, 32, 41, 50, 59);
const celsius=tempArray.map(function toCelsius(array){
    return (array-32)*(5/9);
}
);
console.log(celsius);

//Question 4:
const grades=new Array(20, 30, 50, 80, 90, 100);
const results=grades.map(function passOrFail(array){
    return array>=75;

}
);

console.log(results);
//Question 5:

function germanNumbers(){
    const translatedNumbers=[];
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    for(let i=0; i<cardinalNumbers.length; i++){
    translatedNumbers[i]=cardinalNumbers[i]+" is "+germanNumbers[i];
    }
    return translatedNumbers;

}
console.log(germanNumbers());


//Question 6:
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function returnPrimeNumbers(){
        return numbers.filter( function(num){
            //return num==2 || num==3 || num==5 || num==7 || num==11|| num==13;
            for(let i=2; i<num; i++){
                if(num%i==0){
                    return false;
                }
            }
            if(num==1){
                return false;
            }
            return num;
           
    
        });
    }

console.log(returnPrimeNumbers());

//Question 7:
function oneToOneHundred(){
    const output =[];
    
    for(let i=1; i<=100; i++){
        output[i-1]=i;
    if(i%3==0){
        output[i-1]="CSC225 RULES";
    }
    if(i%5==0){
        output[i-1]="I LOVE JAVASCRIPT";

    }
    if(i%5==0&&i%3==0){
        output[i-1]="CSC225 RULES I LOVE JAVASCRIPT";
    }
        
    
    }
    return output;
}
console.log(oneToOneHundred());


