document.getElementById("avengersForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const userName = document.getElementById("userName").value;
    const favoriteAvenger = document.getElementById("favoriteAvenger").value;
    const feedback = document.getElementById("feedback").value;

    const emailBody = `User Name: ${userName}\nFavorite Avenger: ${favoriteAvenger}\nFeedback: ${feedback}`;

    window.location.href = `mailto:abc@example.com?subject=Avengers Form Submission&body=${encodeURIComponent(emailBody)}`;
});