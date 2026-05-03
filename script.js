function calculateGrade() {

    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let s4 = Number(document.getElementById("sub4").value);
    let s5 = Number(document.getElementById("sub5").value);

    // Check empty inputs
    if (!s1 || !s2 || !s3 || !s4 || !s5) {
        document.getElementById("result").innerHTML = "Please enter all marks!";
        return;
    }

    let total = s1 + s2 + s3 + s4 + s5;
    let average = total / 5;

    let grade;

    if (average >= 90) {
        grade = "A";
    } 
    else if (average >= 75) {
        grade = "B";
    } 
    else if (average >= 60) {
        grade = "C";
    } 
    else if (average >= 40) {
        grade = "D";
    } 
    else {
        grade = "Fail";
    }

    document.getElementById("result").innerHTML =
        `Total: ${total} <br>
         Average: ${average.toFixed(2)} <br>
         Grade: ${grade}`;
}