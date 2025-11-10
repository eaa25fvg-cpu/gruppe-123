let tracksQueue = ["", "", ""];

function addSong(songName) {
    for(let i = 0; i < 3; i++){
        if (tracksQueue[i] == ""){
            tracksQueue[i]= songName;
            console.log('added song ' + songName);
            return;
        }
    }
    console.log('queue is full ');
}


function removeSong(songName) {
    for(let i = 0; i < 3; i++){
        if (tracksQueue[i]== songName){
            console.log('Found song ' + i);
            for(let a = i; a < 2; a++){
                tracksQueue[a] = tracksQueue[a + 1];
            }
            tracksQueue[2] = "";
            console.log('removed song ' + songName)
            return;
        }
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