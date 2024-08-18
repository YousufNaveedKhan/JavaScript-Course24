// Signup
var name = prompt('Enter your full name');
var email = prompt('Enter your email');
var pass = prompt('Create a strong password');
var cpass = prompt('Confirm Password');

// Login
if (pass === cpass) {
    var emaillog = prompt('Enter your email');
    var passlog = prompt('Enter your password');

    if (email !== emaillog || pass !== passlog) {
        document.write("Invalid email or password");
    } else {
        document.write('Welcome to our website <br>');

        let eng = parseFloat(prompt("Enter your English marks"));
        let urd = parseFloat(prompt("Enter your Urdu marks"));
        let math = parseFloat(prompt("Enter your Math marks"));

        let obtainedMarks = eng + urd + math;
        let percentage = (obtainedMarks / 300) * 100;

        document.write("Obtained Marks: " + obtainedMarks + "<br>");
        document.write("Percentage: " + percentage.toFixed(2) + "%" + "<br>");

        if (percentage >= 80) {
            document.write("Grade: A+");
        } else if (percentage >= 70) {
            document.write("Grade: A");
        } else if (percentage >= 60) {
            document.write("Grade: B");
        } else if (percentage >= 50) {
            document.write("Grade: C");
        } else {
            document.write("<h1>Fail</h1>");
        }
    }
} else {
    document.write("Passwords do not match");
}
