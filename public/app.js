// app.js
export async function loadSongs() {
  try {
    console.log('Henter sange...');
    const response = await fetch('/api/songs');
    
    if (!response.ok) {
      throw new Error('Kunne ikke hente sange');
    }
    
    const songs = await response.json();
    console.log('Modtog', songs.length, 'sange');
    return songs; // <— IMPORTANT: return the data
  } catch (error) {
    console.error('Fejl:', error);
    document.getElementById('song-list').innerHTML = '<p>Kunne ikke hente sange</p>';
    return [];
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
