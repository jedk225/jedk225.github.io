$(document).ready(function () {

    $("#home-BTN").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $("#main-jumbotron").offset().top }, 1000);

    })

    $("#portfolio-BTN").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $("#portfolio").offset().top }, 1000);

    })

    $("#about-BTN").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $("#about-me").offset().top }, 1000);

    })

    $("#contact-BTN").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $("#contact-me").offset().top }, 1000);

    })

    $("#all-projects").hide();

    $("#see-more").click(function () {
        $("#all-projects").slideDown(1000);

    })

    $("#see-less").click(function () {
        $("#all-projects").slideUp(1000);

    })

    var config = {
        apiKey: "AIzaSyAgNw0MvXs7RM2H04fHflM84JCheWXSX8U",
        authDomain: "portfolio-c7b97.firebaseapp.com",
        databaseURL: "https://portfolio-c7b97.firebaseio.com",
        projectId: "portfolio-c7b97",
        storageBucket: "portfolio-c7b97.appspot.com",
        messagingSenderId: "577423809368"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    $("#submit-BTN").click(function (event) {
        event.preventDefault();
        var userName = $("#name-input").val().trim();
        var userEmail = $("#email-input").val().trim();
        var userMessage = $("#message-input").val();

        if (userEmail.includes("@") && userEmail.includes(".")) {
            $("#error-message").empty();
            database.ref().push({
                name: userName,
                email: userEmail,
                message: userMessage
            });

            $("#myForm")[0].reset();

            $("#error-message").text("Message sent.");
            $("#error-message").css("color", "green");

        } else {
            $("#error-message").text("Please enter a valid email");
            $("#error-message").css("color", "red");
        }

    });
});