const target = new Date("2026-06-14T15:00:00-03:00");

const elDays = document.getElementById("cd_days");
const elHours = document.getElementById("cd_hours");
const elMinutes = document.getElementById("cd_minutes");

function pad2(n){ return String(n).padStart(2, "0"); }

function update(){
  const now = new Date();
  let diff = target.getTime() - now.getTime();

  if (diff <= 0){
    elDays.textContent = "00";
    elHours.textContent = "00";
    elMinutes.textContent = "00";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  elDays.textContent = pad2(days);
  elHours.textContent = pad2(hours);
  elMinutes.textContent = pad2(minutes);
}

update();
setInterval(update, 1000);
