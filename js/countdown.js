const weddingDate = new Date("2026-06-12T16:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "Hoje é o grande dia! 🎉💍";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `Faltam <strong>${days}</strong> dias, ${hours}h ${minutes}m ${seconds}s para o grande dia 💖`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
