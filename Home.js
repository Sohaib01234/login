window.onload = function() {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
        window.location.href = "login.html";
    } else {
        document.getElementById("userGreeting").textContent = loggedInUser;
    }

    document.getElementById("logoutButton").addEventListener("click", function() {
        localStorage.removeItem("loggedInUser");
        window.location.href = "login.html";
    });
};
