// Contagem regressiva (somente em dias) - contando o dia de hoje
// Data do casamento: 12/06/2026
const targetDate = new Date(2026, 5, 12); // mês é 0-based: 5 = Junho
const MS_PER_DAY = 1000 * 60 * 60 * 24;

function updateCountdown() {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // zera horário para contar por dias

  const diffMs = targetDate.getTime() - today.getTime();

  if (diffMs < 0) {
    document.getElementById("countdown").textContent = "Hoje é o grande dia! 🎉💍";
    return;
  }

  // +1 para contar o dia de hoje
  const days = Math.floor(diffMs / MS_PER_DAY) + 1;

  document.getElementById("countdown").textContent =
    `Faltam ${days} dias para o grande dia 💖.`;
}

updateCountdown();
// Atualiza a cada hora (é suficiente, já que só muda por dia)
setInterval(updateCountdown, 60 * 60 * 1000);
