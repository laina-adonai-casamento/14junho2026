// Countdown like the model (days/hours/minutes/seconds)
const target = new Date("2026-06-12T16:00:00"); // horário do casamento

const elDays = document.getElementById("cd_days");
const elHours = document.getElementById("cd_hours");
const elMinutes = document.getElementById("cd_minutes");
const elSeconds = document.getElementById("cd_seconds");

function pad2(n){ return String(n).padStart(2, "0"); }

function update(){
  const now = new Date();
  let diff = target.getTime() - now.getTime();

  if (diff <= 0){
    elDays.textContent = "00";
    elHours.textContent = "00";
    elMinutes.textContent = "00";
    elSeconds.textContent = "00";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  elDays.textContent = pad2(days);
  elHours.textContent = pad2(hours);
  elMinutes.textContent = pad2(minutes);
  elSeconds.textContent = pad2(seconds);

  // Route button (optional)
  const origin = document.getElementById("origin");
  const btn = document.getElementById("btnRoute");
  if (origin && btn){
    const q = encodeURIComponent(origin.value.trim() || "");
    const dest = encodeURIComponent("Local do Casamento");
    btn.href = q
      ? `https://www.google.com/maps/dir/?api=1&origin=${q}&destination=${dest}`
      : `https://www.google.com/maps/search/?api=1&query=${dest}`;
  }
}

update();
setInterval(update, 1000);
