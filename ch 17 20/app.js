var arrmy = [[[]]]
var myarr = [
    [0,1,2,3],
    [1,0,1,2],
    [2, 1, 0, 1]
]

for(let row of myarr){
    const rowstring = row.join(' ')
console.log(rowstring)
}




for (var i = 1; i<=10; i++){
    document.write(i +"<br>")
}
var table = +prompt("enter a number to show its multiplication ")
var num = +prompt("enter the lenght of multiplication table")
for (var i = 1; i<=num; i ++){
    document.write(`${table} x ${i} = ${table*i} <br>`)
}



var fruit = ["apple", "banana", "mango", "orange","strawberry"]
for (var i = 0; i <1; i++){
    document.write("element at index 0 is : " + fruit[0] +"<br>")
    document.write( "element at index 1 is : " + fruit[1] +"<br>")
    document.write( "element at index 2 is : " + fruit[2] +"<br>")
    document.write( "element at index 3 is : " + fruit[3] +"<br>")
    document.write( "element at index 3 is : " + fruit[4] +"<br>")
}


var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15 ]
document.write("counting : " + a +"<br>")
var b =[10,9,8,7,6,5,4,3,2,1]
document.write("reverse counting : " + b +"<br>")
var c =[0,2,4,6,8,10,12,14,16,18,20]
document.write("even : " + c +"<br>")
var d = [1,3,5,7,9,11,13,15,17,19]
document.write("odd : " + d +"<br>")
var e = [`2k ,4k ,6k ,8k ,10k ,12k ,14k ,16k ,18k ,20k`]
document.write("series : " + e+"<br>")

var b = prompt("please enter menu name you want to order")
var a = ["applepie" , "cake" ,"cookie" , "chips" , "patties"]
if ( a.includes(b)){
  
    alert( b + " is available in our bakery")

}
else{
  
    alert(  " sorry we dont have " + b  )
}


var A = [24, 53, 78, 91, 12]
document.write("elemets of array : " + A +"<br>")
document.write("minimum number is : " + Math.min(24, 53, 78, 91, 12) +"<br>")



var A = [24, 53, 78, 91, 12]
document.write("elemets of array : " + A +"<br>")
document.write("largest number is : " + Math.max(24, 53, 78, 91, 12) +"<br>")


for (var i = 1; i<=20; i++){
    document.write(`${5*i} ,`)
}
