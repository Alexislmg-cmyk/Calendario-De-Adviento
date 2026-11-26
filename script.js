
const calendar = document.getElementById("calendar");
const dedication = document.getElementById("dedication");

// Fecha de desbloqueo en horario de CDMX
function getUnlockDate(day) {
    return Date.UTC(2026, 11, day, 6, 0, 0);
}

// Crear los 24 regalos
for (let day = 1; day <= 24; day++) {

    const door = document.createElement("div");

    door.className = "door";
    door.dataset.day = day;

    door.innerHTML = `
        <span class="gift">🎁</span>
        <span class="number">${day}</span>
        <span class="status"></span>
    `;

    // Abrir el HTML correspondiente
    door.addEventListener("click", function() {

        const dayNumber = String(day).padStart(2, "0");

        window.location.href = `regalos/dia-${dayNumber}.html`;

    });

    calendar.appendChild(door);
}

// Actualizar estado de los regalos
function updateCalendar() {

    const now = Date.now();

    document.querySelectorAll(".door").forEach(door => {

        const day = Number(door.dataset.day);
        const unlockDate = getUnlockDate(day);

        const isUnlocked = now >= unlockDate;

        const status = door.querySelector(".status");

        if (isUnlocked) {

            door.classList.remove("locked");
            door.classList.add("opened");

            status.textContent = "DISPONIBLE ♡";

        } else {

            door.classList.add("locked");
            door.classList.remove("opened");

            status.textContent = "BLOQUEADO 🔒";

        }
    });

    // Cambiar la dedicatoria el 2 de diciembre
    if (now >= getUnlockDate(2)) {

        dedication.textContent =
            "Y ahora sí, mi princesa... Disfruta cada una de las sorpresas que preparé para ti. 💗";

    } else {

        dedication.textContent =
            "No tengo dinero para comprarte uno, pero sí los sentimientos para hacerte uno.";

    }
}

// Crear nieve
function createSnow() {

    const snow = document.getElementById("snow");

    for (let i = 0; i < 45; i++) {

        const flake = document.createElement("span");

        flake.className = "snowflake";
        flake.textContent = "❄";

        flake.style.left = Math.random() * 100 + "%";
        flake.style.fontSize = (Math.random() * 10 + 7) + "px";
        flake.style.animationDuration = (Math.random() * 10 + 7) + "s";
        flake.style.animationDelay = Math.random() * 10 + "s";

        snow.appendChild(flake);
    }
}

createSnow();
updateCalendar();

setInterval(updateCalendar, 1000);
