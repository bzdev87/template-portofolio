let testimoniData = {
    "testimoni1": "testimoni.txt",
    "testimoni2": "testimoni2.txt",
    "testimoni3": "testimoni3.txt"
};

// Fungsi untuk mengambil data testimoni secara acak
async function loadTestimoni(file) {
    try {
        let response = await fetch(file);
        let text = await response.text();
        let entries = text.split("---").map(entry => entry.trim()).filter(entry => entry);
        return entries.length > 0 ? entries[Math.floor(Math.random() * entries.length)] : "Testimoni tidak tersedia.";
    } catch (error) {
        console.error("Gagal memuat testimoni dari:", file);
        return "Gagal memuat testimoni.";
    }
}

// Memuat testimoni ke tempatnya masing-masing
async function loadAllTestimoni() {
    for (let key in testimoniData) {
        document.getElementById(key).textContent = await loadTestimoni(testimoniData[key]);
    }
}

loadAllTestimoni();

// Fungsi update waktu real-time
function updateTime() {
    let now = new Date();
    let jam = now.getHours().toString().padStart(2, "0");
    let menit = now.getMinutes().toString().padStart(2, "0");
    let detik = now.getSeconds().toString().padStart(2, "0");
    let tanggal = now.toLocaleDateString("id-ID", { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
    document.getElementById("time-info").textContent = `Waktu: ${tanggal} ${jam}:${menit}:${detik}`;
}

setInterval(updateTime, 1000);
updateTime(); // Jalankan langsung saat halaman dibuka

// Fungsi update status baterai
function updateBattery(battery) {
    let level = Math.round(battery.level * 100);
    let charging = battery.charging ? "⚡ Mengisi" : "";
    document.getElementById("battery-info").textContent = `Baterai: ${level}% ${charging}`;
}

// Deteksi status baterai
if (navigator.getBattery) {
    navigator.getBattery().then(battery => {
        updateBattery(battery);
        battery.addEventListener("levelchange", () => updateBattery(battery));
        battery.addEventListener("chargingchange", () => updateBattery(battery));
    });
} else {
    document.getElementById("battery-info").textContent = "Baterai: Tidak didukung";
}
