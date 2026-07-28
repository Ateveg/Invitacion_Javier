const body = document.body;

const portada = document.getElementById("portada");

const btnUbicacion = document.getElementById("btnUbicacion");

const audio = document.getElementById("ambiente");


// Coordenadas

const lat = 25.449455;

const lon = -100.879906;


let abierta = false;


// Abrir invitación

function abrirInvitacion(){

    if(abierta) return;

    abierta = true;

    audio.volume = 0.20;

    audio.play().catch(()=>{});

    body.classList.add("abierta");

    setTimeout(()=>{

        body.classList.add("mostrarAcciones");

    },2400);

}


portada.addEventListener("click", abrirInvitacion);


// Ubicación

btnUbicacion.addEventListener("click", () => {

    // Detener el ambiente
    audio.pause();
    audio.currentTime = 0;

    // Abrir Google Maps con la ubicación
    window.open(
        `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`,
        "_blank"
    );

});