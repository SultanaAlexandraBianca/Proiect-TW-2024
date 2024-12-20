const apiBaseUrl = "http://localhost/game_api";

// Load tournaments on page load
document.addEventListener("DOMContentLoaded", () => {
    fetchTournaments();
    fetchParticipants();
});

// Fetch tournaments
function fetchTournaments() {
    fetch(`${apiBaseUrl}/tournaments.php`)
        .then(response => response.json())
        .then(data => {
            const tournamentList = document.getElementById("tournament-list");
            tournamentList.innerHTML = ""; // Clear list
            data.forEach(tournament => {
                const li = document.createElement("li");
                li.textContent = `${tournament.name} - ${tournament.date} - ${tournament.location}`;
                tournamentList.appendChild(li);
            });
        });
}

// Fetch participants
function fetchParticipants() {
    fetch(`${apiBaseUrl}/participants.php`)
        .then(response => response.json())
        .then(data => {
            const participantList = document.getElementById("participant-list");
            participantList.innerHTML = ""; // Clear list
            data.forEach(participant => {
                const li = document.createElement("li");
                li.textContent = `${participant.name} (Tournament ID: ${participant.tournament_id})`;
                participantList.appendChild(li);
            });
        });
}

// Add tournament
document.getElementById("tournament-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("tournament-name").value;
    const date = document.getElementById("tournament-date").value;
    const location = document.getElementById("tournament-location").value;

    fetch(`${apiBaseUrl}/tournaments.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, date, location })
    }).then(() => {
        fetchTournaments();
        this.reset();
    });
});

// Add participant
document.getElementById("participant-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("participant-name").value;
    const tournamentId = document.getElementById("tournament-id").value;

    fetch(`${apiBaseUrl}/participants.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, tournament_id: tournamentId })
    }).then(() => {
        fetchParticipants();
        this.reset();
    });
});
