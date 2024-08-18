document.addEventListener("DOMContentLoaded", function() {
    let user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (!user) {
        window.location.href = "login.html";
        return;
    }

    document.getElementById("userInfo").innerHTML = `
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Password:</strong> ${user.password}</p>
    `;

    document.getElementById("logoutBtn").addEventListener("click", function() {
        if (confirm("Are you sure you want to logout?")) {
            sessionStorage.clear();
            window.location.href = "login.html";    
        }
    });

    document.getElementById("deleteBtn").addEventListener("click", function() {
        if (confirm("Are you sure you want to delete this account?")) {
            localStorage.clear();
            window.location.href = "signup.html"; 
        }
    });
});
