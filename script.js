const lyrics = [
    { time: 0, text: "I've never known someone like you" },
    { time: 3, text: "Tangled in love, stuck by you" },
    { time: 7, text: "From the glue" },
    { time: 10, text: "Don't forget to kiss me" },
    { time: 15, text: "Or else you'll have to miss me" },
    { time: 19, text: "I guess I'm stuck forever" },
    { time: 23, text: "By the glue, oh, and you" },
    { time: 27, text: "Ooo-ooo" },
    { time: 31, text: "Lirik lainnya..." }
];

const lyricsContainer = document.getElementById("lyrics");
const song = document.getElementById("song");

function updateLyrics() {
    let currentTime = song.currentTime;
    let currentLyric = lyrics.find((line, index) => {
        return currentTime >= line.time && (index === lyrics.length - 1 || currentTime < lyrics[index + 1].time);
    });

    if (currentLyric) {
        lyricsContainer.textContent = currentLyric.text;
    }
    console.log(song.currentTime);

    function updateLyrics() {
    console.log("Current Time:", song.currentTime);
}
}

song.addEventListener("timeupdate", updateLyrics);
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("song");
    document.body.addEventListener("click", function () {
        audio.play();
    }, { once: true }); // Hanya dijalankan sekali
});
