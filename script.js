// Update Waktu
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleString("id-ID", { weekday: "long", day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" });
    document.getElementById("time-status").innerText = `Waktu: ${timeString}`;
}

setInterval(updateTime, 1000);
updateTime();

// Load Testimoni
async function loadTestimoni(file, elementId) {
    try {
        const response = await fetch(file);
        const text = await response.text();
        document.getElementById(elementId).innerText = text;
    } catch {
        document.getElementById(elementId).innerText = "Testimoni gagal dimuat.";
    }
}

loadTestimoni("testimoni.txt", "testimoni-text-1");
loadTestimoni("testimoni2.txt", "testimoni-text-2");
loadTestimoni("testimoni3.txt", "testimoni-text-3");

// Efek Typing
const typingText = "Akbar - Web Developer";
const typingDesc = "Membuat website modern & elegan";
let index = 0, descIndex = 0;

function typeEffect() {
    if (index < typingText.length) {
        document.getElementById("typing-text").innerHTML += typingText.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

function typeDescEffect() {
    if (descIndex < typingDesc.length) {
        document.getElementById("typing-desc").innerHTML += typingDesc.charAt(descIndex);
        descIndex++;
        setTimeout(typeDescEffect, 100);
    }
}

setTimeout(typeEffect, 500);
setTimeout(typeDescEffect, 2000);
