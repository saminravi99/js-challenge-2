

var yourMarks = 77;



// Output by Console Log  

if (yourMarks <= 50){

    
    console.log ( "Your Grade : F ")
    console.log("You Have failed")
}
else if (yourMarks > 50 && yourMarks < 60){
    console.log ( "Your Grade : D ")
    console.log("You Have Passed")
}
else if (yourMarks > 60 && yourMarks < 70){
    console.log ( "Your Grade : C ")
    console.log("You Have Passed")
}
else if (yourMarks > 70 && yourMarks < 80){
    console.log ( "Your Grade : B ")
    console.log("You Have Passed")
}
else if (yourMarks > 80 && yourMarks < 90){
    console.log ( "Your Grade : A ")
    console.log("You Have Passed")
}
else {
    console.log ( "Your Grade : A+ ")
    console.log("You Have Passed")
}


// Output By  Inner HTML & Window Alert 

var markSheet = prompt("Please Enter Your Marks");


if (markSheet <= 50){
    document.getElementById("demo").innerHTML = "F";
    window.alert ('Sorry, You Have Failed');
}
else if (markSheet > 50 && markSheet < 60){
    document.getElementById("demo").innerHTML = "D";
    window.alert ('Yaay!, You Have Passed');
}
else if (markSheet >= 60 && markSheet < 70){
     document.getElementById("demo").innerHTML = "C";
     window.alert ('Yaay!, You Have Passed');
}
else if (markSheet >= 70 && markSheet < 80){
    document.getElementById("demo").innerHTML = "B";
    window.alert ('Yaay!, You Have Passed');
}
else if (markSheet >= 80 && markSheet < 90){
   document.getElementById("demo").innerHTML = "A";
   window.alert ('Yaay!, You Have Passed');
}
else {
    document.getElementById("demo").innerHTML = "A+";
    window.alert ('Yaay!, You Have Passed');
}