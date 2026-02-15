
const el=document.getElementById('countdown');
const wedding=new Date('2026-06-12').getTime();
function update(){
const now=new Date().getTime();
const diff=wedding-now;
const days=Math.ceil(diff/(1000*60*60*24))+1;
el.innerHTML='Faltam '+days+' dias para o grande dia 💖.';
}
update();
setInterval(update,60000);
