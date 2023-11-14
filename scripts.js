document.getElementById('cringe').addEventListener('click', function() {
    playSound('cringe.mp3');
});

document.getElementById('zanata').addEventListener('click', function() {
    playSound('zanata.mp3');
});

document.getElementById('supercringe').addEventListener('click', function() {
    playSound('supercringe.mp3');
});

document.getElementById('baffona').addEventListener('click', function() {
    playSound('baffona.mp3');
});

function playSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.currentTime=0;
    audio.play().catch(function(error) {
        console.log("Errore nella riproduzione audio:", error);
    });
}
