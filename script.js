const body = document.body;

const portada = document.getElementById("portada");

const btnUbicacion = document.getElementById("btnUbicacion");

const audio = document.getElementById("ambiente");


// ================================
// Coordenadas del evento
// ================================

const lat = 25.449455;
const lon = -100.879906;


let abierta = false;


// ================================
// Abrir invitación
// ================================

function abrirInvitacion(){

    if(abierta) return;

    abierta = true;

    audio.volume = 0.10;

    audio.play().catch(() => {});

    body.classList.add("abierta");

    setTimeout(() => {

        body.classList.add("mostrarAcciones");

    }, 2400);

}


portada.addEventListener("click", abrirInvitacion);

portada.addEventListener(
    "touchstart",
    abrirInvitacion,
    { once:true }
);


// ================================
// Abrir ubicación
// ================================

btnUbicacion.addEventListener("click", () => {

    const ua = navigator.userAgent;

    // iPhone / iPad

    if (/iPhone|iPad|iPod/i.test(ua)) {

        window.open(

            `https://maps.apple.com/?ll=${lat},${lon}`,

            "_blank"

        );

        return;

    }

    // Android

    if (/Android/i.test(ua)) {

        window.location.href = `geo:${lat},${lon}`;

        return;

    }

    // Windows / Mac / Linux

    window.open(

        `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`,

        "_blank"

    );

});