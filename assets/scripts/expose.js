window.addEventListener('DOMContentLoaded', init);

function init() {

    const hornSelection = document.getElementById('horn-select');
    const volumeController = document.getElementById('volume');
    const imageElement = document.querySelector('img');
    const audioElement = document.querySelector('audio');
    const playSoundButton = document.querySelector('button');
    const volumeIcon = document.querySelector('#volume-controls img');
    const jsConfetti = new JSConfetti(); 

    hornSelection.addEventListener('change', function() {
        updateHorn(hornSelection.value, imageElement, audioElement);
    });
   
    playSoundButton.addEventListener('click', function() {
        playSound(audioElement, hornSelection.value, jsConfetti);
    });

    volumeController.addEventListener('input', function() {
        updateVolumeIcon(volumeController.value, volumeIcon);
        audioElement.volume = volumeController.value / 100;
    });
}

function updateHorn(horn, image, audio) {
    if (horn == 'air-horn') {
        image.src = 'assets/images/air-horn.svg';
        audio.src = 'assets/audio/air-horn.mp3';    
        
    }
    else if (horn == 'car-horn') {
        image.src = 'assets/images/car-horn.svg';
        audio.src = 'assets/audio/car-horn.mp3';
        
    }
    else if (horn == 'party-horn'){
        image.src = 'assets/images/party-horn.svg';
        audio.src = 'assets/audio/party-horn.mp3';   
        jsConfetti.addConfetti();
    }
    else {
        image.src = 'assets/images/no-image.png';
        audio.src = '';
    }
}

function playSound(audioElement, horn, jsConfetti) {
    if (audioElement.src) {
        audioElement.play();
        if (horn === 'party-horn') {
            jsConfetti.addConfetti();
        }
    }
}

function updateVolumeIcon(volume, icon) {
    if (volume == 0) {
        icon.src = 'assets/icons/volume-level-0.svg';
    } 
    else if (volume < 33) {
        icon.src = 'assets/icons/volume-level-1.svg';
    } 
    else if (volume < 67) {
        icon.src = 'assets/icons/volume-level-2.svg';
    } 
    else {
        icon.src = 'assets/icons/volume-level-3.svg';
    }
}
