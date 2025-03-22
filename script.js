const song = document.getElementById("song");
const lyricsContainer = document.getElementById("lyrics");

const lyrics = [
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

window.onload = function () {
    let playMusic = confirm("Let's play this song!");

    if (playMusic) {
        document.body.addEventListener("click", function playOnClick() {
            song.play();
            document.body.removeEventListener("click", playOnClick); // Hapus listener setelah sekali klik
        });
    }
};


song.addEventListener("timeupdate", function () {
    let currentTime = song.currentTime;
    let currentLyric = lyrics.find((line, index) => {
        return currentTime >= line.time && (index === lyrics.length - 1 || currentTime < lyrics[index + 1].time);
    });

    if (currentLyric) {
        lyricsContainer.textContent = currentLyric.text;
    }
});
