// Fungsi untuk mengambil data baterai
navigator.getBattery().then(function(battery) {
    document.getElementById("battery-info").innerText = `Baterai: ${Math.round(battery.level * 100)}%`;
});

// Fungsi untuk menampilkan waktu real-time
function updateTime() {
    let now = new Date();
    let timeString = now.toLocaleString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById("time-info").innerText = `Mengisi Waktu: ${timeString}`;
}
setInterval(updateTime, 1000);
updateTime(); 

// Fungsi untuk mengambil testimoni secara random
async function loadTestimoni() {
    const files = ["testimoni.txt", "testimoni2.txt", "testimoni3.txt"];
    for (let i = 1; i <= 3; i++) {
        let randomFile = files[Math.floor(Math.random() * files.length)];
        let response = await fetch(randomFile);
        let text = await response.text();
        let testimonials = text.split("\n").filter(t => t.trim() !== "");
        let randomTesti = testimonials[Math.floor(Math.random() * testimonials.length)];
        document.getElementById(`testimoni${i}`).innerText = randomTesti;
    }
}

loadTestimoni();
