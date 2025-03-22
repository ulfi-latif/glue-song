document.addEventListener("DOMContentLoaded", () => {
    let audio = document.getElementById("song");
    let lyricsContainer = document.getElementById("lyrics");

    // Lirik dengan timestamp (waktu dalam detik)
    let lyricsData = [
        { time: 12.38, text: "I've never known someone like you, ooh" },
        { time: 18.71, text: "Tangled in love, stuck by you" },
        { time: 23.04, text: "From the glue" },
        { time: 24.82, text: "Don't forget to kiss me" },
        { time: 27.91, text: "Or else you'll have to miss me" },
        { time: 31.06, text: "I guess I'm stuck forever by the glue" },
        { time: 36.06, text: "Oh, and you" },
        { time: 50.45, text: "Finding the right words to use for this song" },
        { time: 56.61, text: "I have you in mind, so it won't take so long" },
        { time: 62.77, text: "Never thought I'd find you" },
        { time: 65.72, text: "But you're here, and so I love you" },
        { time: 68.89, text: "I'm not lying" },
        { time: 70.54, text: "When I say I've been stuck" },
        { time: 73.92, text: "By the glue onto you" },
        { time: 79.87, text: "I've been stuck by glue" },
        { time: 86.99, text: "Right onto you" },
        { time: 92.50, text: "I've been stuck by glue" },
        { time: 100.61, text: "I've never known" },
        { time: 107.02, text: "I've never known someone like you" },
        { time: 113.22, text: "I've never known" },
        { time: 119.60, text: "I've never known someone like you, ooh" },
    ];

    // Munculkan alert untuk izin autoplay
    setTimeout(() => {
        let izin = confirm("Mau putar musik?");
        if (izin) {
            audio.play().catch(error => {
                console.log("Gagal memutar musik:", error);
            });
        }
    }, 1000);

    // Update lirik sesuai waktu lagu
    audio.addEventListener("timeupdate", () => {
        let currentTime = audio.currentTime;
        let currentLyric = lyricsData.find(lyric => currentTime >= lyric.time);
        if (currentLyric) {
            lyricsContainer.innerText = currentLyric.text;
        }
    });
});
