let songsQueue = JSON.parse(localStorage.getItem("songsQueue")) || [];

// Gemmer til localStorage når queue opdateres
function saveQueue() {
    localStorage.setItem("songsQueue", JSON.stringify(songsQueue));
  }

function addSongQueue(song) {
    const index = songsQueue.findIndex((s) => s.name === song.name)

    if (index !== -1) {
        songsQueue.splice(index, 1)
        console.log("Sang fjernet fra queue")
    } else {

        if (songsQueue.length < 3) {
            songsQueue.push(song) 
        } else {
            console.log("Din Queue er fuld")
        }
    }
    saveQueue;
}


function removeSongQueue(song) {
    const index = songsQueue.findIndex((s) => s.name === song.name)
    if (index !== -1) {
        tracksQueue.splice(index, 1);
        console.log("Fjernet sang")
        saveQueue
    }
}

function playNext() {
    if (tracksQueue[0] == "") {
        console.log('queue is empty')
        return;
    } 
    console.log('Now playing: ' + tracksQueue[0]);
     for(let i = 0; i < 2; i++){
        tracksQueue[i] = tracksQueue[i + 1];
    }
    
    
    tracksQueue[2] = "";
    
}

function clearQueue() {
    for(let i = 0; i < 3; i++){
        tracksQueue[i] = "";
    }
    console.log('queue is cleared');
}