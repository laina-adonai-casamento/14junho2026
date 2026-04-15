const target=new Date("2026-06-14T00:00:00");
const el=document.getElementById("cd_days");
function update(){
 let diff=target-new Date();
 if(diff<0){el.textContent="00";return;}
 el.textContent=Math.floor(diff/(1000*60*60*24));
}
setInterval(update,1000);update();
