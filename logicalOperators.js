//6.Write a function called opposite that takes a boolean as parameter and returns the opposite.

const opposite = (boolean) => !boolean

//7.Write a function called greaterThan5 that takes two numbers as parameters and returns true if one of the numbers is greater than 5 and false if none of the numbers are greater than 5.

const greaterThan5=(n1,n2)=> n1>5 || n2 >5

//8.Write a function called allGreaterThan5 that takes two numbers as parameters and returns true if both numbers are greater than 5 and false if one or both of them is not.

const allGreaterThan5=(num1,num2)=>{
    return num1>5 && num2>5 


}
// 9.Write a function called largerThan5AndLessThan20 that takes a number as a parameter and returns true if it is larger than five and less than 20 and false if otherwise.
const largerThan5AndLessThan20 =(n1)=> num1>5&&num2<20