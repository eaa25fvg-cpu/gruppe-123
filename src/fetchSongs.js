async function getSpotifyPlaylistTracks (playlistID, accessToken) {
    const endpoint = 'https://api.spotify.com/v1/playlists/${playlistId}/tracks'
    try {
        const response = await fetch(endpoint, {
            headers: {
                Authorization: 'Bearer ${accessToken}'
            }

        });
        if (!response.ok) {
            throw new Error('Spotify API error: ${response.status}');
        }
        const data = await response.json();

        const songs = data.items.map(item => {
            const track = item.track;
            return {
                title: track.name,
                artist: track.artist.map(a => a.name).join(', '),
                album: track.album.name,
                featured_image: track.album.images[0].url,
                preview_url: track.preview_url,
                duration: track.duration_ms
            }
        });
        
        return songs;

    } catch (error) {
        console.error('Error fetching playlist:', error);
        return []
    }
}

const songList = document.getElementById("song-list")

// Creating Song HTML Elements
let len = songs.length;
for (let i = 0; i < len; i++) {
  const song = songs[i]; // hent sangen
  const songItem = document.createElement("div");
  songItem.classList.add("song-item");

  songItem.innerHTML = `
    <div class="song-info">
      <img class="song-cover" src="${song.cover}" alt="${song.title} cover art">
      <div class="song-cover">
        <span class="song-name">${song.title}</span>
      </div>
    </div>
  `;

  document.querySelector(".songs-container").appendChild(songItem);
}
