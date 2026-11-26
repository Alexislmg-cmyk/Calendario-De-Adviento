
const params = new URLSearchParams(window.location.search);
const day = Number(params.get("dia"));

const validDay = Number.isInteger(day) && day >= 1 && day <= 24;

const mexicoYear = 2026;

// Medianoche de Ciudad de México = 06:00 UTC en diciembre de 2026.
function getUnlockTime(dayNumber) {
    return Date.UTC(mexicoYear, 11, dayNumber, 6, 0, 0);
}

const surprises = [
    { title: "Una pequeña promesa 💗", message: "Quiero que este diciembre esté lleno de pequeños momentos que te hagan sonreír. Gracias por estar en mi vida, princesa." },
    { title: "Una razón para sonreír", message: "Tu sonrisa tiene algo que hace que hasta mis días más normales se sientan especiales." },
    { title: "Un recuerdo nuestro 📸", message: "Aquí guardaremos uno de esos momentos que quiero conservar para siempre." },
    { title: "Una cartita para ti 💌", message: "No siempre encuentro las palabras perfectas, pero nunca me faltan sentimientos para ti." },
    { title: "Una canción para nosotros 🎵", message: "Hay canciones que se sienten diferentes cuando pienso en ti." },
    { title: "Seis cositas que amo de ti", message: "Tu sonrisa, tus abrazos, tu forma de hablar, tus ocurrencias, tu mirada y esa manera tan tuya de hacerme feliz." },
    { title: "Un abrazo a distancia 🫂", message: "Si pudiera aparecer ahí por un instante, te daría uno de esos abrazos que no quiero terminar." },
    { title: "Un detallito especial 🎀", message: "No necesitas hacer nada extraordinario para ser alguien extraordinaria para mí." },
    { title: "Un recuerdo favorito", message: "Hay momentos que quisiera repetir una y otra vez. Este espacio es para uno de ellos." },
    { title: "Diez motivos para elegirte", message: "Y podría encontrar muchos más. Me encanta compartir mi tiempo contigo." },
    { title: "Un pequeño juego 🎮", message: "Hoy toca divertirnos. Después prepararemos un minijuego especialmente para ti." },
    { title: "Una foto especial 📷", message: "Una imagen puede guardar un momento, pero lo bonito es todo lo que me hace recordar." },
    { title: "Mitad del camino ❤️", message: "Ya llegamos a la mitad de nuestro calendario. Espero que cada sorpresa te haya sacado una sonrisa." },
    { title: "Algo que quiero decirte", message: "Me gusta aprender de ti, conocerte cada día un poquito más y seguir creando recuerdos juntos." },
    { title: "Nuestros pingüinitos 🐧", message: "Dos pingüinitos, muchas aventuras y una historia que sigue escribiéndose." },
    { title: "Un deseo para ti ⭐", message: "Deseo que nunca te falten motivos para sonreír, sueños por cumplir y personas que te quieran bonito." },
    { title: "Un día para recordar", message: "Quiero guardar muchos más momentos contigo. Todavía nos quedan un montón de historias por vivir." },
    { title: "Un poquito de magia ✨", message: "Ojalá pudiera envolver en un regalo todas las veces que me haces feliz." },
    { title: "Diecinueve razones", message: "Hoy solo quiero recordarte que eres importante para mí y que me encanta tenerte en mi vida." },
    { title: "Una sorpresa musical 🎶", message: "Esta canción tendrá un rinconcito especial en nuestro calendario." },
    { title: "Ya casi es Navidad 🎄", message: "Gracias por acompañarme en estos días. Quiero que sepas lo mucho que significas para mí." },
    { title: "Una carta más", message: "No tengo todas las respuestas ni soy perfecto, pero tengo muchas ganas de seguir construyendo momentos bonitos contigo." },
    { title: "Un regalito antes de Navidad 🎁", message: "Mañana es un día especial. Hoy quiero dejarte un abrazo enorme en estas palabras." },
    { title: "Feliz Navidad, mi princesa ❤️", message: "Karina, este calendario fue hecho pensando en ti. No es un regalo comprado ni algo costoso, pero cada detalle lleva un poquito de mis sentimientos. Gracias por ser parte de mi vida. Te amo. Feliz Navidad, mi princesa. ❤️" }
];

const dayTitle = document.getElementById("dayTitle");
const mainTitle = document.getElementById("mainTitle");
const description = document.getElementById("description");
const countdownSection = document.getElementById("countdownSection");
const surpriseSection = document.getElementById("surpriseSection");
const surpriseTitle = document.getElementById("surpriseTitle");
const surpriseContent = document.getElementById("surpriseContent");
const giftIcon = document.getElementById("giftIcon");

if (!validDay) {
    dayTitle.textContent = "Ups...";
    mainTitle.textContent = "Este regalo no existe 💗";
    description.textContent = "Vuelve al calendario y elige uno de los 24 regalos.";
    giftIcon.textContent = "🎀";
    countdownSection.classList.add("hidden");
} else {

    const surprise = surprises[day - 1];

    dayTitle.textContent = `Día ${day}`;
    document.title = `Día ${day} - Para Kari 💗`;

    surpriseTitle.textContent = surprise.title;
    surpriseContent.textContent = surprise.message;

    function updateCountdown() {

        const now = Date.now();
        const target = getUnlockTime(day);
        const difference = target - now;

        if (difference <= 0) {
            countdownSection.classList.add("hidden");
            surpriseSection.classList.remove("hidden");
            mainTitle.textContent = "¡Llegó tu momento, princesa! 💗";
            description.textContent = "Esta sorpresa es solamente para ti.";
            giftIcon.textContent = "💝";
            return;
        }

        const totalSeconds = Math.floor(difference / 1000);

        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        document.getElementById("days").textContent = String(days).padStart(2, "0");
        document.getElementById("hours").textContent = String(hours).padStart(2, "0");
        document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
        document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Nieve
const snow = document.getElementById("snow");

for (let i = 0; i < 40; i++) {
    const flake = document.createElement("span");
    flake.className = "snowflake";
    flake.textContent = "❄";
    flake.style.left = Math.random() * 100 + "%";
    flake.style.fontSize = (Math.random() * 10 + 7) + "px";
    flake.style.animationDuration = (Math.random() * 10 + 7) + "s";
    flake.style.animationDelay = Math.random() * 10 + "s";
    snow.appendChild(flake);
}
