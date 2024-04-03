document.addEventListener("DOMContentLoaded", function () {
    const word1 = document.getElementById("word1");
    const word2 = document.getElementById("word2");
    const govImage = document.getElementById("govImage");

    let currentWord = word1;

    setInterval(() => {
        if (currentWord === word1) {
            word1.style.opacity = 0;
            word2.style.opacity = 1;
            currentWord = word2;
        } else {
            word1.style.opacity = 1;
            word2.style.opacity = 0;
            currentWord = word1;
        }
    }, 5000);
});

const countdownDate = new Date('2024-10-26T00:00:00Z').getTime();

const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days + " Days ";
    document.getElementById('hours').innerHTML = hours + " Hours ";
    document.getElementById('minutes').innerHTML = minutes + " Minutes ";
    document.getElementById('seconds').innerHTML = seconds + " Seconds ";

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = "EXPIRED";
    }
}

updateCountdown();