async function loadSongs() {
  try {
    console.log('Henter sange...');
    const response = await fetch('/api/songs');
    
    if (!response.ok) {
      throw new Error('Kunne ikke hente sange');
    }
    
    const song = await response.json();
    console.log('Modtog', song.length, 'sange');
    displaySongs(song);
  } catch (error) {
    console.error('Fejl:', error);
    document.getElementById('songList').innerHTML = '<p>Kunne ikke hente sange</p>';
  }
}

function displaySongs(song) {
  const songList = document.getElementById('songList');
  songList.innerHTML = '';
  
  song.forEach(sang => {
    const songRow = document.createElement('div');
    songRow.className = 'song-row';
    songRow.innerHTML = `
      <img src="${sang.cover_image}" alt="${sang.name}" class="song-cover">
      <div class="song-info">
        <div class="song-name">${sang.name}</div>
        <div class="song-artist">${sang.artist_name}</div>
        <div class"song-duration">${sang.duration}</div>
      </div>
      <br>
    `;
    songList.appendChild(songRow);
  });
}


// Start når siden loader
loadSongs();
