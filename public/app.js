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

