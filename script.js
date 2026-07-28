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


portada.addEventListener("click",abrirInvitacion);

/*portada.addEventListener(

    "touchstart",

    abrirInvitacion,

    {once:true}

);*/


// Ubicación

btnUbicacion.addEventListener("click", () => {

    audio.pause();
    audio.currentTime = 0;

    const ua = navigator.userAgent;

    setTimeout(() => {

        if(/iPhone|iPad|iPod/i.test(ua)){

            window.open(
                `https://maps.apple.com/?q=${lat},${lon}`,
                "_blank"
            );

            return;

        }

        window.open(
            `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`,
            "_blank"
        );

    }, 100);

});