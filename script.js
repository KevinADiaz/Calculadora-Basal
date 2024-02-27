const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const FLUD = document.getElementById('fludiario')
function HS(p) {
if (p<=30){
    if (p>10){
        if (p>20){
            return 1500+(p-20)*20
        }
        else{
            return 1000+(p-10)*50
        }
    }
    else{return p*100
}}}
function SC(p){
    return (p*4+7)/(p+90)
}
CALCULAR.addEventListener('click', () => {
const p = document.getElementById("peso").valueAsNumber
FLUD.style.display = "none";
FLU.style.display = "none";
MAN.style.display = "none";
if (p>0) {ERROR.style.display = "none";
    if (p<=30){
        FLUD.innerHTML = 'volumen diario:'+HS(p).toFixed(2)+'cc';
        FLU.innerHTML = 'mantenimiento:'+(HS(p)/24).toFixed(2)+'cc/h';
        MAN.innerHTML = 'm+m/2:'+(HS(p)*1.5/24).toFixed(2)+'cc/h';
        FLUD.style.display = "block";
        FLU.style.display = "block";
        MAN.style.display = "block";
    }
    else {
        FLUD.innerHTML = 'SC*1500:'+(SC(p)*1500).toFixed(2)+'cc/h';
        FLU.innerHTML = 'SC*2000:'+(SC(p)*2000).toFixed(2)+'cc/h';
        FLUD.style.display = "block";
        FLU.style.display = "block";
    }
}
else{
    document.getElementById('error').style.display = "block"
}})
