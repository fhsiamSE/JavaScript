//if
const isUserLoggeIn = true

if(isUserLoggeIn){
    console.log("Hello from if statment")
}

// < , > , <= , >= , == , != , ===


const mathScore = 58

if(mathScore > 33){
    let message = "You passed the exam"
    console.log(`${message}`)
}
// else
else{
    let message = "You failed the exam"
    console.log(`${message}`)
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const studentId = true
const studentAdmitCard = true
score = 60

if(studentId && studentAdmitCard && score){
    console.log("You can enter the exam hall")
}

// Nested if
if(score >=90){
    console.log("You got A+ grade")
}
else if(score >= 80){
    console.log("You got A grade")
}
else if(score >= 70){
    console.log("You got B grade")
}
else if(score >= 60){
    console.log("You got C grade")
}
else if(score >= 50){
    console.log("You got D grade")
}
else{
    console.log("You got F grade")
}