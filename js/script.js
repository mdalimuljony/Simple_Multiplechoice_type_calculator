/*Calculator*/
console.log ("Chose an option from below \n1. Add \n2. Subtract \n3. Multiply \n4. Divide");

var num1 = prompt("Enter your Second Number : ");
var num2 = prompt("Enter your first Number : ");
var option = prompt("Chose an option from below : ");
var result = null;

num1 = parseInt(num1);
num2 = parseInt(num2);
option = parseInt(option);

var num1con = isNaN(num1);
var num2con = isNaN(num2);
var optioncon = isNaN(option);

if(num1con || num2con || optioncon) {
        console.log("invalied input"); 

} else {
        switch(option) {
                case 1 : result = num1 + num2 ;
                break; 
                case 2 : result = num1 - num2 ;
                break; 
                case 3 : result = num1 * num2 ;
                break; 
                case 4 : result = num1 / num2 ;
                break;
                default :
                break; 
        };
        if (result == null) {
                console.log("No Result");
        } else {
                console.log("Your answer is : " + result);
        };
};
