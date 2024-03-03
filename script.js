
// string concatenation
//     var firstName = "fareed";
//     var lastName =  "imana";
//     var age = 45;
//     var school = "LASU";
//     var classRoom = "SS3";

//     var myStory = `Hello everyone my name is ${firstName + " " + lastName} i am ${age} years old i attend ${school} in lagos state i am currently in ${classRoom}`;
//     alert(myStory);
    

// var firstName = prompt("enter your firstname");
// var lastName = prompt("enter your lastname");

//var myStory = prompt("write a short story about yourself");
//alert(myStory);

// var myName = prompt("Name");
// var age = prompt("age");
// var school = prompt("school");
// var discipline = prompt("discipline");

// var myStory = `Hello everyone, my name is ${myName} , I am ${age} years old. A graduate of the prestigious ${school} , department of ${discipline}`;

// alert(myStory);

//for register 
function myFunction(){
    document.getElementById('registernow').addEventListener("click", () =>{
        window.location.href ="./register.html";
        myFunction();
    })

}
myFunction();

// function loginFunction(){
//     document.getElementById('signin').addEventListener("click", () =>{
//         window.location.href ="./login.html";
//         loginFunction();
//     })
// }
// loginFunction()